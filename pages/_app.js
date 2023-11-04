import "@/styles/globals.css";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { SessionProvider } from "next-auth/react";
import AuthContext from "../lib/AuthContext.js";
import { useEffect, useState } from "react";

const supportedChainIds = [1, 4];
const connectors = {
  injected: {},
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [useremail, setUserEmail] = useState("");
  useEffect(() => {
    let item = localStorage.getItem("useremail");

    setUserEmail(item);
  }, []);

  console.log("userMail", useremail);
  return (
    <SessionProvider session={session}>
      <AuthContext.Provider
        value={{
          useremail,
          setUserEmail,
        }}
      >
        <ThirdwebWeb3Provider
          supportedChainIds={supportedChainIds}
          connectors={connectors}
        >
          <Component {...pageProps} />
        </ThirdwebWeb3Provider>
      </AuthContext.Provider>
    </SessionProvider>
  );
}
