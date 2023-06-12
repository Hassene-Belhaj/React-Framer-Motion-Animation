import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { motion ,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Container = styled.div`

width: 70%;
height: 100%;
margin : 5rem auto;
`
const FooterDiv = styled.div`
width: 100%;
`
const FooterContainer= styled(motion.div)`
width: 100%;
display: flex;
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
         <FooterContainer
           variants={{
            hidden : { opacity : 0 , x : "-100%"} ,
            visible : {opacity : 1 , x : "0" }  ,
        }}
        initial="hidden"
        animate={animation}
        transition={{
            duration : 1    ,
            delay : 0.2 ,
            type : 'spring' ,
            bounce : 0.3 ,
      
        }}
           
          >
            {FooterbottomData.map((item,K)=>{
                return (
                    <FooterDiv key={K}>           
                    <LinkItems>{item.text}</LinkItems>  
                    </FooterDiv>
                )
            })}
            </FooterContainer>
    </Container>
    )
}

export default Footer