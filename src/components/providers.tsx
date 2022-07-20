import { navigate } from "gatsby";
import * as React from "react";
import { supabase } from "../utils/supabase";

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
                { redirectTo: `https://explorersworlddok.gtsb.io/profiles/` }
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
                  redirectTo: `https://explorersworlddok.gtsb.io/profiles/`,
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
                navigate("https://explorersworlddok.gtsb.io/signup");
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
