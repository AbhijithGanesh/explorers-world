import * as React from "react";
import { FiLogIn } from "react-icons/fi";
import { MdAddTask, MdSearch } from "react-icons/md";
import Layout from "../../components/layout";
import { DropDownMenu, MenuItem } from "../../components/navbar/dropdown";
import Navbar from "../../components/navbar/Navbar";

let EmptyIndex = (): JSX.Element => {
  return (
    <>
      <Layout>
        <Navbar>
          <>
            <DropDownMenu>
              <>
                <MenuItem
                  icon={<MdAddTask />}
                  link="/challenges"
                  text="Challenges"
                />
                <MenuItem icon={<FiLogIn />} link={"/login"} text={"Login"} />
                <MenuItem
                  icon={<MdSearch className="text-xl" />}
                  link="/search"
                  text="Search for explorers"
                />
              </>
            </DropDownMenu>
          </>
        </Navbar>
        <section className="py-8 text-3xl font-bold text-white">
          Current standings!
        </section>
      </Layout>
    </>
  );
};

export default EmptyIndex;
