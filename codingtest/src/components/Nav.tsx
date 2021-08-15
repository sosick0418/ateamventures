import React, { useState } from "react";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { BsBuilding } from "react-icons/bs";
import Modal from "react-modal";

const NavContainer = styled.div`
  position: fixed;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #1565c0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: 360px) {
    height: 44px;
  }
`;

const NavContentContainer = styled.div`
  display: flex;
  height: 70px;
  max-width: 1440px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 50px;
  top: 0;
  left: 0;
  @media (max-width: 360px) {
    max-width: 360px;
    padding: 0 10px;
    justify-content: flex-start;
    height: 44px;
  }
`;

const CapaPartnersDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 153px;
  height: 20px;
  @media (max-width: 360px) {
    height: 44px;
    align-items: center;
    width: 150px;
  }
`;

const IconBox = styled.div`
  display: none;
  width: 24px;
  height: 24px;
  color: white;
  @media (max-width: 360px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  @media (max-width: 360px) {
    font-size: 16px;
    width: 40%;
  }
`;

const Partners = styled(Capa)`
  height: 23px;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0;
  @media (max-width: 360px) {
    font-size: 15px;
    margin-left: -5px;
  }
`;

const CompanyAndAuth = styled.div`
  display: flex;
  width: 210px;
  height: 20px;
  @media (max-width: 360px) {
    display: none;
  }
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
  @media (max-width: 360px) {
    color: black;
    margin-bottom: 20px;
    width: 100%;
    font-size: 23px;
  }
`;

const Auth = styled(Company)`
  width: 40%;
  border-right-width: 0px;
  @media (max-width: 360px) {
    color: black;
    width: 100%;
  }
`;

const SideMenuCapaPartners = styled.div`
  display: flex;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e5e5e5;
  width: 100%;
  height: 44px;
  margin-bottom: 30px;
`;

const SideMenuCapa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2196f3;
  font-size: 23px;
  font-weight: bold;
`;

const SideMenuPartners = styled(SideMenuCapa)`
  font-weight: normal;
`;

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "280px",
    height: "100%",
    padding: "0px 20px",
  },
};

function Nav() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <NavContainer>
      <NavContentContainer>
        <CapaPartnersDiv>
          <IconBox onClick={openModal}>
            <CgMenu className="menu-icon" />
          </IconBox>
          <Capa>CAPA</Capa>
          <Partners>파트너스</Partners>
        </CapaPartnersDiv>
        <CompanyAndAuth>
          <Company>
            <BsBuilding style={{ marginRight: "10px", color: "white" }} />A
            가공업체
          </Company>
          <Auth>로그아웃</Auth>
        </CompanyAndAuth>
      </NavContentContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <SideMenuCapaPartners>
          <SideMenuCapa>CAPA</SideMenuCapa>
          <SideMenuPartners>파트너스</SideMenuPartners>
        </SideMenuCapaPartners>
        <Company>
          <BsBuilding style={{ marginRight: "10px", color: "black" }} />A
          가공업체
        </Company>
        <Auth>로그아웃</Auth>
      </Modal>
    </NavContainer>
  );
}

export default Nav;
