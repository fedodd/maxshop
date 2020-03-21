import React from 'react';

const HeaderItem = props => {
  return (
    <li>
      <h4>{props.data.title}</h4>
      <span>{props.data.text}</span>
    </li>
  );
};

export default HeaderItem;
