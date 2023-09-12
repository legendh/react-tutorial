import React, { useState } from "react";

import UserForm from "./components/User/UserForm/UserForm";
import UserList from "./components/User/UserList/UserList";
import Modal from "./components/Modal/Modal";

const initialUserList = [];
let ErrorMessage = "";

function App() {
  const [userList, setUserList] = useState(initialUserList);
  const [modalVisibility, setModalVisibility] = useState(false);

  const AddUser = (currentUser) => {
    setUserList((prevUserList) => [...prevUserList, currentUser]);
  };

  const getErrorMessage = (message) => {
    ErrorMessage = message;
    setModalVisibility(true);
  };

  const modalButton = () => {
    setModalVisibility(false);
  };

  return (
    <div className="root">
      <UserForm onAddUser={AddUser} onError={getErrorMessage} />
      <UserList data={userList} />
      {modalVisibility && (
        <Modal
          message={ErrorMessage}
          title="Invalid Input"
          onClick={modalButton}
        />
      )}
    </div>
  );
}

export default App;
