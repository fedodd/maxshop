/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import randomColor from "../../helpers/randomColor";
import HeaderItem from "../HeaderItem/HeaderItem";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import logo from "../../images/icon.svg";
// import flat from "../../images/flat.png"

import classes from "./header.module.pcss";

function Header(props) {
  // const [open, setOpen] = React.useState(false);
  // const node = React.useRef();
  // const [isHidden, setHidden] = React.useState(false);
  // const size = useWindowSize();

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

  const [product, setProduct] = React.useState(null);

  function handleProductClick(e) {
    e.preventDefault();
    setProduct({ name: e.target.value });
  }

  return (
    <header className={classes.header}>
      <div className={classes.headerHolder}>
        <img
          src={logo}
          className={classes.logo}
          onClick={() => setProduct(null)}
        />
        {product ? (
          <nav className={classes.nav + " " + classes.is__product}>
            <li>{product.name}</li>
            <li>Overview</li>
            <li>Why {product.name}</li>
            <li>Tech Specs</li>
            <li className={classes.is__alt}>
              <button className={classes.button}>Buy now</button>
            </li>
          </nav>
        ) : (
          <nav className={classes.nav}>
            <li className={classes.product}>
              Home
              <div className={classes.productList}>
                <input
                  type="button"
                  value="RLX100"
                  className={classes.button}
                  onClick={e => handleProductClick(e)}
                  style={{ position: "relative", top: "100px", left: "100px" }}
                ></input>
              </div>
            </li>
            <li className={classes.product}>
              Business
              <div className={classes.productList}>
                <input
                  type="button"
                  className={classes.button}
                  value="UPL10"
                  onClick={e => handleProductClick(e)}
                  style={{ position: "relative", top: "50px", left: "200px" }}
                ></input>
              </div>
            </li>
            <li className={classes.product}>
              Components
              <div className={classes.productList}>
                <input
                  type="button"
                  className={classes.button}
                  value="SUD9"
                  onClick={e => handleProductClick(e)}
                  style={{ position: "relative", top: "60px", left: "50px" }}
                ></input>
              </div>
            </li>
            <li className={classes.is__alt}>
              <button className={classes.button + " " + classes.is__alt}>
                Buy now
              </button>
            </li>
          </nav>
        )}
      </div>
    </header>
    // <header className={classes.header}  style={open ? {borderBottom: '1px solid rgb(66, 66, 69)'} : {borderBottom: 'none'} }>
    //   <div className={classes.headerHolder}>
    //     <img src={logo} className={classes.logo} />
    //     <div ref={node} className={classes.burgerWrapper}>
    //       <Burger open={open} setOpen={setOpen} />
    //       <Menu open={open} setOpen={setOpen} />
    //     </div>
    //   </div>
    //   <div className={classes.headerHolder2} style={isHidden ? {display: 'none'} : {display: 'block'}}>
    //     <ul>
    //       <li className={classes.is__big}>iOS Design Kit</li>
    //       <li>How it works</li>
    //       <li>What&rsquo;s inside</li>
    //       <li>iOS 13 GUI<span>free</span></li>
    //       <li><button className={classes.buttonAlt} onClick={()=> setHidden(true)}>Buy now</button></li>
    //     </ul>
    //   </div>
    // </header>
  );
}

export default Header;
