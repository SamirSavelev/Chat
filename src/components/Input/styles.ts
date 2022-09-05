import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  bottom: 0;
  gap: 4px;
  padding: 16px 24px;
`;

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  background: #ffffff;
  border: 1px solid #a19f9d;
  border-radius: 4px;
  min-height: 20px;
  &:focus {
    outline: 1px solid #407ec9;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.button<{ bg?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: ${({ bg }) =>
    bg ? "rgba(32, 31, 30, 0.04);" : "transparent"};
`;
export const InputStyles = { Container, StyledInput, Row, Button };
