import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* <a className="navItems" href="#">Home</a> */}
        <Link
          className="navItems"
          href={"/"}>
          Home
        </Link>
        <Link
          className="navItems"
          href={"/about"}>
          About
        </Link>
        <Link
          className="navItems"
          href={"/usage"}>
          Try Now
        </Link>
        <Link
          className="navItems"
          href={"/contact"}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
