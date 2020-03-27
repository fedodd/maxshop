import React from "react";
import classes from "./Burger.module.pcss";

const Burger = ({ open, setOpen }) => {

  const transitionStyle = open
			? {
					transition:
						"top 0.3s linear, bottom 0.3s linear, transform 0.3s linear 0.2s"
			  }
			: {
					transition:
						"top 0.3s linear 0.2s, bottom 0.3s linear 0.2s, transform 0.3s linear"
			  };

  return (
			<button
				open={open}
				onClick={() => setOpen(!open)}
				className={classes.burger}
			>
				<div
					style={
						open
							? { transform: "rotate(45deg)", top: "15px", ...transitionStyle }
							: { transform: "rotate(0)", top: "10px", ...transitionStyle }
					}
				/>
				{/* <div style={open ? {opacity: '0', transform: 'rotate(45deg)'} : {opacity: '1', transform: 'rotate(0)'}}/> */}
				<div
					style={
						open
							? { transform: "rotate(-45deg)", bottom: "14px", ...transitionStyle }
							: { transform: "rotate(0)", bottom: "12px", ...transitionStyle }
					}
				/>
			</button>
		);
}

export default Burger;
