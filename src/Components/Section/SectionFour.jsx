import React from 'react'
import { styled } from 'styled-components'
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Container  = styled.div`
margin: auto;
width: 100%;
height: 30vh;
display: flex;
justify-content: center;
align-items: center;

`

const Div  = styled.div`
/* margin: 0 auto 5rem auto ; */
background: #f8fafc;
width: 100%;
height: 100%;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
h4 {
font-size    : 2rem ;
}
`
const SociaIcons = styled.div`
margin-top: 2rem;
width: 100% ;
height: auto;
`
const LinkItem = styled(Link)`
text-decoration: none;
`



const SectionFour = () => {
  return (
    <Container>
        <Div>
       <h4>STALK US ON SOCIAL</h4>
        <SociaIcons>
            <LinkItem>
                <FaFacebook  size={25} color='#000' />
            </LinkItem>
            <LinkItem>
          <FaInstagram style={{marginLeft:"2rem"}} size={25} color='#000'  />
            </LinkItem>
          <LinkItem>
            <FaTwitter style={{marginLeft:"2rem"}} size={25}  color='#000' />
          </LinkItem>

        </SociaIcons>
        </Div>
    </Container>
    )
}

export default SectionFour