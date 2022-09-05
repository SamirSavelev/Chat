import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 380px auto;
  font-family: "Lato", sans-serif;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Error = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    justify-content: center;
    color: #000000;
    max-width: 540px;
    text-transform: uppercase;
    margin: auto;
  }
`;
export default Container;
