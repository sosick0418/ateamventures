import React from "react";
import styled from "styled-components";
import { ItemTypes } from "../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px;
  width: 366px;
  height: 356px;
  background: white;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  width: 100%;
`;

const Title = styled.span`
  width: 50%;
  height: 24px;
  font-weight: bold;
  font-size: 16px;
  color: #323d45;
`;

const Company = styled(Title)`
  height: 20px;
  font-size: 14px;
  font-weight: 500;
`;

const HRBox = styled.div`
  display: flex;
  align-items: center;
  width: 334px;
  height: 60px;
  margin-bottom: 32px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  border-bottom-style: solid;
`;

const DueTime = styled.span`
  width: 125px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #939fa5;
`;

const DetailBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
`;

const TitleBox = styled.span`
  width: 30%;
  font-size: 14px;
  color: #323d45;
`;

const ValueBox = styled(TitleBox)`
  width: 70%;
  font-weight: bold;
`;

const StatusBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  border-radius: 12px;
  border: 1px solid #ffa000;
  color: #ffa000;
  font-weight: 500;
  font-size: 12px;
`;

const ButtonConatiner = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  margin-top: 32px;
`;

const RequestButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 32px;
  background-color: #2196f3;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

const ChatButton = styled(RequestButton)`
  width: 76px;
  margin-left: 8px;
  background-color: white;
  border: 1px solid #2196f3;
  color: #2196f3;
`;

interface PropsType {
  data: ItemTypes;
}

function Card({ data }: PropsType) {
  return (
    <Container>
      <TitleContainer>
        <Title>{data.title}</Title>
        {data.status === "상담중" ? <StatusBox>상담중</StatusBox> : null}
      </TitleContainer>
      <Company>{data.client}</Company>
      <HRBox>
        <DueTime>{data.due}까지 납기</DueTime>
      </HRBox>
      <DetailBox>
        <TitleBox>도면개수</TitleBox>
        <ValueBox>{data.count || data.docs}</ValueBox>
      </DetailBox>
      <DetailBox>
        <TitleBox>총 수량</TitleBox>
        <ValueBox>{data.amount}</ValueBox>
      </DetailBox>
      <DetailBox>
        <TitleBox>가공방식</TitleBox>
        <ValueBox>{data.method.join()}</ValueBox>
      </DetailBox>
      <DetailBox>
        <TitleBox>재료</TitleBox>
        <ValueBox>{data.material.join()}</ValueBox>
      </DetailBox>
      <ButtonConatiner>
        <RequestButton>요청 내역 보기</RequestButton>
        <ChatButton>채팅하기</ChatButton>
      </ButtonConatiner>
    </Container>
  );
}

export default Card;
