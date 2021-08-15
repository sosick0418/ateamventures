import DropdownComponent from "components/Dropdown";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Card from "components/Card";
import Switch from "react-switch";
import { ItemTypes } from "../types";
import Nav from "../components/Nav";
import { getItems } from "../api/index";
import refreshIcon from "../assets/images/refresh.png";
import Dropdown2 from "../components/Dropdown2";

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
  max-width: 1148px;
  width: 1148px;
  height: 100%;
  @media (max-width: 360px) {
    width: 350px;
    max-width: 350px;
  }
`;

const InputTitle = styled.div`
  margin-top: 40px;
  width: 97px;
  height: 32px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #323d45;
`;

const Desc = styled.div`
  font-size: 16px;
  line-height: 24px;
  width: 284px;
  height: 24px;
  color: #323d45;
  margin-bottom: 20px;
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 360px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const ToggleBox = styled.div`
  display: flex;
  align-items: center;
  width: 210px;
  @media (max-width: 360px) {
    margin-bottom: 15px;
  }
`;

const DropdownBox = styled(ToggleBox)`
  width: 300px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 32px;
`;

const NoItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dotted #c2c2c2;
  border-radius: 4px;
  font-size: 14px;
  color: #939fa5;
  width: 100%;
  height: 100px;
  margin-top: 32px;
`;

const RefreshBox = styled.div`
  width: 86px;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RefreshIcon = styled.img.attrs({
  resizeMode: "contain",
  src: refreshIcon,
})`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const RefeshText = styled.div`
  width: 58px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #2196f3;
`;

function MainPage(): JSX.Element {
  const [items, setItems] = useState<ItemTypes[]>([]);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  const fetchData = async () => {
    const { data } = await getItems();
    setItems(data);
  };

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
    if (!isToggleOn) {
      setItems((prev: ItemTypes[]) =>
        prev.filter((item: ItemTypes) => item.status === "상담중"),
      );
    } else {
      fetchData();
    }
  };

  const handleItem = (item: ItemTypes[]) => {
    setItems(item);
  };

  const handleRefresh = () => {
    setIsRefresh(true);
    setTimeout(() => setIsRefresh(false), 500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <ContentContainer>
          <InputTitle>들어온 요청</InputTitle>
          <Desc>파트너에게 딱 맞는 요청서를 찾아보세요.</Desc>
          <OptionContainer>
            <DropdownBox>
              <DropdownComponent
                handleItem={handleItem}
                items={items}
                isRefresh={isRefresh}
              />
              <Dropdown2
                handleItem={handleItem}
                items={items}
                isRefresh={isRefresh}
              />
              <RefreshBox onClick={handleRefresh}>
                <RefreshIcon />
                <RefeshText>필터링 리셋</RefeshText>
              </RefreshBox>
            </DropdownBox>

            <ToggleBox>
              <Switch
                onChange={handleClick}
                checked={isRefresh ? !isRefresh : isToggleOn}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={25}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
              />
              상담 중인 요청만 보기
            </ToggleBox>
          </OptionContainer>
          {items.length === 0 ? (
            <NoItemBox>조건에 맞는 견적 요청이 없습니다.</NoItemBox>
          ) : (
            <CardContainer>
              {items.map((item: ItemTypes) => (
                <Card data={item} key={item.id} />
              ))}
            </CardContainer>
          )}
        </ContentContainer>
      </Container>
    </>
  );
}

export default MainPage;
