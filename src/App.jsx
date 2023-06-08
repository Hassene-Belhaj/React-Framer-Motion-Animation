import React from 'react' 
import { createGlobalStyle, styled } from 'styled-components'
import SectionOne from './Components/Section/SectionOne'
import SectionTwo from './Components/Section/SectionTwo'
import SectionThree from './Components/Section/SectionThree'


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
height: 100vh;
background: #FFF;
overflow-x: hidden;
/* justify-content: center; */
`



const App = () => {
  return (
  <>
  <GlobalStyle />
  <SectionOne />
  <SectionThree />
  <SectionTwo />
</>
  
  )
}

export default App 