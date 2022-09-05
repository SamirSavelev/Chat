import { ChangeEvent, useState } from "react";
import { Text } from "../Text";
import { InputStyles } from "./styles";
import post from "../../assets/post.svg";
import clip from "../../assets/clip.svg";

const { Container, StyledInput, Row, Button } = InputStyles;

const Input = () => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const editMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target?.innerText);
  };

  const onFocusInput = () => {
    setFocus(true);
  };

  const onBlurInput = () => {
    setFocus(false);
  };

  return (
    <Container>
      <StyledInput
        contentEditable
        onInput={editMessage}
        onBlur={onBlurInput}
        onFocus={onFocusInput}
      >
        {!value && !focus && (
          <Text disable medium>
            Type message
          </Text>
        )}
      </StyledInput>
      <Row>
        <Button bg>
          <img src={clip} alt="Clip" />
        </Button>
        <Button>
          <img src={post} alt="Post" />
        </Button>
      </Row>
    </Container>
  );
};
export default Input;
