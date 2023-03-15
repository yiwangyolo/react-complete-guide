import React, { useState } from "react";

import { AddUser } from "./components/User/AddUser";
import { UsersList } from "./components/User/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (newUserInput) => {
    console.log(newUserInput);

    setUsersList((prevState) => {
      return [
        ...prevState,
        {
          name: newUserInput.enteredName,
          age: newUserInput.enteredAge,
          id: newUserInput.id,
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
