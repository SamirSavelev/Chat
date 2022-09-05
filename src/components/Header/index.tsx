import { FC } from "react";
import { IHeader } from "../interfaces";
import { HeaderStyles } from "./styles";

const { Container } = HeaderStyles;

const Header: FC<IHeader> = ({ children, chat }) => {
  return <Container chat={chat}>{children}</Container>;
};

export default Header;
