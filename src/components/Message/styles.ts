import styled, { css } from "styled-components";

const Container = styled.div<{ isYou?: boolean; isShowInfo: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 4px;
  ${({ isYou }) =>
    isYou &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    `}
  ${({ isShowInfo }) =>
    isShowInfo &&
    css`
      margin-top: 20px;
    `}
`;

const Avatar = styled.div<{ img: string }>`
  width: 32px;
  height: 32px;
  background: ${({ img }) =>
    `url(${img}) 0 0/100% 100% no-repeat` || "#C4C4C4"};
  border-radius: 4px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const StyledMessage = styled.div<{ isNotInfo?: boolean; isYou?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #f3f3f3;
  border-radius: 4px;
  max-width: 470px;
  width: fit-content;
  white-space: pre-wrap;
  padding: 8px 12px;
  ${({ isNotInfo }) =>
    isNotInfo &&
    css`
      margin-left: 40px;
    `}
  ${({ isYou }) =>
    isYou &&
    css`
      margin-left: 0;
      background: rgba(64, 126, 201, 0.16);
    `}
`;

const Row = styled.div`
  display: flex;
`;

const Day = styled.div`
  padding: 8px 12px;
  color: #201f1e;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  background: rgba(64, 126, 201, 0.08);
  border-radius: 4px;
`;

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Time = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 12px;
  line-height: 9px;
  color: #605e5c;
`;
export const MessageStyles = {
  Container,
  Avatar,
  StyledMessage,
  Info,
  Block,
  Row,
  Day,
  DayWrapper,
  Time,
};
