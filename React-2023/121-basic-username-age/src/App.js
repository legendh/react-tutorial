import React, { useState } from "react";

import UserForm from "./components/User/UserForm/UserForm";
import UserList from "./components/User/UserList/UserList";
import Modal from "./components/Modal/Modal";

const initialUserListData = [];
let ErrorTitle = "";
let ErrorMessage = "";

function App() {
  const [userListData, setUserListData] = useState(initialUserListData);
  const [modalVisibility, setModalVisibility] = useState(false);

  const AddUser = (currentUser) => {
    console.log("AddUser");
    console.log(typeof currentUser.userAge);

    let isValid = true;
    if (currentUser.userName.trim().length === 0) {
      ErrorTitle = "Invalid Input";
      ErrorMessage = "Username's input can not be empty!";
      setModalVisibility(true);
      isValid = false;
    }
    if (currentUser.userAge <= 0) {
      ErrorTitle = "Invalid Input";
      ErrorMessage = "Age's input should be greater than 0";
      setModalVisibility(true);
      isValid = false;
    }

    isValid &&
      setUserListData((prevUserList) => [...prevUserList, currentUser]);
  };

  const modalButton = () => {
    setModalVisibility(false);
  };

  return (
    <div className="root">
      <UserForm onAddUser={AddUser} />
      <UserList data={userListData} />
      {modalVisibility && (
        <Modal
          message={ErrorMessage}
          title={ErrorTitle}
          onClick={modalButton}
        />
      )}
    </div>
  );
}

export default App;
