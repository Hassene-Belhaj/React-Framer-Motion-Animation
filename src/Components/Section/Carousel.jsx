import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Container = styled.div`
width: 94%;
height: 100%;
margin:auto;
`
const CarouselContainer = styled(motion.div)`
width: 100%;
height: 100%;
background-color:#000;
border-radius: 25px;
margin : 5rem auto;
overflow-x: hidden;
cursor: grab;
`

const CarouselDiv = styled(motion.div)`
padding: 2rem;
width: 100%;
height: 100%;
gap: 2rem;
background-color: #000;
display: flex;
align-items: center;
justify-content: flex-start;
img{
    min-width:50%;
    height: 500px;
    border-radius: 25px;
    object-fit: cover;
    pointer-events: none;

 }
`




const SliderImg  = [
    {img : "bottles.webp"},
    {img : "man.webp"},
    {img : "woman.webp"},
    {img : "manwoman.webp"},
    {img : "bottles.webp"},
    {img : "man.webp"},
    {img : "woman.webp"},
    {img : "manwoman.webp"},
]


const Carousel = () => {
  const [width,setWidth] = useState(0)  
  const Ref = useRef()

  useEffect(()=>{
    // console.log(Ref.current.scrollWidth-Ref.current.offsetWidth);
    setWidth(2900)
    // setWidth(2900);
  },[Ref])

  return (
    <Container>

        <CarouselContainer ref={Ref} >

        <CarouselDiv drag='x' dragConstraints={{right : 0 , left :-width}}>
         {SliderImg.map((item,index)=>{
             return (
                    <motion.div key={index}>
                        <img  src={item.img} alt="" />
                    </motion.div>
                 
                 )
                })}
           
            </CarouselDiv>

     </CarouselContainer>
               
    </Container>
    )
}

export default Carousel