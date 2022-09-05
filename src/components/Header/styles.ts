import styled, { css } from "styled-components";

const Container = styled.div<{ chat?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 16px 20px;
  position: sticky;
  top: 0;
  background: #ffffff;
  ${({ chat }) =>
    chat &&
    css`
      border-bottom: 1px solid rgba(32, 31, 30, 0.12);
    `}
`;

export const HeaderStyles = { Container };
