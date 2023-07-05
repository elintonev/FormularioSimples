import React, { useState, useEffect } from "react";
import axios from "axios";

import Avatar from "../../Assets/Avatar.svg";
import Arrow from "../../Assets/Arrow.svg";
import Lixeira from "../../Assets/Lixeira.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
       const {data: newUsers} = await axios.get("http://localhost:3001/users")

       setUsers(newUsers);
    }

    fetchUsers();
  }, [])

  function deletUsers(userid) {
    const newUsers = users.filter((user) => user.id !== userid);
    setUsers(newUsers);
  }
  return (
    <Container>
      <Image alt="people-talking" src={Avatar} />
      <ContainerItens>
        <H1> Usuários </H1> 
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deletUsers(user.id)}>
                <img alt="Lixeira" src={Lixeira} />
              </button>
            </User>
          ))}
        </ul>
        <Button to="/">
        <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}
export default Users;
