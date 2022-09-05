import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 380px;
  max-height: 96vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 20px;
  position: sticky;
  top: 0;
  background: #ffffff;
`;

const Body = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ChatItemListStyles = { Container, Header, Body };
