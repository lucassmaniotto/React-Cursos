import styled from "styled-components";

const Input = styled.input`
  order: 1px solid #fff;
  background: transparent;
  border: 1px solid #fff;
  box-sizing: border-box;
  padding: 12px 20px;
  border-radius: 50px;
  width: 450px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left;

  &::placeholder {
    color: #fff;
    font-size: 16px;
    text-align: center;
  }

  &:focus,
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
    transition: 0.3s;
  }
`;

export default Input;
