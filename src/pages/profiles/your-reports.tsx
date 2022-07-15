import { Menu } from "@headlessui/react";
import { navigate } from "gatsby";
import * as React from "react";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { MdLeaderboard, MdSearch } from "react-icons/md";
import Layout from "../../components/layout";
import { DropDownMenu, MenuItem } from "../../components/navbar/dropdown";
import Navbar from "../../components/navbar/Navbar";
import { supabase } from "../../utils/supabase";

interface tableHeadProps {
  name: String;
}

let Table_Head = ({ name }: tableHeadProps): JSX.Element => {
  return (
    <>
      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
        {name}
      </th>
    </>
  );
};

interface serverDataType {
  title: String;
  links: String;
  unique_id: String;
  last_updated_at: typeof Date;
}

interface Props {
  serverData: serverDataType;
}

let Table_Data = ({ name }: tableHeadProps): JSX.Element => {
  return (
    <td className="py-5 border-b border-gray-200 text-sm">
      <p className="text-teal-50 text-center whitespace-no-wrap">{name}</p>
    </td>
  );
};

let Reports = (): React.ReactNode => {
  return (
    <>
      <Layout>
        <Navbar>
          <DropDownMenu>
            <>
              <MenuItem
                icon={<MdLeaderboard />}
                link="/leaderboard"
                text="View Leaderboard"
              />
              <MenuItem
                icon={<GiSandsOfTime />}
                link={"/profiles/new-report"}
                text={"Submit a new report"}
              />
              <MenuItem
                icon={<MdSearch className="text-xl" />}
                link="/search"
                text="Search for explorers"
              />
              <Menu.Item>
                <button
                  className="z-2 top flex justify-start gap-2 bg-white text-black font-medium hover:bg-emerald-300 hover:font-bold group w-full items-center rounded-md p-2 text-md"
                  onClick={async (e) => {
                    await supabase.auth.signOut();
                    navigate("/");
                  }}
                >
                  <section className="m-1">
                    <AiOutlineUsergroupDelete />
                  </section>
                  LogOut
                </button>
              </Menu.Item>
            </>
          </DropDownMenu>
        </Navbar>
        <section className="text-white font-semibold">
          <section className="py-8">
            <table className="w-full leading-normal">
              <thead>
                <tr>
                  <Table_Head name={"Name"} />
                  <Table_Head name={"Created At"} />
                  <Table_Head name={"Products"} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Table_Data name={"Jeffrey Carpenter"} />
                  <Table_Data name={"Admin"} />
                  <Table_Data name={"Jan 21, 2020"} />
                </tr>
                <tr>
                  <Table_Data name={"Blake Bowman"} />
                  <Table_Data name={"Editor"} />
                  <Table_Data name={"Jan 01, 2020"} />
                </tr>
                <tr>
                  <Table_Data name={"Blake Bowman"} />
                  <Table_Data name={"Editor"} />
                  <Table_Data name={"Jan 01, 2020"} />
                </tr>
                <tr>
                  <Table_Data name={"Blake Bowman"} />
                  <Table_Data name={"Editor"} />
                  <Table_Data name={"Jan 01, 2020"} />
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </Layout>
    </>
  );
};

export default Reports;
// https://medium.com/@8025918/gatsby-4-using-ssr-and-dsg-14742eaecb66