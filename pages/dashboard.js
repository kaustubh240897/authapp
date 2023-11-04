import { useSession, signOut } from "next-auth/react";
import TextButton from "@/components/common/TextButton";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import AuthContext from "@/lib/AuthContext";

export default function Dashboard() {
  const { useremail, setUserEmail } = useContext(AuthContext);
  console.log("auth", useremail);
  const router = useRouter(); // Add this line
  const { data: session, msg } = useSession();
  const { address, disconnectWallet } = useWeb3();

  function handleSignOut() {
    if (session) {
      signOut();
    } else if (address) {
      disconnectWallet();
    } else if (useremail !== "") {
      localStorage.removeItem("useremail");
      // setUserEmail("");
    }
  }
  useEffect(() => {
    if (!session && !address && useremail === "") {
      router.push("/");
    }
  }, [session, address]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>
        Hello{" "}
        {address
          ? address
          : session && session.user.email
          ? session.user.email
          : useremail !== ""
          ? useremail
          : ""}
      </h1>

      <TextButton text="Home" href="/" />
      {session ? (
        <TextButton onClick={() => handleSignOut()} text="logout" />
      ) : (
        ""
      )}

      {/* {useremail ? (
        <TextButton onClick={() => handleSignOut()} text="logout" />
      ) : (
        ""
      )} */}
    </div>
  );
}
