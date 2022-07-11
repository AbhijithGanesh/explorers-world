import * as React from "react";
import Layout from "../components/layout";
import { useState } from "react";
import ThirdPartyAuth from "../components/auth/third-party";
import EmailAddr from "../components/auth/signin";
import { supabase } from "../../utils/supabase";

let Auth = (): JSX.Element | any => {
  const [loggedIn, setLoggedIn] = useState(supabase.auth.user() ? true : false);

  if (!loggedIn) {
    return (
      <Layout>
        <>
          <section className="flex flex-auto py-8 px-2 text-center text-white text-4xl font-extrabold hover:italic">
            Login
          </section>
          <EmailAddr />
          <ThirdPartyAuth />
        </>
      </Layout>
    );
  } else {
    setLoggedIn(true);
    window.location.href = `/`;
    return (
      <>
        <section className="bg-black"></section>
      </>
    );
  }
};

export default Auth;
