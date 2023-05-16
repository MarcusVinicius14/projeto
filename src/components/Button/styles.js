import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  background: ${props => props.otherButton ? 'transparent' : 'rgba(0, 0, 0, 0.8)'} ;
  border-radius: 14px;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  border: ${props => props.otherButton ? '1px solid #ffffff' : 'none'};
  cursor: pointer;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  gap: 20px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }

  img{
  transform: ${props => props.otherButton ? 'rotate(180deg)' : ''} ;    
}
`;
