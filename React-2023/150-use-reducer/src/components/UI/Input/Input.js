import React from "react";
//import classes from "./Input.module.scss";

const Input = (props) => {
  const inputClass = props.className;
  return (
    <div className={inputClass}>
      <label htmlFor={props.name}>{props.children}</label>
      <input
        type={props.type}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.OnBlur}
      />
    </div>
  );
};

export default Input;
//Prototip <Input className={} type="email" name="email" value={} />{props.children}</Input>
