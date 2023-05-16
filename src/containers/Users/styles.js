import styled from "styled-components";
import background2 from "../../assets/background2.svg";

export const Container = styled.div`
  background: url(${background2});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 40px;
min-height: 100vh;
`;

export const Imagem = styled.img`
margin-top: 30px;
`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
outline: none;
margin-top: 20px;

p{
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
}

button{
  background: none;
  border: none;
  cursor: pointer;
}
`
