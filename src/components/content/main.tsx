import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import image from "../../images/logo.png";

const Main = (): JSX.Element => {
  return (
    <>
      <section className="mx-16 my-8">
        <StaticImage src={image} alt="Hello" width={663} height={275} />
      </section>
      <section className="flex flex-auto py-4 text-white lg:text-2xl md:text-xl sm:text-lg lg:font-bold justify-center text-left">
        The open-source community you need to explore, grow and advance your{" "}
        Data on Kubernetes skills!
      </section>
    </>
  );
};

export default Main;
