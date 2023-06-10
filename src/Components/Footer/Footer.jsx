import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`

width: 50%;
height: 100%;
display: flex;
margin : 5rem auto;
`
const FooterDiv = styled.div`
width: 100%;
`


const Footer = ({FooterbottomData}) => {
  return (
    <Container>
            {FooterbottomData.map((item,K)=>{
                return (
                    <FooterDiv key={K}>
                    <span>{item.text}</span>  
                    </FooterDiv>
                )
            })}
    </Container>
    )
}

export default Footer