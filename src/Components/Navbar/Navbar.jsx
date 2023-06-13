import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { AiOutlineSearch , AiOutlineUser } from 'react-icons/ai'
import { BsFillBasketFill} from 'react-icons/bs'


const Container = styled.div`
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
position: relative;
@media screen and (max-width : 1065px){
   height:70%;
}
`

const Logo = styled.div`
position: absolute;
top: 0px;
left: 50% ;
transform: translate(-50%);
display: flex;
width: auto;
height: 100%;
cursor: pointer;
img {
    width:auto;
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

const Navbar = ({NavLinks1,NavLinks2}) => {
  return (
  <Container id="Top">
    <Nav>
        <Logo>
         <img src="logo.avif" alt="" />
        </Logo>
          <FirstNav>
            {NavLinks1.map((item,key)=>{
                return (
                    <LinkItem key={key} style={{marginLeft:"3rem"}}>{item.link}</LinkItem>
                    )
                })}
        </FirstNav>
       <SecondNav>
       {NavLinks2.map((item,key)=>{
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
  </Container>
    )
}

export default Navbar