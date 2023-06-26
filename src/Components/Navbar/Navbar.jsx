import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { AiOutlineSearch , AiOutlineUser,AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import { BsFillBasketFill} from 'react-icons/bs'


const Container = styled.div`
width: 100%;
height: 100%;
position: relative;
`


const NavContainer = styled.div`
width: 100% ;
height: 160px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
`


const Nav = styled.nav`
width: 100%;
height: 160px;
background: #fff;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width : 1065px){
height:70%;
}
`
const Menu = styled.div`
position: ${({nav})=>nav ? "fixed" : "absolute"};
top : 5rem;
transform : translateY(-50%);
left: 25px;
z-index: 105;
@media screen and (min-width : 768px){
display: none;
}
`
const NavContainerSm = styled.div`
display: none;
@media screen and (max-width:768px){
display    : block;
position: fixed;
top: 0 ;
bottom: 0;
left: ${({nav})=> nav ? 0 : "-100%"};
right: 0;
width: 100%;
height: 100vh;
z-index: 100; 
transition: all 0.5s ease-in-out;

}

`
const ContainerSm = styled.div`
width: 100%;
height: 100%;
display: flex;
padding-top: 10rem;
flex-direction: column;
justify-content: center;
align-items: center;
background: #d5d5d5;
`

const Logo = styled.div`
position: ${({nav})=>nav ? "fixed" : "absolute"};
top: 0px;
left: 50% ;
transform: translate(-50%);
display: flex;
z-index: 600;
cursor: pointer;
img {
    width:180px;
    object-fit: cover;
}

`
const LinkItem = styled.div`
text-decoration: none;
cursor: pointer;
transition: all 0.3s ease-in-out;

&:hover {
 color:#F07D00;
 transition: all 0.3s ease-in-out;
}
`

const FirstNav = styled.div`
position: absolute;
top: 50%;
left:10% ;
transform: translateY(-50%);
display: flex;
width: 45%;
@media screen and (max-width : 1065px){
    display: none;
}
`


const SecondNav = styled.div`
position: absolute;
top: 50%;
right:25% ;
transform: translateY(-50%);
display: flex;
@media screen and (max-width : 1065px){
    display: none;
}
`
const ThirdNav = styled.div`
position: absolute;
right: 8rem;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
@media screen and (max-width : 768px){
    right: 2rem;
}
`

const IconOne = styled(AiOutlineSearch)`
cursor: pointer;
transition: all 0.15s ease-in-out;

&:hover {
 fill:#F07D00;
 transition: all 0.3s ease-in-out;
}
`
const IconTwo = styled(AiOutlineUser)`
cursor: pointer;
transition: all 0.15s ease-in-out;

&:hover {
 fill:#F07D00;
 transition: all 0.15s ease-in-out;
}
`

const IconThree= styled(BsFillBasketFill)`
cursor: pointer;
transition: all 0.15s ease-in-out;

&:hover {
 fill:#F07D00;
 transition: all 0.15s ease-in-out;
}
`




const Navbar = ({NavLinks}) => {
    const [nav,setNav] = useState(false)
    const handleClick = () =>setNav(!nav)
    const handleClose = () =>setNav(!nav)

  return (
      
      <Container id="Top">
      <NavContainer>
      <Nav>
        <Menu nav={nav ? 1 : 0}>
            {nav ? <AiOutlineClose style={{cursor:"pointer"}}  size={25} onClick={handleClick} /> : <AiOutlineMenu style={{cursor:"pointer"}} size={25} onClick={handleClick}/>  }       
        </Menu>
        <Logo nav={nav ? 1 : 0}>
         <img src="logo.avif" alt="" />
        </Logo>
          <FirstNav>
            {NavLinks[0].map((item,key)=>{
                return (
                    <LinkItem  key={key} style={{marginLeft:"3rem"}}>{item.link}</LinkItem>
                    )
                })}
        </FirstNav>
       <SecondNav>
       {NavLinks[1].map((item,key)=>{
           return (
               
               <LinkItem  key={key} style={{marginLeft:"3rem"}}>{item.link}</LinkItem>
               
               )
            })}
        </SecondNav>
        <ThirdNav>
            <IconOne style={{marginLeft :"1rem"}} size={20}/>
            <IconTwo style={{marginLeft :"1rem"}} size={20}/>
            <IconThree style={{marginLeft :"1rem"}} size={20}/>
        </ThirdNav>
    </Nav>

    
    </NavContainer> 

        <NavContainerSm nav={nav ? 1 : 0}> 
              <ContainerSm>
                {NavLinks[0].map((item,key)=>{
                    return (
                        <LinkItem  onClick={handleClick} key={key} style={{marginBottom:"3rem",fontSize:"1.4rem"}}>{item.link}</LinkItem>
                        )
                    })}

                {NavLinks[1].map((item,key)=>{
                    return (  
                        <LinkItem onClick={handleClick} key={key} style={{marginBottom:"3rem",fontSize:"1.4rem"}}>{item.link}</LinkItem>
                        
                        )
                    })}
        
              </ContainerSm>
        </NavContainerSm> 

  </Container>
    )
}

export default Navbar