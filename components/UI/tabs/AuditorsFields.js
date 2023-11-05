import IconButton from "@/components/common/IconButton";
import InputField from "@/components/common/InputField";
import TextButton from "@/components/common/TextButton";
import { useRouter } from "next/router";
import GoogleIcon from "@/public/images/google-icon.svg";
import EmailIcon from "@/public/images/mail-line.svg";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AuditorsFields() {
  const [email, setEmail] = useState("");
  const router = useRouter(); // Add this line

  const handleSignIn = async (account) => {
    try {
      await signIn(account);
    } catch (e) {
      console.log("Unable to sign in", e);
    }
  };

  const handleEmailSubmit = () => {
    console.log(email);

    if (email) {
      localStorage.setItem("useremail", email);
      // Add the email to local storage
      addUserEmail(email);
      setEmail(""); // Clear the input field
    } else {
      console.log("Email cannot be empty.");
    }
  };

  const addUserEmail = (email) => {
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
      router.push("/");

      console.log(`Email '${email}' added to local storage.`);
    } else {
      router.push("/dashboard");
      console.log(`Email '${email}' already exists in local storage.`);
    }
  };

  return (
    <div className="my-4">
      <div className="mx-6 lg:mx-20">
        <IconButton
          onClick={() => handleSignIn("google")}
          src={GoogleIcon}
          text="Login using your Google Account"
        />

        <div>
          <InputField
            src={EmailIcon}
            label={"Email"}
            placeholder={"Email Address"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <TextButton
          href="/dashboard"
          text={"Submit"}
          onClick={handleEmailSubmit}
        />
      </div>
    </div>
  );
}
