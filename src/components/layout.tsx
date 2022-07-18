import React from "react";
import { GenericProps as LayoutProps } from "../types/props";

let Layout = (props: LayoutProps) => {
  return (
    <section className="md:px-2 lg:px-2 grid grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-1">
      <section className="col-start-3 col-span-8 lg:col-start-3 lg:col-span-8 md:col-start-1 md:col-span-full sm:col-start-1 sm:col-span-1">
        {props.children}
      </section>
    </section>
  );
};

export default Layout;
