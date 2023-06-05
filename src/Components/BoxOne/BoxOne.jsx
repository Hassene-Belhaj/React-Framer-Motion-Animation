import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
position: relative;
z-index: 5;
`


const ImageDiv = styled.div`
width: 30rem;
height: 30rem;
padding-top: 3rem;
background: transparent;
display: flex;
justify-content: center;
img{
    max-width: 80%;
    object-fit: cover;
}
`
const Main = styled.div`
position: absolute;
height: auto;
z-index: 0;
inset : 0;
width: auto;
display: flex;
justify-content: center;
align-items: center;

h2{
    padding-top : 12rem ;
    font-style: italic;
    font-size: 10rem;
    color:rgb(239,135,0);
    text-transform: capitalize;
    letter-spacing: 0.3rem;
    text-shadow: 2px 2px 2px rgb(123,40,36);
}
`


const BoxOne = () => {
 const [isAnimating,setIsAnimating] = useState(false)


 
 return (
     <Container>
    <Main><h2>Juice Burst</h2></Main>


    <motion.div
    initial={{
        opacity : 1 ,
    }}
    animate={{
        y : 20 ,
        opacity : 1 ,
        //   rotate : isAnimating ?  360 : 0,    
        //   backgroundColor : "orange" , 
    }}
    transition={{
        type : 'tween' ,
        duration : 1 ,
        // type :'spring' ,
        // stiffness : 40 ,
        repeat : Infinity,
        repeatType: "reverse",
    }}
    
    // onClick={()=>setIsAnimating(!isAnimating)} 
    
    >
        <ImageDiv>
            <img src="orangejuice.png" alt="" />
        </ImageDiv>
    </motion.div>
        </Container>
  )
}

export default BoxOne