import { useState } from "react";

import Button from "../../Button/Button";
import Card from "../../UI/Card/Card";
import UserInput from "../UserInput/UserInput";

const initialUserInputs = {
  userName: "",
  userAge: "",
};
const UserForm = (props) => {
  const [userInput, setUserInput] = useState(initialUserInputs);

  const onChangeHandler = (event) => {
    const { id, value } = event.target;
    id === "user-name" &&
      setUserInput((prevUserInputs) => ({
        ...prevUserInputs,
        userName: value,
      }));
    id === "age" &&
      setUserInput((prevUserInputs) => ({
        ...prevUserInputs,
        userAge: value,
      }));
  };

  const onClickHandler = () => {
    props.onAddUser(userInput);
  };

  const preventNanNumber = (event) => {
    ["e", "E", "+", "-"].includes(event.key) && event.preventDefault();
  };

  return (
    <Card>
      <UserInput
        type="text"
        name="Username"
        id="user-name"
        onChangeHandler={onChangeHandler}
        value={userInput.userName}
      />
      <UserInput
        type="number"
        name="Age (Years)"
        id="age"
        value={userInput.userAge}
        onChangeHandler={onChangeHandler}
        onKeyDown={preventNanNumber}
      />
      <Button onClick={onClickHandler} name="Add User" />
    </Card>
  );
};

export default UserForm;
