import { Menu } from "@headlessui/react";
import { navigate } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { MdLeaderboard, MdSearch } from "react-icons/md";
import CreateProfile from "../../components/createProfile";
import Layout from "../../components/layout";
import ChartContainer from "../../components/leaderboard/heatmap";
import { DropDownMenu, MenuItem } from "../../components/navbar/dropdown";
import Navbar from "../../components/navbar/Navbar";
import { CardProps } from "../../types/props";
import { supabase } from "../../utils/supabase";

interface tagProps {
  item: string;
}

const Tag_Element = ({ item }: tagProps): JSX.Element => {
  return <section className="font-regular text-lg">#{item}</section>;
};

const Card = ({ title, description, Tags, points }: CardProps): JSX.Element => {
  return (
    <>
      <section className="text-white ring-2 ring-gray-300 my-8 rounded-lg hover:transform-cpu hover: flex flex-auto justify-between">
        <section>
          <section className="py-2 px-4 text-2xl font-extrabold">
            {title}
          </section>
          <section className="px-4 font-regular text-xl">{description}</section>
          <section className="flex flex-auto font-semibold px-4 gap-4">
            {Tags?.map((tag): JSX.Element => {
              return <Tag_Element key={tag} item={tag} />;
            })}
          </section>
          <section className="px-6 py-2 font-regular hover:italic text-lg">
            {points} xp for this challenge.
          </section>
        </section>
      </section>
    </>
  );
};

type DataType = {
  title: string;
  description: string;
  due_date: string;
  tags: Array<string>;
  "xp-points": number;
};
let Handler = ({ serverData }: any): React.ReactNode => {
  let count: number = 0;
  let array: Array<number> = [1];
  let y: Array<number>;
  useEffect(() => {
    return () => {
      if (!supabase.auth.session()?.user) {
        navigate("/login");
      }
    };
  }, []);

  return (
    <>
      <Layout>
        <>
          <Navbar>
            <section className="z-10">
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
                  <MenuItem
                    icon={<HiOutlineDocumentDuplicate className="text-xl" />}
                    link="./your-reports"
                    text="Submitted Reports"
                  />

                  <Menu.Item>
                    <section
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
                    </section>
                  </Menu.Item>
                </>
              </DropDownMenu>
            </section>
          </Navbar>
          <CreateProfile />

          <section className="pt-4 pb-8 text-white font-bold text-2xl">
            Your Contributions!
            <section className="mt-2 h-0.5 w-auto bg-gradient-to-r from-teal-800  to-emerald-400" />
          </section>
          {serverData.ContriLog.forEach((i: any) => {
            if (i.user_id == supabase.auth.user()?.id) {
              count += 1;
            }
          })}
          {(y = array.map((x) => x * count))}
          <div className="hidden lg:block sm:hidden md:hidden">
            <ChartContainer
              count={y}
              size={"15px"}
              gap={"2px"}
              squares={count}
            />
          </div>
          <div className="hidden md:block lg:hidden sm:hidden">
            <ChartContainer
              count={y}
              size={"10px"}
              gap={"2px"}
              squares={count}
            />
          </div>
          <div className="hidden sm:block lg:hidden md:hidden">
            <ChartContainer
              count={y}
              size={"6px"}
              gap={"2px"}
              squares={count}
            />
          </div>
          <section className="pt-4 text-white font-extrabold text-3xl">
            List of Challenges!
          </section>

          {serverData.Challenges.map((i: DataType): React.ReactNode => {
            return (
              <>
                <Card
                  key={i.title}
                  title={i?.title}
                  description={i?.description}
                  Tags={i?.tags}
                  points={i["xp-points"]}
                  href={"https://www.youtube.com/c/DoKcommunity/videos"}
                />
              </>
            );
          })}
        </>
      </Layout>
    </>
  );
};

export default Handler;

export const getServerData = async () => {
  let Challenges = await supabase
    .from("Challenges")
    .select("title, description, due_date, tags, xp-points");
  let CLog = await supabase.from("Contrilog").select("user_id, contributions");

  let data = {
    ContriLog: CLog.data,
    Challenges: Challenges.data,
  };

  if (Challenges.error) {
    return Error("Error during fetching");
  } else {
    return {
      props: data,
      status: 200,
    };
  }
};
