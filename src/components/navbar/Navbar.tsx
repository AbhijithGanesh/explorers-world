import { Link } from "gatsby";
import { MainImage } from "gatsby-plugin-image";
import * as React from "react";
import logo from "../../images/dokc-logo.svg";
import { GenericProps as NavbarProps } from "../../types/props";

let Navbar = (props: NavbarProps): JSX.Element => {
  return (
    <>
      <nav className="h-16 px-0 grid grid-cols-6">
        <section className="col-start-1 col-span-1 flex justify-between items-center ">
          {props.children}
        </section>
        <section className="col-start-6 col-span-1 rounded-md p-2">
          <Link to="/">
            <MainImage src={logo} alt="DoK Logo" className="mx=8" />
          </Link>
        </section>
      </nav>
      <section className="mt-2 h-0.5 w-auto bg-gradient-to-r from-teal-800  to-emerald-400" />
    </>
  );
};

export default Navbar;
