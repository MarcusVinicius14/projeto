import React, { useState, useRef,} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import People from "../../assets/peopleTalking.svg";
import Arrow from "../../assets/arrow.svg";
import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";
import {
  Container,
  Imagem,
  InputLabel,
  Input,
} from "./styles";

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  const inputName = useRef();
  const inputAge = useRef();

  async function AddNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
  
  navigate("/usuarios")
  }

  
  return (
    <Container>
      <Imagem alt="People talking" src={People} />

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" type="text"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" type="number" min="0"></Input>

        <Button  onClick={AddNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Home;
