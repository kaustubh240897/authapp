import IconButton from "@/components/common/IconButton";
import InputField from "@/components/common/InputField";
import GithubIcon from "@/public/images/github-icon.svg";
import GoogleIcon from "@/public/images/google-icon.svg";
import WalletIcon from "@/public/images/wallet-icon.svg";
import EmailIcon from "@/public/images/mail-line.svg";
import TextButton from "@/components/common/TextButton";
import { useRouter } from "next/router";
import { useWeb3 } from "@3rdweb/hooks";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";

export default function ClientFields() {
  const router = useRouter(); // Add this line
  const [email, setEmail] = useState("");
  const { data: session } = useSession();
  const { address, chainId, connectWallet } = useWeb3();

  async function handleOnSubmit(e) {
    e.preventDefault();

    console.log("fields", fields);
    console.log("errors", errors);
    console.log("formValid", formValid);

    const formData = {};
    [...e.currentTarget.elements].map((field) => {
      if (!field.name) return false;
      checkValidation([field.name], field.value);
      setFields({ ...fields, [field.name]: field.value });
    });

    if (formValid === false) return false;

    try {
      const response = await fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(formData),
      });
      const body = await response.json();
      console.log(body);
    } catch (error) {
      console.log(error);
    }

    console.log(formData);
  }

  const handleEmailSubmit = () => {
    console.log(email);
    if (email) {
      // Add the email to local storage
      addUserEmail(email);
      setEmail(""); // Clear the input field
    } else {
      console.log("Email cannot be empty.");
    }
  };

  function connectwithWallet() {
    if (window.ethereum) {
      connectWallet("injected");
    } else {
      console.log("get metamask");
      alert("Get MetaMask Wallet first.");
    }
  }
  const handleSignIn = async (account) => {
    const response = await signIn(account);
    console.log(response);
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

  // useEffect(() => {
  //   if(session || address){

  //     if(localStorage.getItem("uniqueEmails")){
  //       router.push("/dashboard");
  //     }
  //     else{
  //       router.push("/")
  //     }
  //   }

  // },[session, address])

  return (
    <div className="my-4">
      <div className="mx-6 lg:mx-20">
        <IconButton
          onClick={() => handleSignIn("google")}
          src={GoogleIcon}
          text="Login using your Google Account"
        />
      </div>
      <div className="mx-6 lg:mx-20">
        <IconButton
          onClick={() => handleSignIn("github")}
          src={GithubIcon}
          text="Login using your Github Account"
        />
      </div>

      <div className="mx-6 lg:mx-20">
        <IconButton
          onClick={() => connectwithWallet()}
          src={WalletIcon}
          text="Login using your Wallet"
        />
      </div>

      {/*
       */}

      {address ? (
        <div>
          <p>Address: {address}</p>
          <p>ChainId: {chainId}</p>
        </div>
      ) : (
        ""
      )}
      {session ? (
        <div>
          <p>Email: {session.user.email}</p>
          <button onClick={() => signOut()}>logout</button>
        </div>
      ) : (
        ""
      )}

      <div className="mx-6 lg:mx-20">
        <InputField
          type="email"
          src={EmailIcon}
          label={"Email"}
          placeholder={"Email Address"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isRequired={true}
        />
      </div>

      <TextButton
        href="/dashboard"
        text={"Submit"}
        onClick={handleEmailSubmit}
      />
    </div>
  );
}
