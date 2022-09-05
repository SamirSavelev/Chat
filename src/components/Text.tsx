import styled from "styled-components";
import { IText } from "./interfaces";

export const Text = styled.div<IText>`
  color: ${({ ...props }) => (props.disable ? "#605E5C" : "#201f1e")};
  font-weight: ${({ ...props }) =>
    props.heading1 || props.heading2 || props.bold ? "700" : "400"};
  font-size: ${({ ...props }) =>
    props.heading1
      ? "18"
      : props.heading2 || props.message
      ? "15px"
      : props.small
      ? "13px"
      : "14px"};
  line-height: ${({ ...props }) =>
    props.heading1 || props.heading2 || props.message ? "130%" : "100%"};
`;
