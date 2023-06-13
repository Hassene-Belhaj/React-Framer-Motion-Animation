import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const Container = styled.div`
width: 90%;
height: 100%;
margin: 5rem auto 5rem auto;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
gap: 4rem;
`




const RightCol = styled(motion.div)`
width: 70%;
height: 100%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
img{
    object-fit: cover;
    width: 35%;
 
}
@media screen and (max-width : 768px) {

}
`

const ImageDiv =styled.div`
width: 100%;
height: 100%;
display: flex;
@media screen and (max-width : 768px) {
display:none ;
}

`

const LeftCol = styled(motion.div)`
width: 70%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

img{
    object-fit: cover;
    width: 35%;
}
@media screen and (max-width : 768px) {

}
`

const MiddleCol = styled.div`
padding-top:6rem ;
width: 800px;
height: 900px;
margin:0;
display: flex;
justify-content:flex-start;
align-items: center;
flex-direction: column;
p{
    width :52% ;
    font-size: 1.3rem;
    margin-top: 4rem ;
    text-align: center;
}
@media screen and (max-width : 768px) {
width: 100%;
p{
    width :100% ;
    font-size: 1.3rem;
    margin-top: 2rem ;
    text-align: center;
}
}
`

const H3 = styled(motion.h3)`
    font-size: 4rem;
    text-align: center;
    p{
    width :52% ;
    font-size: 1.3rem;
    margin-top: 4rem ;
    text-align: center;
    }   
@media screen and (max-width : 768px) {
}
`






const SectionThree = () => {

//  const ref = useRef(null)   
 const {ref ,inView} = useInView()
 const animation = useAnimation()

 useEffect(()=>{
 if(inView) {
    animation.start("visible");
 } else {
    animation.start("hidden")
 }

 },[inView])


  return (
   <Container ref={ref}>


     <RightCol 
        variants={{
            hidden : { opacity : 0 , x : "-100%"} ,
            visible : {opacity : 1 , x : "0" }  ,
        }}
        initial='hidden'
        animate={animation}
        transition={{
            type : 'spring' ,
            bounce : 0.5 ,
            duration : 2 ,
            staggerChildren: 0.5
        }}
        >
        <ImageDiv>
            <img src="orange1.webp" alt="" />
            <img src="orange2.webp" alt="" />
            <img src="orange3.webp" alt="" />
        </ImageDiv>
    
     </RightCol>
      <MiddleCol>
        <H3
          variants={{
              hidden : {fontSize : '2rem'} ,
              visible : {fontSize : '5rem'}
            }}
            initial="hidden"
            animate={animation}
            transition={{
                duration : 0.4 ,
                ease : "easeIn"
            }}  
            
            
            >GET A SLICE <br/>OF THE<br/> ACTION!<br/></H3>
   
        <p>We squeeze a lot into our tasty drinks: oodles of real fruit juice, plenty of nutrients and tons of flavour - without adding anything artificial. That's right, in the famous words of Doja Cat, we keep it juicy juicy. So pop a few bottles in your basket and see for yourself (it'd be rude not too).</p>
      </MiddleCol>
     <LeftCol
     variants={{
         hidden : { opacity : 0 , x : "100%"} ,
         visible : {opacity : 1 , x : "0" }  ,
        }}
        initial='hidden'
        animate={animation}
        transition={{
            type : 'spring' ,
            bounce : 0.5 ,
            duration : 3 ,
        }}
        >
    <ImageDiv>
        <img src="orange4.webp" alt="" />
        <img src="orange5.webp" alt="" />
        <img src="orange6.webp" alt="" />
    </ImageDiv>        
     </LeftCol>
   </Container>
    )
}

export default SectionThree