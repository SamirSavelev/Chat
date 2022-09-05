import Chat from "../../components/Chat";
import ChatItemList from "../../components/ChatItemList";
import Container, { Error } from "./styles";

export const PageIndex = () => {
  return (
    <>
      <Container>
        <ChatItemList />
        <Chat />
      </Container>
      <Error>
        Простите! Но для мобильных телефонов у нас есть мобильное приложение
      </Error>
    </>
  );
};
