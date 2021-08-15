import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { getItems } from "api";
import Modal2 from "./Modal2";
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

function Dropdown2({ handleItem, items, isRefresh }: PropsType) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const [isChecked1, setIsChekced1] = useState(false);
  const [isChecked2, setIsChekced2] = useState(false);
  const [isChecked3, setIsChekced3] = useState(false);
  const [isChecked4, setIsChekced4] = useState(false);
  const [isChecked5, setIsChekced5] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  const checkedItemHandler = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems((prev: string[]) => [...prev, value]);
    } else if (!isChecked && checkedItems.includes(value)) {
      setCheckedItems((prev: string[]) => prev.filter(item => item !== value));
    }
  };

  const checkHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.value === "알루미늄") {
      setIsChekced1(!isChecked1);
    }
    if (target.value === "탄소강") {
      setIsChekced2(!isChecked2);
    }
    if (target.value === "구리") {
      setIsChekced3(!isChecked3);
    }
    if (target.value === "합금강") {
      setIsChekced4(!isChecked4);
    }
    if (target.value === "강철") {
      setIsChekced5(!isChecked5);
    }
    checkedItemHandler(target.value, target.checked);
  };

  const fetchData = async () => {
    const { data } = await getItems();
    handleItem(data);
  };

  const filterItems = useCallback(() => {
    if (checkedItems.length === 1) {
      const filteredArr1 = items.filter(item =>
        item.material.includes(checkedItems[0]),
      );
      return handleItem(filteredArr1);
    }
    if (checkedItems.length === 2) {
      const filteredArr2 = items.filter(
        item =>
          item.material.includes(checkedItems[0]) &&
          item.material.includes(checkedItems[1]),
      );
      return handleItem(filteredArr2);
    }
    if (checkedItems.length === 3) {
      const filtered = items.filter(
        item =>
          item.material.includes(checkedItems[0]) &&
          item.material.includes(checkedItems[1]) &&
          item.material.includes(checkedItems[2]),
      );
      return handleItem(filtered);
    }
    if (checkedItems.length === 4) {
      const filtered = items.filter(
        item =>
          item.material.includes(checkedItems[0]) &&
          item.material.includes(checkedItems[1]) &&
          item.material.includes(checkedItems[2]) &&
          item.material.includes(checkedItems[3]),
      );
      return handleItem(filtered);
    }
    if (checkedItems.length === 5) {
      const filtered = items.filter(item => item.material.length === 5);
      return handleItem(filtered);
    }
    return fetchData();
  }, [checkedItems]);

  useEffect(() => {
    filterItems();
  }, [filterItems]);

  useEffect(() => {
    if (isRefresh) {
      setIsChekced1(false);
      setIsChekced2(false);
      setIsChekced3(false);
      setIsChekced4(false);
      setIsChekced5(false);
      return setCheckedItems([]);
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [isRefresh]);

  return (
    <>
      <DropdownContainer
        onClick={() => handleClick()}
        style={{ background: checkedItems.length !== 0 ? "#1565c0" : "white" }}
      >
        <Placeholder
          style={{ color: checkedItems.length !== 0 ? "white" : "black" }}
        >
          재료 ({checkedItems.length})
        </Placeholder>
        <ArrowWrapper>
          <Arrow />
        </ArrowWrapper>
        <Modal2
          isModalOpen={isModalOpen}
          modalClose={modalClose}
          checkHandler={checkHandler}
          isChecked1={isChecked1}
          isChecked2={isChecked2}
          isChecked3={isChecked3}
          isChecked4={isChecked4}
          isChecked5={isChecked5}
        />
      </DropdownContainer>
    </>
  );
}

export default Dropdown2;
