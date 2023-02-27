import styled, { keyframes } from "styled-components";

const AnimationOpen = keyframes`
 0% { height: 0%; width: 0%; }
 30% { height: 33%; width: 33%; opacity: 1 }
 40% { height: 66%; width: 66%; opacity: 0.3; }
 100% { height: 100%; width: 100%; opacity: 0.6; }`;

const AnimationClose = keyframes`
 0% { height: 100%; width: 100%; opacity: 0.6; }
 30% { height: 66%; width: 66%; opacity: 0.3; }
 40% { height: 33%; width: 33%; opacity: 1 }
 100% { height: 0%; width: 0%; }
 `;

export const Container = styled.div`
  width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
`;

export const Card = styled.div`
  width: 250px;
  height: 250px;

  margin: 20px;
  padding: 10px;
  cursor: pointer;
  /* background-color: #5a0303; */
`;





export const CardModal = styled.div`
  width: 100vw;
  height: 100vh;
  /* max-width: 500px;
  max-height: 500px; */
  background-color: #2f3136c5;
  position: fixed;
  margin-top: 80px;
  padding: 2%;
  padding-bottom: 100px;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: auto;

  .container-modal {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 600px;
    background-color: #dce0e8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 4px solid #000000;
    border-top-left-radius: 25%;
    border-bottom-right-radius: 25%;
    box-shadow: 0px 0px 14px 3px #5a0303;
    transition: all ease 0.6s;
  }
  .div-btn {
    display: flex;
    justify-content: end;
    width: 100%;
    height: 60px;
    padding: 5px 0;
  }
  button {
    font-size: 33px;
    font-weight: bold;
    width: 200px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    
  }
  img {
    height: 100%;
    animation-name: ${AnimationOpen};
    animation-duration: 0.4s;
  }

  .atributes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 120px;
    margin: 20px 0;
    padding: 20px 40px;

    padding-right: 70px;
  }
`;

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  background-color: #dce0e8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 4px solid #000000;
  border-top-left-radius: 25%;
  border-bottom-right-radius: 25%;
  box-shadow: 0px 0px 14px 3px #5a0303;
  animation-name: ${AnimationOpen};
  animation-duration: 0.2s;
  
`;
