import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { motion ,useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'

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
margin : 2rem auto;
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
width: 100%;
height:auto;
gap: 1rem;
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
const scrollref = useRef(null)
const {scrollXProgress} = useScroll({target:scrollref})
// const Width = useTransform(scrollXProgress, [0 , 1] , ['0%','100%'])

useEffect(()=>{
// console.log(Ref.current.scrollWidth-Ref.current.offsetWidth);
setWidth(3000)
},[scrollref])


  return (
      
<Container  >
      <CarouselContainer ref={scrollref} >
        <CarouselDiv
            drag='x' 
            dragConstraints={{ 
                right : 0 , 
                left : -width 
        }}    
        >
           
            {Slides.map((item,index)=>{
                return (
                    <motion.div key={index} >
                        <img src={item.img} alt="" />
                    </motion.div>
                 )
                })} 

                
            
            </CarouselDiv>
     </CarouselContainer>
 
    </Container>
    )
}

export default Carousel