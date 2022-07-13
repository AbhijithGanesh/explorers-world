import { Menu } from "@headlessui/react";
import { graphql, navigate, PageProps } from "gatsby";
import * as React from "react";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { MdAddTask, MdSearch } from "react-icons/md";
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

const Card = ({
  title,
  description,
  Tags,
  points,
  href,
}: CardProps): JSX.Element => {
  return (
    <>
      <section className="text-white ring-2 ring-gray-300 my-8 rounded-2xl hover:transform-cpu hover: flex flex-auto justify-between">
        <section>
          <section className="py-2 px-4 text-2xl font-extrabold">
            {title}
          </section>
          <section className="px-4 font-bold text-xl">{description}</section>
          <section className="flex flex-auto px-4 gap-4">
            {Tags?.map((tag): JSX.Element => {
              return <Tag_Element key={tag} item={tag} />;
            })}
          </section>
          <section className="px-6 py-2 font-light hover:italic text-lg">
            {points} xp for this challenge. -- Easter egg, click on the
            thumbnail.
          </section>
        </section>
      </section>
    </>
  );
};

type DataType = {
  allSupabaseChallenges: {
    nodes: {
      title: string;
      description: string;
      due_date: string;
      tags: Array<string>;
      xp_points: number;
    }[];
  };
};

let Handler = ({
  data: { allSupabaseChallenges },
}: PageProps<DataType>): React.ReactNode => {
  return (
    <>
      <Layout>
        <>
          <Navbar>
            <DropDownMenu>
              <>
                <MenuItem
                  icon={<MdAddTask />}
                  link="/challenges"
                  text="Challenges"
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
          <section className="py-8 text-white font-extrabold text-3xl">
            List of Challenges!
          </section>
          {allSupabaseChallenges.nodes.map((i): React.ReactNode => {
            return (
              <>
                <Card
                  key={i.title}
                  title={i?.title}
                  description={i?.description}
                  Tags={i?.tags}
                  points={i?.xp_points}
                  href={"https://www.youtube.com/c/DoKcommunity/videos"}
                />
              </>
            );
          })}
          <section className="pt-4 pb-8 text-white font-bold text-2xl">
            Your Contributions!
            <section className="mt-2 h-0.5 w-auto bg-white" />
          </section>
          <section className="hidden lg:block sm:hidden md:hidden">
            <ChartContainer
              count={[1, 2, 3, 4, 5]}
              size={"15px"}
              gap={"2px"}
              squares={5}
            />
          </section>
          <section className="hidden md:block lg:hidden sm:hidden">
            <ChartContainer
              count={[1, 2, 3, 4, 5]}
              size={"10px"}
              gap={"2px"}
              squares={5}
            />
          </section>
          <section className="hidden sm:block lg:hidden md:hidden">
            <ChartContainer
              count={[1, 2, 3, 4, 5]}
              size={"6px"}
              gap={"2px"}
              squares={5}
            />
          </section>
        </>
      </Layout>
    </>
  );
};

export default Handler;

export const query = graphql`
  query FetchChallenges {
    allSupabaseChallenges {
      nodes {
        title
        description
        due_date
        tags
        xp_points
      }
    }
  }
`;
