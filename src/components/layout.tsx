import React from "react";
import { FC } from "react";
import { GenericProps as LayoutProps } from "../types/props";

let Layout: FC<LayoutProps> = (props: LayoutProps) => {
  return (
    <section className="px-2 grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-1">
      <section className="lg:col-start-3 lg:col-span-8 md:col-start-1 md:col-span-full sm:col-start-1">
        {props.children}
      </section>
    </section>
  );
};

export default Layout;
