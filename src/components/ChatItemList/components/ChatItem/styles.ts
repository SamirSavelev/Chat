import styled, { css } from "styled-components";
import { Text } from "../../../Text";

const Container = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 12px;
  background: #ffffff;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  gap: 16px;
  cursor: pointer;
  &:hover {
    background: rgba(32, 31, 30, 0.04);
  }
  border: none;
  ${({ isActive }) =>
    isActive &&
    css`
      background: rgba(64, 126, 201, 0.08);
    `}
`;

const Ava = styled.div<{ img: string }>`
  width: 48px;
  height: 48px;
  background: ${({ img }) => `url(${img})  no-repeat` || "#C4C4C4"};
  border-radius: 4px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 270px;
`;

const Message = styled(Text)`
  width: 264px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChatItemStyles = { Container, Ava, Info, Message, Title, Row };
