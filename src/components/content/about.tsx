import * as React from "react";

const About = (): JSX.Element => {
  return (
    <>
      <section className="py-8 translate-x-4 flex justify-start text-left text-white font-black lg:text-4xl md:text-2xl sm:text-xl hover:transition-transform  hover:translate-x-8  hover:italic">
        What are these challenges?
      </section>
      <section className="text-white px-8  text-lg font-regular">
        We believe its essential for practitioners to be able to use the
        technologies featured in our livestreams and panels. By doing so, we
        provide a context in which community members can learn and grow
        together. These challenges will have an interesting task and specific
        instructions in terms of what you need to have in your local
        environment.
      </section>
    </>
  );
};

export default About;
