import React from 'react' 
import { createGlobalStyle, styled } from 'styled-components'
import SectionOne from './Components/Section/SectionOne'
import SectionTwo from './Components/Section/SectionTwo'
import SectionThree from './Components/Section/SectionThree'
import {FooterTopData,FooterbottomData, NavLinks,SliderData, TextBanner, TextBanner2 } from './Data/Data'
import Slider from './Components/Section/Slider'
import Navbar from './Components/Navbar/Navbar'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import SectionFour from './Components/Section/SectionFour'
import Footer from './Components/Footer/Footer'
import Carousel from './Components/Section/Carousel'


const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
    font-family: 'Oswald', sans-serif;
}
body {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
`


const Container = styled.div`
width: 100%;
height: 100%;
position: relative;
`
const Button = styled.div`
margin-bottom: -2rem;
position: absolute;
right: 0;
left: 50%;
transform: translateX(-50%);
bottom: -5rem;
width: 50px;
height: 50px;
background: #F07D00;
border-radius: 50%;
span{
  cursor: pointer;
}
`



const App = () => {





  return (
<Router>
 <Container >
  <GlobalStyle />
  <Navbar NavLinks={NavLinks} />
  <SectionOne />
  <SectionTwo TextBanner={TextBanner} />
  <SectionThree />
  <SectionTwo TextBanner={TextBanner2} />
  <Slider SliderData={SliderData}/>
  <Carousel/>
<SectionFour />
  <Footer FooterbottomData={FooterbottomData} FooterTopData={FooterTopData}/> 
</Container>
  
</Router>    
  
  )
}

export default App 