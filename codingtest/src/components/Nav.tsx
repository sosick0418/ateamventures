import React from "react";
import styled from "styled-components";
import Icon from "../assets/images/companyIcon.svg";

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: #1565c0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

const NavContentContainer = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 50px;
  top: 0;
  left: 0;
`;

const CapaPartnersDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 153px;
  height: 20px;
`;

const Capa = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 50%;
  height: 20px;
  font-weight: bolder;
  font-size: 26px;
  letter-spacing: 1px;
`;

const Partners = styled(Capa)`
  height: 23px;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0;
`;

const CompanyAndAuth = styled.div`
  display: flex;
  width: 210px;
  height: 20px;
`;

const Company = styled.span`
  display: flex;
  width: 60%;
  height: 20px;
  border-right-style: solid;
  border-right-width: 2px;
  border-right-color: white;
  align-items: center;
  justify-content: center;
  color: white;
`;

const CompanyIcon = styled.img`
  margin-right: 10px;
`;

const Auth = styled(Company)`
  width: 40%;
  border-right-width: 0px;
`;

function Nav() {
  return (
    <NavContainer>
      <NavContentContainer>
        <CapaPartnersDiv>
          <Capa>CAPA</Capa>
          <Partners>파트너스</Partners>
        </CapaPartnersDiv>
        <CompanyAndAuth>
          <Company><CompanyIcon src={Icon} />A 가공업체</Company>
          <Auth>로그아웃</Auth>
        </CompanyAndAuth>
      </NavContentContainer>
    </NavContainer>
  );
}

export default Nav;
