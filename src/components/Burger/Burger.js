import React from "react";
import classes from "./Burger.module.pcss";

const Burger = ({ open, setOpen }) => {

  return (
    <button
      open={open}
      onClick={() => setOpen(!open)}
      // style={open ? {background: '#0D0C1D'} : {background: '#EFFFFA'}}
      className={classes.burger}>
      <div style={open ? {transform: 'rotate(45deg)', top: '15px'} : {transform: 'rotate(0)', top: '12px'}}/>
      {/* <div style={open ? {opacity: '0', transform: 'rotate(45deg)'} : {opacity: '1', transform: 'rotate(0)'}}/> */}
      <div style={open ? {transform: 'rotate(-45deg)', bottom: '14px'} : {transform: 'rotate(0)', bottom: '12px'}}/>
    </button>
  )
}

export default Burger;
