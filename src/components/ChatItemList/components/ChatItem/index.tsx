import { FC } from "react";
import {
  selectActiveChat,
  setActiveChat,
} from "../../../../features/chat/chatList-slice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { format } from "date-fns";
import { Text } from "../../../Text";
import { IChatItem } from "../../../interfaces";
import { ChatItemStyles } from "./styles";

const { Container, Ava, Info, Message, Title, Row } = ChatItemStyles;

const ChatItem: FC<IChatItem> = ({ id, avatar, title, last_message }) => {
  const dispatch = useAppDispatch();
  const activeChat = useAppSelector((state) => selectActiveChat(state));
  const isActive = activeChat?.id === id;

  const openChat = (id: string, title: string) => () => {
    dispatch(
      setActiveChat({
        id,
        name: title,
      })
    );
  };

  const date = new Date(last_message.created_at);
  const time = format(date, "HH:mm");

  return (
    <Container onClick={openChat(id, title)} isActive={isActive}>
      <Ava img={avatar} />
      <Info>
        <Row>
          <Title heading2>{title}</Title>
          <Text small disable>
            {time}
          </Text>
        </Row>
        <Message disable>{last_message.message}</Message>
      </Info>
    </Container>
  );
};

export default ChatItem;
