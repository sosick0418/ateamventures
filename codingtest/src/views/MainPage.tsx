import styled from "styled-components";
import Nav from '../components/Nav';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  margin-top: 70px;
  width: 80%;
  height: 100%;
  border: 1px solid black;
`;

const InputTitle = styled.div`
  margin-top: 40px;
  width: 97px;
  height: 32px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #323D45;
`;

const Desc = styled.div`
  font-size: 16px;
  line-height: 24px;
  width: 284px;
  height: 24px;
  color: #323D45;
`;


function MainPage(): JSX.Element {
  return (
  <>
    <Nav />
    <Container>
      <ContentContainer>
        <InputTitle>들어온 요청</InputTitle>
        <Desc>파트너에게 딱 맞는 요청서를 찾아보세요.</Desc>
      </ContentContainer>
    </Container>
  </>
  );
}

export default MainPage;
