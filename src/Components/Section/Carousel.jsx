import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import {BsChevronRight,BsChevronLeft } from 'react-icons/bs'

const Container = styled.div`
width: 95%;
height: 100%;
margin:auto;
position: relative;
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
const LeftArrow = styled.div`
position: absolute;
width: 100px;
height: 100px;
border-radius: 50%;
top : 50%;
transform: translateY(-50%);
bottom: 0;
left: 2rem;
background:rgba(0,0,0,0.8);
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
cursor: pointer;
`

const RightArrow = styled.div`
position: absolute;
width: 100px;
height: 100px;
border-radius: 50%;
top : 50%;
transform: translateY(-50%);
bottom: 0;
right: 2rem;
background:rgba(0,0,0,0.8);
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
cursor: pointer;
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

const Slides  = [
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
setWidth(3700)
},[Ref])

  return (
    <Container>

         {/* <LeftArrow > 
            <BsChevronLeft color='#fff' size={50} />
         </LeftArrow>

         <RightArrow>
            <BsChevronRight color='#fff' size={50} />
        </RightArrow>   */}

        <CarouselContainer 
        ref={Ref} 
        >

        <CarouselDiv 
            drag='x' 
            dragConstraints={{ 
            right : 0 , 
            left : -width 
            }}    
    
            >
             
            {Slides.map((item,index)=>{
             return (
                    <motion.div>
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