import Tab from "@/components/UI/tabs/Tabs";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import ContactDetailForm from "@/components/UI/tabs/ContactDetailForm";

export default function Home() {
  //const { query } = useRouter();
  const router = useRouter(); // Add this line
  const { data: session } = useSession();
  const { address } = useWeb3();

  useEffect(() => {
    if (session || address) {
      //console.log(JSON.parse(localStorage.getItem('uniqueEmails'))[session.user.email]);

      let credentials = session ? session.user.email : address;
      const storedUniqueEmails = localStorage.getItem("uniqueEmails");
      const isUserExists =
        storedUniqueEmails && JSON.parse(storedUniqueEmails)[credentials];
      if (!isUserExists) {
        if (session) {
          addUniqueEmail(session.user.email);
        } else {
          addUniqueEmail(address);
        }
        router.push("/contact-details");
      } else {
        router.push("/dashboard");
      }
    }
  }, [session, address]);

  function addUniqueEmail(email) {
    // Retrieve the existing object from local storage (if it exists)
    const storedEmailsJSON = localStorage.getItem("uniqueEmails");
    let uniqueEmails = {};

    // Parse the stored object or initialize an empty object if it doesn't exist
    if (storedEmailsJSON) {
      uniqueEmails = JSON.parse(storedEmailsJSON);
    }

    // Check if the email already exists in the object
    if (!uniqueEmails.hasOwnProperty(email)) {
      // Add the email to the object
      uniqueEmails[email] = true;

      // Serialize the object to JSON
      let updatedEmailsJSON = JSON.stringify(uniqueEmails);

      // Store the updated object back in local storage
      localStorage.setItem("uniqueEmails", updatedEmailsJSON);

      console.log(`Email '${email}' added to local storage.`);
    } else {
      console.log(`Email '${email}' already exists in local storage.`);
    }
  }

  return (
    <div className="grid grid-cols-4 gap-4 h-screen">
      <div className="col-span-4 lg:col-span-3 flex justify-center items-center">
        <div className="bg-[#f1f1f1] border shadow-xl rounded-xl mx-4">
          <Tab />
        </div>
      </div>
      <div className="col-span-4 lg:col-span-1 flex justify-center items-center border rounded-none lg:rounded-bl-[250px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="mx-auto">
          <div className="w-20 h-20 bg-white rounded-full"></div>
          <h1 className="text-white text-lg font-semibold -mx-2 my-2">
            ByteBreach
          </h1>
        </div>
      </div>
    </div>
  );
}
