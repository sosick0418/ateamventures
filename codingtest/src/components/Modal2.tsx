import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: transparent;
  z-index: 999;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: calc(((100% - 1148px) / 2) + 105px);
  max-width: 1148px;
  width: 1148px;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  @media (max-width: 360px) {
    width: 350px;
    left: 107px;
  }
`;

const Container = styled.div`
  width: 130px;
  height: 164px;
  background-color: white;
  flex-direction: column;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  position: absolute;
  padding: 16px 12px;
  top: 220px;
  left: 0;
`;

const OptionBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  height: 18px;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  z-index: 1;
`;

const Value = styled.span`
  font-size: 14px;
`;

interface PropTypes {
  isModalOpen: boolean;
  modalClose: () => void;
  checkHandler: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked1: boolean;
  isChecked2: boolean;
  isChecked3: boolean;
  isChecked4: boolean;
  isChecked5: boolean;
}

function Modal({
  isModalOpen,
  modalClose,
  checkHandler,
  isChecked1,
  isChecked2,
  isChecked3,
  isChecked4,
  isChecked5,
}: PropTypes): JSX.Element {
  return (
    <ModalOverlay
      onClick={modalClose}
      style={{ display: isModalOpen ? "flex" : "none" }}
    >
      <ModalWrapper style={{ display: isModalOpen ? "block" : "none" }}>
        <Container style={{ display: isModalOpen ? "flex" : "none" }}>
          <OptionBox>
            <Checkbox
              type="checkbox"
              value="알루미늄"
              checked={isChecked1}
              onChange={e => checkHandler(e)}
            />
            <Value>알루미늄</Value>
          </OptionBox>
          <OptionBox>
            <Checkbox
              type="checkbox"
              value="탄소강"
              checked={isChecked2}
              onChange={e => checkHandler(e)}
            />
            <Value>탄소강</Value>
          </OptionBox>
          <OptionBox>
            <Checkbox
              type="checkbox"
              value="구리"
              checked={isChecked3}
              onChange={e => checkHandler(e)}
            />
            <Value>구리</Value>
          </OptionBox>
          <OptionBox>
            <Checkbox
              type="checkbox"
              value="합금강"
              checked={isChecked4}
              onChange={e => checkHandler(e)}
            />
            <Value>합금강</Value>
          </OptionBox>
          <OptionBox>
            <Checkbox
              type="checkbox"
              value="강철"
              checked={isChecked5}
              onChange={e => checkHandler(e)}
            />
            <Value>강철</Value>
          </OptionBox>
        </Container>
      </ModalWrapper>
    </ModalOverlay>
  );
}

export default Modal;
