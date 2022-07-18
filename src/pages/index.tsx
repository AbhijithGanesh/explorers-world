import { navigate } from "gatsby";
import * as React from "react";
import IndexPage from "../components/content";
import { supabase } from "../utils/supabase";

const Index = (): JSX.Element => {
  if (supabase.auth.session()?.user?.id) {
    navigate("/profiles");
  }
  return (
    <>
      <IndexPage />
    </>
  );
};

export default Index;
