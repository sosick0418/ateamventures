import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import arrowImage from "../assets/images/arrow.png";
import { ItemTypes } from "../types";

const DropdownContainer = styled.div`
  font-size: 12px;
  margin-right: 10px;
  padding: 0px 10px;
  width: 98px;
  height: 32px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 2px;
  color: #333;
  cursor: pointer;
  transition: all 200ms ease;
  &:hover {
    border: 1px solid #2196f3;
  }
`;

const Placeholder = styled.span`
  display: flex;
  align-items: center;
  width: 60px;
  height: 32px;
`;

const ArrowWrapper = styled.span`
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
`;

const Arrow = styled.img.attrs({
  src: arrowImage,
  resizeMode: "cover",
})`
  width: 30px;
  height: 32px;
  background: transparent;
`;

interface PropsType {
  handleItem: (item: ItemTypes[]) => void;
  items: ItemTypes[];
  isRefresh: boolean;
}

function DropdownComponent({ handleItem, items, isRefresh }: PropsType) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <DropdownContainer onClick={() => handleClick()}>
        <Placeholder>가공방식</Placeholder>
        <ArrowWrapper>
          <Arrow />
        </ArrowWrapper>
        <Modal
          isModalOpen={isModalOpen}
          modalClose={modalClose}
          handleItem={handleItem}
          items={items}
          isRefresh={isRefresh}
        />
      </DropdownContainer>
    </>
  );
}

export default DropdownComponent;
