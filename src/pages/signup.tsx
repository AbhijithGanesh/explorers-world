import * as React from "react";
import { useState } from "react";
import { sign_up_wrapper } from "../../utils/auth";
import Layout from "../components/layout";

const SignUp = (): JSX.Element => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Layout>
      <section className="py-8 text-white text-2xl font-extrabold">
        Sign up for a <i>new account </i>
      </section>
      <form>
        <input
          className="bg-gray-300 text-black font-medium text-xl rounded-md px-2 my-2 w-full"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-gray-300 text-black font-regular text-xl w-full rounded-md  px-2 justify-center"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </form>
      <button
        className="bg-cyan-600 my-2 w-full  text-white font-semibold text-lg rounded-lg px-2 py-1"
        onClick={(e) => {
          sign_up_wrapper(email, password);
          window.location.href = "./login";
          e.preventDefault();
        }}
      >
        Signup
      </button>
    </Layout>
  );
};

export default SignUp;
