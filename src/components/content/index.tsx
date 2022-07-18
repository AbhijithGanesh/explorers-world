import logo from "../../images/logo.png";
import * as React from "react";
import { supabase } from "../../utils/supabase";
import { navigate } from "gatsby";
import { useEffect } from "react";
import { FiLogIn } from "react-icons/fi";
import { MdAddTask, MdLeaderboard, MdSearch } from "react-icons/md";
import Layout from "../layout";
import { DropDownMenu, MenuItem } from "../navbar/dropdown";
import Navbar from "../navbar/Navbar";

export default function IndexPage() {
  useEffect(() => {
    return () => {
      if (!supabase.auth.session()?.user) {
        navigate("/login");
      }
    };
  }, []);

  return (
    <Layout>
      <>
        <Navbar>
          <section className="z-10">
            <DropDownMenu>
              <>
                <MenuItem
                  icon={<FiLogIn />}
                  link="/login"
                  text="Access Profile"
                />
                <MenuItem
                  icon={<MdLeaderboard />}
                  link="/leaderboard"
                  text="Leaderboard"
                />
                <MenuItem
                  icon={<MdAddTask />}
                  link="/challenges"
                  text="Challenges"
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
        <section className="-z-10 p-12">
          <img src={logo} alt="Hello" />
        </section>
        <section className="z-0 py-10 translate-x-9 flex justify-start text-right text-white font-black lg:text-4xl md:text-2xl sm:text-xl hover:transition-transform  hover:translate-x-8">
          What are these challenges?
        </section>
        <section className="text-white px-8  text-lg font-regular">
          We believe its essential for practitioners to be able to use the
          technologies featured in our livestreams and panels. By doing so, we
          provide a context in which community members can learn and grow
          together. These challenges will have an interesting task and specific
          instructions in terms of what you need to have in your local
          environment.
        </section>
        <section className="py-8 flex flex-auto justify-end -translate-x-4 text-white font-extrabold lg:text-4xl md:text-2xl sm:text-xl hover:italic hover:transition-transform  hover:-translate-x-8">
          How to solve them and record them ?
        </section>
        <section className="text-white px-8 text-lg font-regular">
          You can create your Explorer profile here and submit challenges
          accordingly ! Each challenge will have its own time frame. Your
          submissions will be evaluated and accordingly rewarded. Your credits
          will be stored and recorded here in the explorer&#39;s directory. The
          most consistent contributors will recieve interesting rewards.
        </section>
        <section className="px-2 flex flex-auto py-4 text-white lg:text-2xl md:text-xl sm:text-lg font-bold justify-center text-left">
          The open-source community you need to explore, grow and advance your{" "}
          Data on Kubernetes skills!
        </section>
      </>
    </Layout>
  );
}
