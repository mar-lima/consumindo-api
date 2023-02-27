import styled from "styled-components";

export const CardItens = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0px 9px 3px #000000;
  background-color: #dce0e8;
  border-radius: 20px;
  padding: 10px;

  h3{
    font-size: 1em;
  }
`;

export const Img = styled.img`
  /* margin-top: 20px; */
  height: 100%;
  width: 100%;
  max-height: 150px;
  max-width: 150px;
`;