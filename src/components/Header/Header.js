/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import randomColor from "../../helpers/randomColor";
import HeaderItem from "../HeaderItem/HeaderItem";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";

import classes from "./header.module.pcss";

function Header(props) {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  return (
    <header>
      <div className={classes.header}>

        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
