import { Menu } from "@headlessui/react";
import { navigate } from "gatsby";
import * as React from "react";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { MdLeaderboard, MdSearch } from "react-icons/md";
import Layout from "../../components/layout";
import { DropDownMenu, MenuItem } from "../../components/navbar/dropdown";
import Navbar from "../../components/navbar/Navbar";
import { supabase } from "../../utils/supabase";

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
          <section className=" flex items-center justify-between">
            <table className="border border-blue-50 min-w-full justify-evenly mt-4 items-center leading-normal ">
              <thead>
                <th>S.No</th>
                <th>Title</th>
                <th>Last Updated on</th>
              </thead>
              <tr>
                <td>Lorem</td>
                <td>Ipsum </td>
                <td>Dolor</td>
              </tr>
            </table>
          </section>
        </section>
      </Layout>
    </>
  );
};

export default Reports;
{
  /* <div className="p-8 rounded-md w-full">
        <div className=" flex items-center justify-between pb-6">
          <div className="text-white font-semibold">
            <h2 className="">Reports Oder</h2>
            <span className="text-xs">All Reports</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="bg-gray-50 outline-none ml-1 block "
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
            <div className="lg:ml-40 ml-10 space-x-8">
              <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                New Report
              </button>
              <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                Create
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      products
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Created at
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      QRT
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-teal-50 whitespace-no-wrap">
                            Vera Carpenter
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">Admin</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">
                        Jan 21, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">43</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Activo</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10"></div>
                        <div className="ml-3">
                          <p className="text-teal-50 whitespace-no-wrap">
                            Blake Bowman
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">Editor</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">
                        Jan 01, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">77</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Activo</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-teal-50 whitespace-no-wrap">
                            Dana Moore
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">Editor</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">
                        Jan 10, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">64</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200  text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Suspended</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5  text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10"></div>
                        <div className="ml-3">
                          <p className="text-teal-50 whitespace-no-wrap">
                            Alonzo Cox
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">Admin</p>
                    </td>
                    <td className="px-5 py-5  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">
                        Jan 18, 2020
                      </p>
                    </td>
                    <td className="px-5 py-5  text-sm">
                      <p className="text-teal-50 whitespace-no-wrap">70</p>
                    </td>
                    <td className="px-5 py-5  text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Inactive</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="px-5 py-5  border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span className="text-xs xs:text-sm text-teal-50">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  &nbsp; &nbsp;
                  <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> */
}
