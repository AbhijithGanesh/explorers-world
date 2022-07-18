import * as React from "react";
import EmailAddr from "../components/auth/signin";
import ThirdPartyAuth from "../components/auth/third-party";
import Layout from "../components/layout";
import { supabase } from "../utils/supabase";

let Auth = (): JSX.Element | any => {
  // if (supabase.auth.session()?.user?.id) {
  //   window.location.href = "/profiles";
  // }
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
};

export default Auth;
