import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import perfils from "../../assets/perfils.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";
import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";
import {
  Container,
  Imagem,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

    useEffect(() => {
      async function fatchUsers() {
        const { data: newUsers } = await axios.get(
          "http://localhost:3001/users"
        );

        setUsers(newUsers);
      }
      fatchUsers();
    }, []);
  

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const NewUsers = users.filter((user) => user.id !== userId);
    setUsers(NewUsers);
  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <Imagem alt="People talking" src={perfils} />

      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata de lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button otherButton={true} onClick={goBackPage}>
        <img alt="seta" src={Arrow} /> Voltar 
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Users;
