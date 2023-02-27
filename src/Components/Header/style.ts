import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 90px;
  background-color: #2f3130;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: -100;
  right: 0;
  margin-top: 100px;

  input {
    height: 30px;
    width: 150px;
    border-radius: 10px;
    padding-left: 5px;
    transition: all ease 0.3s;
  }

  input:focus {
    outline: 0;
    width: 200px;
  }

  img {
    width: 40%;
  }
`;
