import React from "react";
import classes from "./Burger.module.pcss";

const Burger = ({ open, setOpen }) => {

  const transitionStyleTop = open
    ? {
        transform: "rotate(45deg)",
        top: "15px",
        transition: "top 0.3s linear, transform 0.3s linear 0.2s"
      }
    : {
        transform: "rotate(0)",
        top: "10px",
        transition: "top 0.3s linear 0.2s, transform 0.3s linear"
      };

  const transitionStyleBottom = open
      ? {
          transform: "rotate(-45deg)",
          bottom: "14px",
          transition: "bottom 0.3s linear, transform 0.3s linear 0.2s"
        }
      : {
          transform: "rotate(0)",
          bottom: "12px",
          transition: "bottom 0.3s linear 0.2s, transform 0.3s linear"
        };

  return (
			<button
				open={open}
				onClick={() => setOpen(!open)}
				className={classes.burger}
			>
				<div style={transitionStyleTop} />
				{/* <div style={open ? {opacity: '0', transform: 'rotate(45deg)'} : {opacity: '1', transform: 'rotate(0)'}}/> */}
				<div style={transitionStyleBottom} />
			</button>
		);
}

export default Burger;
