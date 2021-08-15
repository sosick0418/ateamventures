import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { ItemTypes } from "../types";
import { getItems } from "../api/index";

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
  left: calc((100% - 1148px) / 2);
  max-width: 1148px;
  width: 1148px;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  @media (max-width: 360px) {
    width: 350px;
    left: 2px;
  }
`;

const Container = styled.div`
  width: 130px;
  height: 80px;
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
  handleItem: (item: ItemTypes[]) => void;
  items: ItemTypes[];
  isRefresh: boolean;
}

function Modal({
  isModalOpen,
  modalClose,
  handleItem,
  items,
  isRefresh,
}: PropTypes): JSX.Element {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isChecked1, setIsChekced1] = useState(false);
  const [isChecked2, setIsChekced2] = useState(false);

  const checkedItemHandler = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems((prev: string[]) => [...prev, value]);
    } else if (!isChecked && checkedItems.includes(value)) {
      setCheckedItems((prev: string[]) => prev.filter(item => item !== value));
    }
  };
  const checkHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.value === "밀링") {
      setIsChekced1(!isChecked1);
    } else {
      setIsChekced2(!isChecked2);
    }
    checkedItemHandler(target.value, target.checked);
  };

  const fetchData = async () => {
    const { data } = await getItems();
    handleItem(data);
  };

  const filterItems = useCallback(() => {
    if (isChecked1 && checkedItems.length === 1) {
      const filteredArr1 = items.filter(item => item.method.includes("밀링"));
      return handleItem(filteredArr1);
    }
    if (isChecked2 && checkedItems.length === 1) {
      const filteredArr2 = items.filter(item => item.method.includes("선반"));
      return handleItem(filteredArr2);
    }
    if (checkedItems.length === 2) {
      const filtered = items.filter(item => item.method.length === 2);
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
      return setCheckedItems([]);
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [isRefresh]);

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
              value="밀링"
              checked={isChecked1}
              onChange={e => checkHandler(e)}
            />
            <Value>밀링</Value>
          </OptionBox>
          <OptionBox>
            <Checkbox
              type="checkbox"
              value="선반"
              checked={isChecked2}
              onChange={e => checkHandler(e)}
            />
            <Value>선반</Value>
          </OptionBox>
        </Container>
      </ModalWrapper>
    </ModalOverlay>
  );
}

export default Modal;
