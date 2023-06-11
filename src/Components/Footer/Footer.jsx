import React from 'react'
import { Link } from 'react-router-dom'
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
const LinkItems = styled(Link)`
text-decoration: none;
color: #000;
transition: all 0.15s ease-in-out;
&:hover{
transition: all 0.15s ease-in-out;
color: #F07D00;
}
`

const Footer = ({FooterbottomData}) => {
  return (
    <Container>
            {FooterbottomData.map((item,K)=>{
                return (
                    <FooterDiv key={K}>
                       
                    <LinkItems>{item.text}</LinkItems>  
                    </FooterDiv>
                )
            })}
    </Container>
    )
}

export default Footer