import * as React from "react";

const Challenges = (): JSX.Element => {
  return (
    <>
      <section className="py-8 flex flex-auto justify-end text-right -translate-x-4 text-white font-extrabold lg:text-4xl md:text-2xl sm:text-xl hover:italic hover:transition-transform  hover:-translate-x-8">
        How to solve them and record them ?
      </section>
      <section className="text-white px-8 text-lg font-regular">
        You can create your Explorer profile here and submit challenges
        accordingly ! Each challenge will have its own time frame. Your
        submissions will be evaluated and accordingly rewarded. Your credits
        will be stored and recorded here in the explorer&#39;s directory. The
        most consistent contributors will recieve interesting rewards.
      </section>
    </>
  );
};

export default Challenges;
