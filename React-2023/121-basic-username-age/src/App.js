import React, { useState } from "react";

import UserForm from "./components/User/UserForm/UserForm";
import UserList from "./components/User/UserList/UserList";
import Modal from "./components/Modal/Modal";

const initialUserListData = [];
let ErrorMessage = "";

function App() {
  const [userListData, setUserListData] = useState(initialUserListData);
  const [modalVisibility, setModalVisibility] = useState(false);

  const AddUser = (currentUser) => {
    setUserListData((prevUserList) => [...prevUserList, currentUser]);
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
      <UserList data={userListData} />
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
