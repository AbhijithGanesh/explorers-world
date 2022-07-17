import * as React from "react";
import { FC } from "react";
import { FiLogIn } from "react-icons/fi";
import { MdAddTask, MdLeaderboard, MdSearch } from "react-icons/md";
import Layout from "../components/layout";
import { DropDownMenu, MenuItem } from "../components/navbar/dropdown";
import Navbar from "../components/navbar/Navbar";
import { supabase } from "../utils/supabase";

const IndexPage: FC = () => {
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
          <h1 className="text-rose-100 font-bold text-4xl">
            Tailwind is being used here!
          </h1>
        </>
      </Layout>
    </>
  );
};

export default IndexPage;
