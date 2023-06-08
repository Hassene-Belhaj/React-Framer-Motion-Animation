import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'


const Container = styled.div`
width: 100%;
height: 100vh;
/* flex-wrap: wrap; */
justify-content: center;
align-items: center;
margin: auto;
background:#fff;
position: relative;
z-index: 10;
overflow: hidden;
`
const Main = styled.div`

margin-top: -15rem;
margin-left: auto;
margin-right: auto;
width: 80%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding:5rem ;
`
const LeftCol = styled.div`
width: 50%;
height: 80%;
display: flex;
flex-direction: column;
h3{
    font-size: 2rem;
    margin-bottom: 1rem;
}
p{
    font-size:1.2rem ;
}
`
const RightCol = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
img{
    max-width: 80%;
    
    object-fit: cover;

}
`


const BannerDiv = styled.div`
width: 100%;
height: 10rem;
display: block;
margin-bottom: 5rem;
img{
    width: 100%;
    object-fit: cover;
}

`

const ImageDiv = styled.div`
width: 15rem;
height: 15rem;
background: transparent;
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
img{
    max-width: 80%;
    object-fit: cover;
}
`

const SectionOne = () => {


const [isAnimating,setIsAnimating] = useState(false)


const VariantItem = {
    hidden : {
        x : "-100vw"
    },
    visible :{
        x: 0 ,
        transition : {
            delay : 0.3 ,
            duration :  1
        }
    }
}

 return (
<Container>

    <BannerDiv>
        <motion.img  
        initial={{opacity : 0.1}}
        animate={{
            opacity : 1 ,
            transition : {
                duration : 2 ,
            }
        }}
        src="full.webp" alt="" />
    </BannerDiv>

    <motion.div
        initial="hidden"
        animate="visible"
        variants={VariantItem}
        >
    <ImageDiv>
      <motion.img 
        initial={{
        opacity : 1 ,
        y : -10,
        }}
        animate={{
            y : 10 ,
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
        
        src="orange4.webp" alt="" />
        </ImageDiv>
    </motion.div>
        <Main>
            <LeftCol>
            <h3>THE JUICEBURST PROMISE.</h3>
            <p>People have always expected their soft drinks to be tasty, but these days they also need to be healthy, natural and eco-friendly. That's a lot to ask for from a beverage, but JUICEBURST has managed it.
            Our ten delicious flavours are made from quality ingredients with no extra sugar or artificial additives, and each drink counts as one of your five a day. Plus, our juices are bottled up in recyclable packaging.</p>
             <br/>
            <h3>SOUND TOO GOOD TO BE TRUE ?</h3>
             <p>JUICEBURST might well seem like a thirst trap but, we promise, all our claims are 100% real.</p>
            </LeftCol>
            <RightCol>
                <img src='woman.webp' alt="" />
            </RightCol>
        </Main>
</Container>
  )
}

export default SectionOne