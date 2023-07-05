import React, { useState, useRef } from "react";
import axios from "axios";

import People from "../../Assets/PeopleTalking.svg";
import Arrow from "../../Assets/Arrow.svg";

import {
  Container,
  H1,
  Image,
  ContainerItens,
  Input,
  InputLabel,
  Button,
} from "./styles";

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, data]);
  }

  return (
    <Container>
      <Image alt="people-talking" src={People} />
      <ContainerItens>
        <H1> Olá </H1> <InputLabel> Nome </InputLabel>
        <Input ref={inputName} placeholder="Nome " />
        <InputLabel> Idade </InputLabel>
        <Input ref={inputAge} placeholder="Idade " />
        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Home;
