import { format } from "date-fns";
import { FC } from "react";
import { Text } from "../Text";
import { MessageStyles } from "./styles";
import myMessage from "../../assets/myMessage.svg";
import NewMessage from "../NewMessage";
const {
  Container,
  Avatar,
  StyledMessage,
  Info,
  Block,
  Row,
  Day,
  DayWrapper,
  Time,
} = MessageStyles;

interface IMessage {
  isShowInfo: boolean;
  avatar: string;
  name: string;
  surname: string;
  message: string;
  createdAt: number;
  isNew: boolean;
  isYou: boolean;
  isNewDay: boolean;
}

const Message: FC<IMessage> = ({
  isShowInfo = false,
  avatar,
  name,
  surname,
  message,
  createdAt,
  isNew,
  isYou,
  isNewDay,
}) => {
  const time = format(new Date(createdAt), "HH:mm");
  const day = format(new Date(createdAt), "d.MM.yyyy");
  return (
    <>
      {isNewDay && (
        <DayWrapper>
          <Day>{day}</Day>
        </DayWrapper>
      )}
      {isNew && <NewMessage />}
      <Container isYou={isYou} isShowInfo={isShowInfo}>
        {isShowInfo && !isYou ? (
          <>
            <Avatar img={avatar} />
            <Block>
              <Info>
                <Text bold message>
                  {name}
                </Text>
                <Text bold message>
                  {surname}
                </Text>
              </Info>
              <Row>
                <StyledMessage>
                  <Text message>{message}</Text>
                  <Time>{time}</Time>
                </StyledMessage>
              </Row>
            </Block>
          </>
        ) : (
          <StyledMessage isYou={isYou} isNotInfo>
            <Text message>{message}</Text>
            <Time>
              {time} {isYou ? <img src={myMessage} alt="" /> : null}
            </Time>
          </StyledMessage>
        )}
      </Container>
    </>
  );
};

export default Message;
