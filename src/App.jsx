import React,{useState} from "react";
import {createGlobalStyle, styled} from "styled-components";
import BannerTop from "./Components/Section/BannerTop";
import TextAnimated from "./Components/Section/TextAnimated";
import SectionThree from "./Components/Section/SectionThree";
import {FooterTopData, FooterbottomData, NavLinks, SliderData, TextBanner, TextBanner2} from "./Data/Data";
import Slider from "./Components/Section/Slider";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import SectionFour from "./Components/Section/SectionFour";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Section/Carousel";
import Main from "./Components/Section/Main";

const App = () => {
  const [nav, setNav] = useState(false);

  return (
    <Router>
      <Container $nav={nav}>
        <GlobalStyle />
        <Navbar NavLinks={NavLinks} nav={nav} setNav={setNav} />
        <BannerTop />
        <Main />
        <TextAnimated TextBanner={TextBanner} direction={false} />
        <SectionThree />
        <TextAnimated TextBanner={TextBanner2} direction={true} />
        <Slider SliderData={SliderData} />
        <Carousel />
        <SectionFour />
        <Footer FooterbottomData={FooterbottomData} FooterTopData={FooterTopData} />
      </Container>
    </Router>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    zoom: 98%;
  }
  body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y:scroll;
}
`;

const Container = styled.div`
  width: 100%;
  height: ${({$nav}) => ($nav ? "100vh" : "100%")};
  position: relative;
  overflow: hidden;
`;
