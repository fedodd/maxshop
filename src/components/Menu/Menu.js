import React from 'react';
import classes from "./Menu.module.pcss";

const Menu = ({ open }) => {

  const items = [
    {
      text: 'Mac',
    },
    {
      text: 'IPad',
    },
    {
      text: 'IPhone',
    },
    {
      text: 'Watch',
    },
    {
      text: 'TV',
    },
    {
      text: 'Music',
    },
    {
      text: 'Поддержка',
    }

  ];

  return (
    <nav  className={classes.list} style={open ? {transform: 'translateY(0)'} : {transform: 'translateY(-100%)'}}>
      {items.map((elem, index) => (
        <li
          key={index}
          className={classes.listItem}
        >
          {elem.text}
        </li>
      ))}
    </nav>
  );
};

export default Menu;