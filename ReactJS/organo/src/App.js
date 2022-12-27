import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Crew from "./components/Crew";

function App() {

  const crews = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    }
  ];

  const [users, setUsers] = useState([]);

  const forNewAddedUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <Banner />
      <Form forRegisteredUser={user => forNewAddedUser(user)}/>

      {crews.map (crew => (
        <Crew 
          key={crew.name} 
          name={crew.name}
          primaryColor={crew.primaryColor}
          secondaryColor={crew.secondaryColor}
        />
      ))}

    </div>
  );
}

export default App;