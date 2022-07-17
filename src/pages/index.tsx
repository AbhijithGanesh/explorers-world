import * as React from "react";
import { FiLogIn } from "react-icons/fi";
import Main from "../components/content/main";
import { MdAddTask, MdLeaderboard, MdSearch } from "react-icons/md";
import Layout from "../components/layout";
import { DropDownMenu, MenuItem } from "../components/navbar/dropdown";
import Navbar from "../components/navbar/Navbar";
import { supabase } from "../utils/supabase";

const IndexPage = () => {
  if (supabase.auth.session()?.user?.id) {
    window.location.href = "/profiles";
  }

  return (
    <>
      <Layout>
        <>
          <Navbar>
            <DropDownMenu>
              <>
                <MenuItem
                  icon={<FiLogIn />}
                  link="/login"
                  text="Login/SignUp"
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
          </Navbar>
          <Main />
          <section className="z-0 py-10 translate-x-9 flex justify-start text-right text-white font-black lg:text-4xl md:text-2xl sm:text-xl hover:transition-transform  hover:translate-x-8">
            What are these challenges?
          </section>
          <section className="text-white px-8  text-lg font-regular">
            We believe its essential for practitioners to be able to use the
            technologies featured in our livestreams and panels. By doing so, we
            provide a context in which community members can learn and grow
            together. These challenges will have an interesting task and
            specific instructions in terms of what you need to have in your
            local environment.
          </section>
          <section className="py-8 flex flex-auto justify-end -translate-x-4 text-white font-extrabold lg:text-4xl md:text-2xl sm:text-xl hover:italic hover:transition-transform  hover:-translate-x-8">
            How to solve them and record them ?
          </section>
          <section className="text-white px-8 text-lg font-regular">
            You can create your Explorer profile here and submit challenges
            accordingly ! Each challenge will have its own time frame. Your
            submissions will be evaluated and accordingly rewarded. Your credits
            will be stored and recorded here in the explorer&#39;s directory.
            The most consistent contributors will recieve interesting rewards.
          </section>
          <section className="flex flex-auto py-4 text-white lg:text-2xl md:text-xl sm:text-lg lg:font-bold justify-center text-left">
            The open-source community you need to explore, grow and advance your{" "}
            Data on Kubernetes skills!
          </section>
        </>
      </Layout>
    </>
  );
};

export default IndexPage;
