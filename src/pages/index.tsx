import { navigate } from "gatsby";
import * as React from "react";
import IndexPage from "../components/content";
import { supabase } from "../utils/supabase";

const Index = (): JSX.Element => {
  return (
    <>
      {() => {
        if (supabase.auth.session()?.user?.id) {
          navigate("/profiles");
        }
      }}
      <IndexPage />
    </>
  );
};

export default Index;
