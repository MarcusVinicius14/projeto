import styled from "styled-components";
import background1 from "../../assets/background1.svg";

export const Container = styled.div`
  background: url(${background1});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 40px;
`;

export const Imagem = styled.img`
margin-top: 30px;
`;


export const InputLabel = styled.p`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;

color: #EEEEEE;
margin-left: 26px;
`;

export const Input = styled.input`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
outline: none;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
padding-left: 25px;
color: #FFFFFF;
margin-bottom: 34px;
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}; 
`;


