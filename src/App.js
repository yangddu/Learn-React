import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal">i am a box</Box>
      <Circle bgColor="tomato"></Circle>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;
