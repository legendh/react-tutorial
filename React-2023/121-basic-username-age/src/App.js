import React, { useState } from "react";

import UserForm from "./components/User/UserForm/UserForm";
import UserList from "./components/User/UserList/UserList";
import Modal from "./components/Modal/Modal";

const initialUserList = [];
const initialModalMessage = {
  title:'',
  message:''
}

function App() {
  const [userList, setUserList] = useState(initialUserList);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalMessage, setModalMessage] = useState(initialModalMessage)

  const AddUser = (currentUser) => {
    setUserList((prevUserList) => [...prevUserList, currentUser]);
  };

  const getErrorMessage = (title, message) => {    
    setModalMessage((prevMessage)=>({...prevMessage, title: title, message: message}))
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
          message={modalMessage.message}
          title={modalMessage.title}
          onClick={modalButton}
        />
      )}
    </div>
  );
}

export default App;
