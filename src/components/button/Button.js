import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className={`btn btn--${props.type}`}>
      {props.children}
    </button>
  )
}
export default Button;