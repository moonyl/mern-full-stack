import React from "react";

const Button = (props) => {
  return (
    <button className="button" type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
