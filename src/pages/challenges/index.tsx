import * as React from "react";
import Layout from "../../components/layout";
import { CardProps } from "../../types/props";
import { supabase } from "../../utils/supabase";

type DataType = {
  title: string;
  description: string;
  due_date: string;
  tags: Array<string>;
  "xp-points": number;
};

const Tag_Element = ({ item }: tagProps): JSX.Element => {
  return <section className="font-regular text-lg">#{item}</section>;
};

interface tagProps {
  item: string;
}
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

let EmptyIndex = ({ serverData }: any): JSX.Element => {
  return (
    <>
      <Layout>
        {" "}
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
      </Layout>
    </>
  );
};

export default EmptyIndex;

export const getServerData = async () => {
  let Challenges = await supabase
    .from("Challenges")
    .select("title, description, due_date, tags, xp-points");

  let data = {
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
