import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { styled } from 'styled-components'
import { motion ,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { BsChevronUp } from 'react-icons/bs'


const Container = styled.div`
width: 100%;
height: 100%;
margin : 5rem auto;
`
const FooterContainer = styled(motion.footer)`
width: 100%;
height: 100%;
margin : 5rem auto;
text-align: center;
`

const FooterContainerTop = styled(motion.div)`
width: 100%;
height: 100%;
display: flex;
flex: 1;
justify-content: center;
gap: 6rem;
margin: 5rem auto;
@media screen and (max-width : 768px){
  display: block;
  margin: auto;
}
`
const SectionOne = styled.div`
h3{
  font-size: 1.5rem;
  font-weight: 500;
}
input{
padding: 0.85rem 2rem;
margin-right:1rem ;
border-radius: 5px;
}
input::placeholder{
  color: #000;
  font-size: 1rem;
  padding-left: 0.3rem;
}
p {
  width: 500px;
  font-size:1.3rem;
  margin:1rem auto;
}
@media screen and (max-width : 768px) {

}
`
const SectionTwo = styled.div`
li {
  list-style: none;
  margin: 0.3rem 0;
}

@media screen and (max-width : 768px) {
  padding: 2rem;
}
`

const SectionThree = styled.div`
li {
  list-style: none;
  margin: 0.3rem 0;
}
`

const SectionFour = styled.div`
img{
  min-width: 40%;
  max-width: 50%;
  margin: 1rem 0;
}
`



const Button = styled.button`
position: relative;
padding: 1rem 2rem;
border-radius: ${({border})=>border};
background-color: #F07D00;
border: none;
color: #fff;
z-index: 1;
overflow: hidden;
cursor: pointer;


&::before{
  content: "" ;
  position: absolute;
  top: 0;
  left :-1.5rem;
  right: 0;
  bottom: 0;
  width: 0;
  height: 105%;
  background-color: #000;
  transition:all 0.4s ease-in-out;
  transform: skewX(36deg);
  z-index: -1;
  border-radius: 5px;
}
&:hover::before{
  width: 150%;
  transition: all 0.4s ease-in-out;
}
&:hover {
  color: #fff;
}

`

const FooterDiv = styled.div`
width: 100%;

`
const FooterContainerBottom= styled(motion.div)`
width: 100%;
position: relative;
display: flex;
@media screen and (max-width : 768px){
display : block;
text-align : center;
}
`
const LinkItems = styled(Link)`
text-decoration: none;
font-size: 1.1rem;
color: #000;
transition: all 0.15s ease-in-out;
&:hover{
transition: all 0.15s ease-in-out;
color: #F07D00;
}
@media screen and (max-width : 768px){
font-size: 1.3rem;
}
`
const Scroll = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
margin: 5rem auto;
`



const Footer = ({FooterbottomData,FooterTopData}) => {
    const {ref , inView} = useInView()
    const animation = useAnimation()

 

useEffect(()=>{  

if(inView) {

animation.start("visible")

} else {
  animation.start("hidden")
}


 },[inView])   

  return (
    <Container ref={ref}>
      <FooterContainer  variants={{
      hidden : { opacity : 0 , y : "100%"} ,
      visible : {opacity : 1 , y: "0" }  ,
    }}
    initial="hidden"
    animate={animation}
    transition={{
      duration : 1.5 ,
      delay : 0.3 ,
      type : 'spring' ,
      bounce : 0.2 ,
      
    }}>

      <FooterContainerTop
    //   variants={{
    //   hidden : { opacity : 0 , y : "100%"} ,
    //   visible : {opacity : 1 , y: "0" }  ,
    // }}
    // initial="hidden"
    // animate={animation}
    // transition={{
    //   duration : 1 ,
    //   delay : 0.2 ,
    //   type : 'spring' ,
    //   bounce : 0.2 ,
      
    // }}
    
    
    >
            <SectionOne>
             <h3>{FooterTopData[0][0].title}</h3>
              <p>{FooterTopData[0][1].para}</p>
              <form onClick={(e)=>e.preventDefault()}>
              <input type="text" placeholder="You Email Address" />
              <Button border={"5px"}>Submit</Button>
              </form>
            </SectionOne>
           <SectionTwo>
              <h3>{FooterTopData[1][0].title}</h3>
               <ul>
                {FooterTopData[1].map((item,index)=>{
                  return (
                    <li key={index}><LinkItems>{item.li}</LinkItems></li>
                    )
                  })}
               </ul>
           </SectionTwo>
           <SectionThree> 
               <h3>{FooterTopData[2][0].title}</h3>
                <ul>

                {FooterTopData[2].map((item,index)=>{
                  return  (
                    <li key={index}><LinkItems>{item.li}</LinkItems></li>
                    )
                  })}
                  </ul>
           </SectionThree>
           <SectionFour>
                <h3>{FooterTopData[3][0].title}</h3>
                <p><LinkItems>{FooterTopData[3][1].email}</LinkItems></p>
                 <span>
                  <img src={FooterTopData[3][2].image}/>
                 </span>
 
               
           </SectionFour>

       </FooterContainerTop>
      
         <FooterContainerBottom
        //    variants={{
        //      hidden : { opacity : 0 , y : "100%"} ,
        //      visible : {opacity : 1 , y : "0" }  ,
        //     }}
        //     initial="hidden"
        //     animate={animation}
        // transition={{
        //   duration : 2    ,
        //   delay : 0.2 ,
        //   type : 'spring' ,
        //   bounce : 0.2 ,
          
        // }}
        
        >
            {FooterbottomData.map((item,K)=>{
              return (
                <FooterDiv key={K}>           
                    <LinkItems>{item.text}</LinkItems>  
                    </FooterDiv>
                )
              })}
          
            </FooterContainerBottom> 
             <Scroll>
              
          <LinkScroll to="Top" spy={true} smooth={true} offset={0} duration={1000}>
                        <Button>

                          <BsChevronUp size={25}/> 
                        </Button>
          </LinkScroll>


              </Scroll>
              </FooterContainer>
            


     {/* npm i react-scroll ---------------------------------- */}
    
    </Container>
    )
}

export default Footer



