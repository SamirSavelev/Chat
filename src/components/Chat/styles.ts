import styled, { css } from "styled-components";

const Container = styled.div<{ isStart?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border-left: 1px solid rgba(32, 31, 30, 0.12);
  max-height: 85vh;
  ${({ isStart }) =>
    isStart &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

const ChatBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;
`;

const ScrollableContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 24px;
`;

const StartBlock = styled.div`
  background: rgba(32, 31, 30, 0.1);
  padding: 5px 10px;
  border-radius: 15px;
`;

export const ChatStyles = {
  Container,
  ChatBody,
  StartBlock,
  ScrollableContainer,
};
