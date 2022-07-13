import Layout from "../layout";
import * as React from "react";
import { FaGithub, FaGitlab, FaGoogle } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import Provider from "../../utils/providers";

type SocialAuth = {
  name: string;
  icon: JSX.Element;
};

const SocialAuth = ({ name, icon }: SocialAuth): JSX.Element => {
  return (
    <>
      <section className="my-2 bg-white flex place-items-center justify-center rounded-md hover:transform-cpu hover:-translate-y-1  text-black hover:font-semibold">
        <section className="text-2xl py-2 px-2 ">{icon}</section>
        <Provider
          name={name}
          content={
            <section className="text-gray-500 text-lg font-regular hover:text-black">
              Sign up with {name}
            </section>
          }
        />
      </section>
    </>
  );
};

const ThirdPartyAuth = (): JSX.Element => {
  return (
    <Layout>
      <SocialAuth name="GitHub" icon={<FaGithub />} />
      <SocialAuth name="Google" icon={<FaGoogle />} />
      <SocialAuth name="GitLab" icon={<FaGitlab />} />
      <SocialAuth name="Us" icon={<ImProfile />} />
    </Layout>
  );
};

export default ThirdPartyAuth;
