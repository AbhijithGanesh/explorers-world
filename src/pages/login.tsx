import { navigate } from "gatsby";
import * as React from "react";
import { useEffect } from "react";
import { BsTrophyFill } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import EmailAddr from "../components/auth/signin";
import ThirdPartyAuth from "../components/auth/third-party";
import Layout from "../components/layout";
import { DropDownMenu, MenuItem } from "../components/navbar/dropdown";
import Navbar from "../components/navbar/Navbar";
import { supabase } from "../utils/supabase";

let Auth = (): JSX.Element | any => {
  useEffect(() => {
    if (supabase.auth.session()?.user?.aud == "authenticated") {
      navigate("/profiles");
    }
  }, [navigate, supabase.auth.session()]);
  console.log(supabase.auth.session());
  return (
    <Layout>
      <>
        <Navbar>
          <section className="z-10">
            <DropDownMenu>
              <>
                <MenuItem
                  icon={<BsTrophyFill />}
                  link="/challenges"
                  text="View Challenges"
                />
                <MenuItem
                  icon={<MdSearch className="text-xl" />}
                  link="/search"
                  text="Search for explorers"
                />
              </>
            </DropDownMenu>
          </section>
        </Navbar>
        <section className="flex py-8 text-center text-white text-4xl font-extrabold hover:italic">
          Login
        </section>
        <ThirdPartyAuth />
        <EmailAddr />
      </>
    </Layout>
  );
};

export default Auth;
