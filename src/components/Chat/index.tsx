import { useGetMessageQuery } from "../../features/chat/chatList-api-slice";
import { selectActiveChat } from "../../features/chat/chatList-slice";
import { useAppSelector } from "../../hooks";
import Header from "../Header";
import { Text } from "../Text";
import { ChatStyles } from "./styles";
import messages from "../../assets/messages.svg";
import Input from "../Input";
import Message from "../Message";
import { format } from "date-fns";
import { ResponseItem } from "../interfaces";

const { Container, ChatBody, StartBlock, ScrollableContainer } = ChatStyles;

const Chat = () => {
  const activeChat = useAppSelector((state) => selectActiveChat(state));
  const id = activeChat?.id || "";
  const title = activeChat?.name || "";
  const { data } = useGetMessageQuery({ chat_id: id }, { skip: !id });

  const chatData = data?.response;
  const reverseData: any =
    chatData !== undefined && chatData.length > 0
      ? [...chatData]
          .slice()
          .sort(
            (a: ResponseItem, b: ResponseItem) => a.created_at - b.created_at
          )
      : data?.response;

  return (
    <Container isStart={!data}>
      {data ? (
        <>
          <Header chat>
            <img src={messages} alt="messages" />
            <Text heading1>{title}</Text>
          </Header>
          <ChatBody>
            <ScrollableContainer>
              {reverseData &&
                reverseData.length > 0 &&
                reverseData.map((item: ResponseItem, index: number) => {
                  return (
                    <Message
                      key={index}
                      message={item?.message}
                      isNew={item?.is_new && !reverseData[index - 1].is_new}
                      name={item?.user?.name}
                      surname={item?.user?.surname}
                      avatar={item?.user?.avatar}
                      isYou={item?.user?.you}
                      createdAt={item.created_at}
                      isNewDay={
                        index === 0 ||
                        format(new Date(item.created_at), "d.MM.yyyy") !==
                          format(
                            new Date(reverseData[index - 1].created_at),
                            "d.MM.yyyy"
                          )
                      }
                      isShowInfo={
                        index === 0 ||
                        (item?.user?.name !==
                          reverseData[index - 1].user?.name &&
                          item?.user?.surname !==
                            reverseData[index - 1].user?.surname)
                      }
                    />
                  );
                })}
            </ScrollableContainer>
            <Input />
          </ChatBody>
        </>
      ) : (
        <StartBlock>Select a chat to start messaging</StartBlock>
      )}
    </Container>
  );
};

export default Chat;
