import React from 'react'
import { styled } from 'styled-components'
import { useRef } from 'react'
import { motion ,useScroll ,useTransform} from 'framer-motion'



const Container  = styled.div`
width: 100%;
height: 100vh;
justify-content: center;
align-content: center;
`
const BannerContainer = styled.div`
width: 100%;
height: 12rem;
position: relative;
z-index: 1;
`
const Banner = styled.div`
width: 100%;
height: 100%;
position: absolute;
top : 0 ;
bottom: 0;
left: 0;
display: flex;
flex-direction:row ;
justify-content: center;
align-items: center;
color: #000;
`
const Animation = styled(motion.div)`
height: 5rem;
font-size: 3rem;
letter-spacing: 0.5rem;
transition: all 0.5s ease-in;
`


const BoxTwo = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll()

  const TransitionX= useTransform (scrollYProgress,[0,1],[0,900]) 

  return (
    <Container >
      
          <Animation style={{ TransitionX }}>NO-NONSENSE JUICE</Animation>
   



    </Container>
  )
}

export default BoxTwo