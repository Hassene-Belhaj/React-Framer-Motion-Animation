import React from 'react'
import BoxOne from './Components/BoxOne/BoxOne'
import BoxTwo from './Components/BoxTwo/BoxTwo'
import BoxThree from './Components/BoxThree/BoxThree'
import { createGlobalStyle, styled } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`

const Container = styled.div`
width: 100%;
height: 100vh;
background: #d5d5d5;
overflow: hidden;
display: flex;
/* justify-content: center; */
`



const App = () => {
  return (
  <Container>
    <GlobalStyle />
  <BoxOne />
  <BoxTwo />
  <BoxThree />
  </Container>
    )
}

export default App