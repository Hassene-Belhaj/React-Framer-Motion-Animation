import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
position: relative;
z-index: 10;
`
const LeavesDiv = styled.div`
position: absolute;
inset: 0;
width: auto;
height: 50%;
display: flex;
justify-content: center;
align-items: center;
z-index:0 ;
`

const ImageDiv = styled.div`
width: 30rem;
height: 30rem;
padding-top: 3rem;
background: transparent;
display: flex;
justify-content: center;
z-index: 1;
img{
    max-width: 80%;
    object-fit: cover;
}
`
const Main = styled.div`
height: 20rem;
z-index: 0 ;
inset : 0;
width: auto;
display: flex;
justify-content: center;
align-items: center;

h2{
    padding-top : 15rem ;
    font-style: italic;
    font-size: 10rem;
    color:rgb(239,135,0);
    text-transform: capitalize;
    letter-spacing: 0.3rem;
    text-shadow: 2px 2px 2px rgb(123,40,36);
    transform:rotate(-5deg);
}
`


const BoxOne = () => {
 const [isAnimating,setIsAnimating] = useState(false)

const VariantItem = {
    hidden : {
        x : "-100vw"
    },
    visible :{
        x: 0 ,
        transition : {
            duration :  1.5}
    }
}

const VariantItem2 = {
    hidden : {
        opacity :0 ,
        x : "100vw"
    },
    visible :{
        opacity : 1 ,
        x: 0 ,
        transition : {
            duration :  1.5
        }
    }
}



 
 return (
<Container>
    <motion.div
     initial="hidden"
     animate="visible"
     variants={VariantItem}
    >
        <Main><h2>Juice Burst</h2></Main>
    </motion.div>

    <motion.div
        initial="hidden"
        animate="visible"
        variants={VariantItem2}
    >
        <ImageDiv>
            <motion.img 
        initial={{
        opacity : 1 ,
        y : -15,
        }}
         animate={{
        y : 15 ,
        opacity : 1 ,
        // rotate : 360,    
        // backgroundColor : "orange" , 
    }}
    transition={{
        type : 'tween' ,
        delay : 2 ,
        duration : 1 ,
        // type :'spring' ,
        // stiffness : 60 ,
        repeat : Infinity,
        repeatType: "reverse",
    }}
            
            src="orangejuice.png" alt="" />
        </ImageDiv>
    </motion.div>
</Container>
  )
}

export default BoxOne