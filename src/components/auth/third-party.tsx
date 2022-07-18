import { FaGithub, FaGitlab, FaGoogle } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { navigate } from "gatsby";
import * as React from "react";
import { supabase } from "../../utils/supabase";

type Props = {
  name: string;
  content: JSX.Element;
};

let Provider = ({ name, content }: Props): JSX.Element => {
  switch (name) {
    case "GitHub":
      return (
        <>
          <button
            onClick={async () => {
              const { user, session, error } = await supabase.auth.signIn(
                {
                  provider: `github`,
                },
                { redirectTo: "./profiles/" }
              );
            }}
          >
            {content}
          </button>
        </>
      );
    case "GitLab":
      return (
        <>
          <button
            onClick={async () => {
              const { user, session, error } = await supabase.auth.signIn(
                {
                  provider: `gitlab`,
                },
                { redirectTo: "./profiles/" }
              );
            }}
          >
            {content}
          </button>
        </>
      );
    case "Google":
      return (
        <>
          <button
            onClick={async () => {
              const { user, session, error } = await supabase.auth.signIn(
                {
                  provider: `google`,
                },
                {
                  redirectTo: "./profiles/",
                }
              );
            }}
          >
            {content}
          </button>
        </>
      );

    case "Us":
      return (
        <>
          <>
            <button
              onClick={async () => {
                navigate("./signup");
              }}
            >
              {content}
            </button>
          </>
        </>
      );
    default:
      return <></>;
  }
};
export default Provider;

type SocialAuth = {
  name: string;
  icon: JSX.Element;
};

const SocialAuth = ({ name, icon }: SocialAuth): JSX.Element => {
  return (
    <>
      <section className="my-2 bg-white flex place-items-center justify-center rounded-md  text-black hover:font-semibold">
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
    <>
      <SocialAuth name="GitHub" icon={<FaGithub />} />
      <SocialAuth name="Google" icon={<FaGoogle />} />
      <SocialAuth name="GitLab" icon={<FaGitlab />} />
      <SocialAuth name="Us" icon={<ImProfile />} />
    </>
  );
};

export default ThirdPartyAuth;
