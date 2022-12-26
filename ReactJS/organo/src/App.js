import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";


function App() {

  const [users, setUsers] = useState([]);

  const forNewAddedUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <Banner />
      <Form forRegisteredUser={user => forNewAddedUser(user)}/>
    </div>
  );
}

export default App;