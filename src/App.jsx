import React from 'react' 
import { createGlobalStyle, styled } from 'styled-components'
import SectionOne from './Components/Section/SectionOne'
import SectionTwo from './Components/Section/SectionTwo'
import SectionThree from './Components/Section/SectionThree'
import { TextBanner, TextBanner2 } from './Data/Data'
import Slider from './Components/Section/Slider'

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
 <Container>
  <GlobalStyle />
  <SectionOne />
  <SectionTwo TextBanner={TextBanner} />
  <SectionThree />
  <SectionTwo TextBanner={TextBanner2} />
  <Slider />
</Container>
  
  )
}

export default App 