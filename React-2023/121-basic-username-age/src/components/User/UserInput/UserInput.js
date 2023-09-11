import { useState } from "react";

import styles from "./UserInput.module.css";

const UserInput = (props) => {

  return (
    <div className={styles["user-input-main"]}>
      <label className={styles["user-input-main__title"]} htmlFor={props.id}>
        {props.name}
      </label>
      <input
        className={styles["user-input-main__input"]}
        id={props.id}
        type={props.type}
        onChange={props.onChangeHandler}
        onKeyDown={props.onKeyDown}
        value={props.value}
      />
    </div>
  );
};

export default UserInput;
