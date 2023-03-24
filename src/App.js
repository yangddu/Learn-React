import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Wrapper as="header">
      <Input />
      <Box>
        <Emoji as="p">😘</Emoji>
      </Box>
      <Btn></Btn>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 15px;
  border: none;
`;

const Input = styled.input.attrs({
  type: "number",
  maxlength: 1
})`
  background-color: tomato;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }

  50% {
    /* transform: rotate(360deg); */
    border-radius: 100px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;

  &:hover {
    font-size: 98px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  
    ${Emoji} {
      &:hover {
        font-size: 98px;
      }
    }
  }
`;
