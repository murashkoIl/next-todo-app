import React from "react";
import Head from "next/head";
import CustomLink from "./CustomLink";

const NavbarContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={keywords}></meta>
        <title>TODO</title>
      </Head>
      <nav>
        <CustomLink text="Home Page" href="/" />
        <CustomLink text="Users Page" href="/users" />
      </nav>
      <div>{children}</div>
    </>
  );
};

export default NavbarContainer;
