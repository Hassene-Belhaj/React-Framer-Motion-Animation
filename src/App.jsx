import React from 'react'
import BoxOne from './Components/BoxOne/BoxOne'
import BoxTwo from './Components/BoxTwo/BoxTwo'
import { createGlobalStyle, styled } from 'styled-components'


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
  <Container>
    <GlobalStyle />
  <BoxOne />
  <BoxTwo />

</Container>
  )
}

export default App 