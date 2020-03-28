/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import randomColor from "../../helpers/randomColor";
import HeaderItem from "../HeaderItem/HeaderItem";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import logo from "../../images/icon.svg";

import classes from "./header.module.pcss";

function Header(props) {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  const size = useWindowSize();

  // Hook
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
					function handleResize() {
						setWindowSize(window.innerWidth);
					}
					windowSize > 730 ? setOpen(true) : setOpen(false);
					window.addEventListener("resize", handleResize);

					return () => window.removeEventListener("resize", handleResize);
				}, [windowSize]); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
  }



  return (
    <header className={classes.header}  style={open ? {backgroundColor: 'rgb(0, 0, 0, 1)', 	borderBottom: '1px solid rgb(66, 66, 69)'} : {backgroundColor: 'rgba(0, 0, 0, 0.8)', borderBottom: 'none'} }>
      <div className={classes.headerHolder}>
        <img src={logo} className={classes.logo} />
        <div ref={node} className={classes.burgerWrapper}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
}

export default Header;
