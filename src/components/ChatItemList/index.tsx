import { useGetChatQuery } from "../../features/chat/chatList-api-slice";
import Header from "../Header";
import { Text } from "../Text";
import ChatItem from "./components/ChatItem";
import { ChatItemListStyles } from "./styles";

const { Container, Body } = ChatItemListStyles;

const ChatItemList = () => {
  const { data } = useGetChatQuery({
    offset: "0",
    limit: "100",
  });
  return (
    <Container>
      <Header>
        <Text heading1>All Chat</Text>
      </Header>
      <Body>
        {data &&
          data?.response.map((item: any, index: any) => {
            return (
              <ChatItem
                key={index}
                id={item.id}
                avatar={item.avatar}
                title={item.title}
                last_message={item.last_message}
              />
            );
          })}
      </Body>
    </Container>
  );
};

export default ChatItemList;
