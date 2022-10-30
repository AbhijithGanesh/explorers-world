import * as React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import Provider from "../../components/providers";
import { supabase } from "../../utils/supabase";

type SocialAuth = {
  name: string;
  icon: JSX.Element;
};

const SocialAuth = ({ name, icon }: SocialAuth): JSX.Element => {
  return (
    <>
      <section className="my-2 bg-white flex place-items-center justify-center rounded-md  text-black hover:font-semibold">
        <section className="text-lg py-2 px-2 ">{icon}</section>
        <button
          onClick={async () => {
            const { user, session, error } = await supabase.auth.signIn(
              {
                provider: `${name}`,
              },
              { redirectTo: `https://localhost:8000/profiles/` }
            );
            if (error) {
              alert(error);
            }
          }}
        >
          <section className="text-gray-600 text-sm font-regular hover:text-black">
            Sign up with {name}
          </section>
        </button>
      </section>
    </>
  );
};

const ThirdPartyAuth = (): JSX.Element => {
  return (
    <>
      <section className="py-8">
        <SocialAuth name="GitHub" icon={<FaGithub />} />
        <SocialAuth name="Google" icon={<FaGoogle />} />
      </section>
    </>
  );
};

export default ThirdPartyAuth;
