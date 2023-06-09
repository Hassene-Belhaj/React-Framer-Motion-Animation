import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'


const Container = styled.div`
width: 100% ;
height: 160px;
`


const Nav = styled.nav`
width: 100%;
height: 160px;
background: #fff;
display: flex;
`

const Logo = styled.div`
width: 100%;
height: 100%;
img {
    width:auto;
    object-fit: cover;
}

`

const Navigation = styled.div`
width: 100%;
height: 100%;
`
const NavLinkItem = styled(Link)`
`



const Navbar = ({NavLinks1,NavLinks2}) => {
  return (
  <Container>
    <Nav>
       <Logo>
        <img src="logo.avif" alt="" />
       </Logo>
        <Navigation>
            {NavLinks1.map((item,key)=>{
                return (
                 <NavLinkItem>
                    {item.link}
                 </NavLinkItem>
                )
            })}
        </Navigation>
    </Nav>
  </Container>
    )
}

export default Navbar