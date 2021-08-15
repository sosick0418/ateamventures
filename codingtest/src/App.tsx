import React from "react";
import styled from "styled-components";
import MainPage from "./views/MainPage";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
}

export default App;
