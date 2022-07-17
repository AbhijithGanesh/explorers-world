import * as React from "react";
import { FiLogIn } from "react-icons/fi";
import { MdAddTask, MdLeaderboard, MdSearch } from "react-icons/md";
import Layout from "../components/layout";
import { DropDownMenu, MenuItem } from "../components/navbar/dropdown";
import Navbar from "../components/navbar/Navbar";
import Main from "../components/content/main";
import About from "../components/content/about";
import Challenges from "../components/content/challenges";
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
          <About />
          <Challenges />
        </>
      </Layout>
    </>
  );
};

export default IndexPage;
