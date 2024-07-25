import styled, { css } from "styled-components";

import Cloud from "../public/img/cloud.svg";
import TopBackground from "../public/img/image.png";
import Logo from "../public/img/logo.svg";
import Pin from "../public/img/pin.svg";

const BackColor = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f2f4f6;
`;

const wholeWrapper = css`
  height: 100vh;
  display: flex;
  gap: 16px 16px;
  flex-direction: column;
`;

const WholeWrapper = styled.div`
  ${wholeWrapper};
  width: 400px;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Header = styled.div`
  height: 89px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const HeaderRightWrapper = styled.div`
  display: flex;
  gap: 0 10px;
`;

const HeaderLeftWrapper = styled.div`
  display: flex;
  &:nth-child(1) {
    flex-grow: 1;
  }
`;

const TopImage = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 15px;
  font-weight: bold;
  color: white;
  background-image: url(${TopBackground});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopSection = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleContent = styled.div`
  height: 302px;
  width: 100%;
  background: white;
  border-radius: 15px;
`;

const BottomContent = styled.div`
  height: 168px;
  width: 135px;
  background: white;
  border-radius: 15px;
`;

const BottomScroll = styled.div`
  height: 188px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #b1b8c0;
    border-radius: 10px;
  }
`;

const BottomSection = styled.div`
  height: 168px;
  width: 457px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function App() {
  return (
    <BackColor>
      <WholeWrapper>
        <Header>
          <HeaderLeftWrapper>
            <img src={Logo} />
          </HeaderLeftWrapper>
          <HeaderRightWrapper>
            <img src={Cloud} />
            <img src={Pin} />
          </HeaderRightWrapper>
        </Header>
        <TopSection>
          <TopImage>새로운 두부를 만나보세요.</TopImage>
        </TopSection>
        <MiddleContent></MiddleContent>
        <BottomScroll>
          <BottomSection>
            <BottomContent></BottomContent>
            <BottomContent></BottomContent>
            <BottomContent></BottomContent>
          </BottomSection>
        </BottomScroll>
      </WholeWrapper>
    </BackColor>
  );
}

export default App;
