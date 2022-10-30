import { navigate } from "gatsby";
import * as React from "react";
import { useEffect } from "react";
import { BsGearWideConnected } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { MdAddTask, MdSearch } from "react-icons/md";
import Layout from "../../components/layout";
import { DropDownMenu, MenuItem } from "../../components/navbar/dropdown";
import Navbar from "../../components/navbar/Navbar";
import { supabase } from "../../utils/supabase";

interface tableHeadProps {
  name: String | JSX.Element;
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

let Table_Data = ({ name }: tableHeadProps): JSX.Element => {
  return (
    <td className="py-5 border-b border-gray-200 text-sm">
      <p className="text-teal-50 text-center whitespace-no-wrap">{name}</p>
    </td>
  );
};

let EmptyIndex = (): JSX.Element => {
  if (supabase.auth.session()?.user?.aud != "authenticated") {
    navigate("/login");
  }
  // useEffect(() => {
  //   return () => {};
  // }, [navigate, supabase.auth.session()]);
  return (
    <>
      <Layout>
        <Navbar>
          <>
            <section className="z-10">
              <DropDownMenu>
                <>
                  <MenuItem
                    icon={<GiSandsOfTime />}
                    link={"/profiles/new-report"}
                    text={"Submit a new report"}
                  />
                  <MenuItem
                    icon={<HiOutlineDocumentDuplicate className="text-xl" />}
                    link="./profiles/your-reports"
                    text="Submitted Reports"
                  />
                  <MenuItem
                    icon={<MdAddTask />}
                    link="/challenges"
                    text="Challenges"
                  />
                  <MenuItem
                    icon={<BsGearWideConnected />}
                    link={"/profiles"}
                    text={"Profile"}
                  />
                  <MenuItem
                    icon={<MdSearch className="text-xl" />}
                    link="/search"
                    text="Search for explorers"
                  />
                </>
              </DropDownMenu>
            </section>
          </>
        </Navbar>
        <section className="py-8 text-3xl font-bold text-white">
          Current standings!
        </section>
        <section>
          <table className="w-full leading-normal">
            <thead>
              <tr>
                <Table_Head name={"S.No"} />
                <Table_Head name={"Username"} />
                <Table_Head name={"Last checked at"} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <Table_Data key={1} name={"1"} />
                <Table_Data key={2} name={"Empty"} />
                <Table_Data key={3} name={``} />
              </tr>
              <tr>
                <Table_Data key={1} name={"2"} />
                <Table_Data key={2} name={"Empty"} />
                <Table_Data key={3} name={``} />
              </tr>
              <tr>
                <Table_Data key={1} name={"3"} />
                <Table_Data key={2} name={"Empty"} />
                <Table_Data key={3} name={``} />
              </tr>
            </tbody>
          </table>
        </section>
      </Layout>
    </>
  );
};

export default EmptyIndex;
