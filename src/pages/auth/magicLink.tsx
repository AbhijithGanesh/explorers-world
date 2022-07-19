import * as React from "react";
import { useState } from "react";
import { supabase } from "../../utils/supabase";

const MagicLink = (): JSX.Element => {
  const [email, setEmail] = useState("");
  return (
    <>
      <input
        className="bg-white text-black flex flex-auto justify-start place-content-center rounded-md w-full py-1 px-2 m-1"
        type="email"
        name="email"
        placeholder="Your Email"
        autoComplete="username"
        onChange={(e) => setEmail(e.target.value)}
      />
      <section className="flex flex-1 justify-end">
        <button
          className=" text-black text-lg font-medium rounded-md lg:p-1 sm:text-md bg-white"
          onClick={async () => {
            await supabase.auth.signIn({ email: email });
          }}
        >
          Send Link
        </button>
      </section>
    </>
  );
};
export default MagicLink;
