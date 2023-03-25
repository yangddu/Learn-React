import React, { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}

const Circle = ({ bgColor, borderColor, text }: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  return (
    <div>
      <Container bgColor={bgColor} borderColor={(borderColor ??= "white")}>
        {text}
      </Container>
    </div>
  );
};

export default Circle;

const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
