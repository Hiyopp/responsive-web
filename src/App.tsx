import styled, { css } from "styled-components";
import Logo from "../public/img/logo.svg";
import Cloud from "../public/img/cloud.svg";
import Pin from "../public/img/pin.svg";
import TopBackground from "../public/img/image.png";

const BackColor = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #F2F4F6;
`

const wholeWrapper = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const WholeWrapper = styled.div`
  @media (max-width: 800px) {
    ${wholeWrapper};
    position: absolute;
    left: 5vw;
    right: 5vw;
  }
  @media (min-width: 800px) {
    ${wholeWrapper}
    width: 400px;
  }
`;

const Header = styled.div`
  height: 89px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const HeaderLogo = styled.img`
  position: absolute;
  left: 0;
`;

const HeaderCloud = styled.img`
  position: absolute;
  right: 12%;
`;

const HeaderPin = styled.img`
  position: absolute;
  right: 0;
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
`

const MiddleSection = styled.div`
  height: 342px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomContent = styled.div`
  height: 168px;
  width: 135px;
  background: white;
  border-radius: 15px;
`

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
    background: #B1B8C0;
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
          <HeaderLogo src={Logo} />
          <HeaderCloud src={Cloud} />
          <HeaderPin src={Pin} />
        </Header>
        <TopSection>
          <TopImage>새로운 두부를 만나보세요.</TopImage>
        </TopSection>
        <MiddleSection>
          <MiddleContent></MiddleContent>
        </MiddleSection>
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
