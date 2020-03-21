/* eslint-disable no-unused-vars */
import React from "react";
import randomColor from "../../helpers/randomColor"
import HeaderItem from "../HeaderItem/HeaderItem";
import classes from "./header.module.pcss"

function Header(props) {
  const items = [
    {
      title: 'Стул',
      text: 'Прекрасный и неповторимый',
      image: true
    },
    {
      title: 'Длинный текст',
      text: 'Прекрасный и неповторимый',
      image: ''
    },
    {
      title: '402',
      isBig: true,
      text: 'Прекрасный и неповторимый',
      image: ''
    },
    {
      title: 'Стул',
      text: 'Прекрасный и неповторимый',
      image: ''
    },
    {
      title: 'Стул',
      text: 'Прекрасный и неповторимый',
      image: ''
    },
    {
      title: 'Стул',
      text: 'Прекрасный и неповторимый',
      image: true
    },
  ];

  return (
    <header>
      <ul className={classes.list}>
        {items.map((elem, index) => (
          <li
            key={index}
            className={classes.listItem}
            style={{ backgroundColor: randomColor() }}
          >
            <h4>{elem.title}</h4>
            <span>{elem.text}</span>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
