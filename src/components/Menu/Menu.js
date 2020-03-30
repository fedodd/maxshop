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
    <nav  className={classes.list} style={open ? {transform: 'translateY(0)', opacity: '1'} : {transform: 'translateY(-100%)', opacity: '0'}}>
      {items.map((elem, index) => (
        <li
          key={index}
          className={classes.listItem}
        >
          <span style={open ? {opacity: '1'} : {opacity: '0'}}>{elem.text}</span>
        </li>
      ))}
    </nav>
  );
};

export default Menu;
