import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Main = (): JSX.Element => {
  return (
    <>
      <section className="-z-10 m-12">
        <StaticImage src="../../images/logo.png" alt="Hello" />
      </section>
    </>
  );
};

export default Main;
