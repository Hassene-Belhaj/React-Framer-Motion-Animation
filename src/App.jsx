import React from 'react' 
import { createGlobalStyle, styled } from 'styled-components'
import SectionOne from './Components/Section/SectionOne'
import SectionTwo from './Components/Section/SectionTwo'
import SectionThree from './Components/Section/SectionThree'
import {FooterbottomData, NavLinks1, NavLinks2, SliderData, TextBanner, TextBanner2 } from './Data/Data'
import Slider from './Components/Section/Slider'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import SectionFour from './Components/Section/SectionFour'
import Footer from './Components/Footer/Footer'

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

}
`

const Container = styled.div`
width: 100%;
height: 100%;
overflow-x: hidden;
`



const App = () => {

  return (
<Router>
 <Container>
  <GlobalStyle />
  <Navbar NavLinks1={NavLinks1} NavLinks2={NavLinks2} />
  <SectionOne />
  <SectionTwo TextBanner={TextBanner} />
  <SectionThree />
  <SectionTwo TextBanner={TextBanner2} />
  <Slider SliderData={SliderData}/>
  <SectionFour />
  <Footer FooterbottomData={FooterbottomData}/>
</Container>
</Router>    
  
  )
}

export default App 