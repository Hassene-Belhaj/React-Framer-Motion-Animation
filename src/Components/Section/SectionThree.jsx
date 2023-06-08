import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { motion,useInView,useAnimation } from 'framer-motion'
import { useRef } from 'react'


const Container = styled.div`
width: 100%;
height: 100vh;
margin: 5rem 0;
display: flex;
justify-content: center;
align-items: center;
`

const RightCol = styled.div`
width: 30%;
height: 100%;
img{
    width: 30%;
}
`

const MiddleCol = styled.div`
padding-top:10rem ;
width: 30%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
h3{
    font-size: 4rem;
    text-align: center;
}
p{
    font-size: 1.5rem;
    text-align: center;
    margin-top: 1rem ;
}


`

const LeftCol = styled.div`
width: 30%;
height: 100%;
img{
    width: 30%;
}

`





const SectionThree = () => {
 const ref = useRef()   
 const animation = useAnimation()
 const isInView = useInView(ref,{once : true})

 useEffect(()=>{
 if(isInView) {
    animation.start("visible");
 } else {
    animation.start("hidden")
 }



 },[isInView])


  return (
   <Container>
     <RightCol  ref={ref}>
        <motion.div 
        variants={{
            hidden : { opacity : 0 , x : "-100%"} ,
            visible : {opacity : 1 , x : 0 }  ,
        }}
        initial='hidden'
        animate={animation}
        transition={{
            type : 'spring' ,
            bounce : 0.3 ,
            duration : 2 ,
        }}
        
        
        
        >
        <img src="orange1.webp" alt="" />
        <img src="orange2.webp" alt="" />
        <img src="orange3.webp" alt="" />
        </motion.div>
     </RightCol>
      <MiddleCol>
        <h3>GET A SLICE <br/>OF THE<br/> ACTION!<br/></h3>
        <p>We squeeze a lot into our tasty drinks: oodles of real fruit juice, plenty of nutrients and tons of flavour - without adding anything artificial. That's right, in the famous words of Doja Cat, we keep it juicy juicy. So pop a few bottles in your basket and see for yourself (it'd be rude not too).</p>
      </MiddleCol>
     <LeftCol>
        <img src="orange4.webp" alt="" />
        <img src="orange5.webp" alt="" />
        <img src="orange6.webp" alt="" />
     </LeftCol>
   </Container>
    )
}

export default SectionThree