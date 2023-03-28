import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface Params {
  coinId: string;
}

interface RouteState {
  name: string;
}
const Coin = () => {
  //   const { coinId } = useParams<Params>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation<RouteState>();

  return (
    <Container>
      <Header>
        <Title>코인 {state?.name || "Loading..."} </Title>
      </Header>
      {loading ? <Loader> Loading ...</Loader> : null}
    </Container>
  );
};
export default Coin;

const Title = styled.h1`
  font-size: 48px;

  color: ${(props) => props.theme.accentColor};
`;

const Container = styled.div`
  padding: 50px 20px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
  padding: 30px 0;
  font-weight: 700;
  font-size: 30px;
`;
