import React from 'react';
import randomColor from "../../helpers/randomColor";
import classes from "./block.module.pcss";

const Block = props => {
  return (
    <div
      className={
        props.size ? classes.block + " " + classes[props.size] : classes.block
      }
      //style={{ backgroundColor: randomColor() }}
    ></div>
  );
};

export default Block;
