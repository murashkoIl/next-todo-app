import React from "react";
import Head from "next/head";
import CustomLink from "./CustomLink";
import ThemeSwitcher from "./ThemeSwitcher";
import { useSelector } from "react-redux";
import styles from "../styles/NavbarContainer.module.scss";

const NavbarContainer = ({ children, keywords }) => {
  const { isLightTheme } = useSelector((state) => state.isLightTheme);

  return (
    <div className={styles.container}>
      <Head>
        <meta keywords={keywords}></meta>
        <title>TODO</title>
      </Head>
      <div className={!isLightTheme && styles.dark}>
        <nav>
          <CustomLink text="Home Page" href="/" />
          <CustomLink text="Users Page" href="/users" />
          <ThemeSwitcher />
        </nav>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default NavbarContainer;
