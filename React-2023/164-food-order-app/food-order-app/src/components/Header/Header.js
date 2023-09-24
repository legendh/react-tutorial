import React from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>McReact</h1>
      <HeaderCartButton />
    </header>
  );
};

export default Header;
