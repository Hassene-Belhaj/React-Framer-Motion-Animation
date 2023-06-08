import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const Container = styled.div`
width: 100%;
height: 100vh;
margin: 5rem 0;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`

const RightCol = styled(motion.div)`
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

p{
    font-size: 1.5rem;
    text-align: center;
    margin-top: 1rem ;
}
`

const H3 = styled(motion.h3)`
    font-size: 4rem;
    text-align: center;

`

const LeftCol = styled(motion.div)`
width: 30%;
height: 100%;
img{
    width: 30%;
}

`
const Image = styled(motion.img)`
width: 30%;
`




const SectionThree = () => {

//  const ref = useRef(null)   
 const {ref ,inView} = useInView()
 const animation = useAnimation()

 useEffect(()=>{
 if(inView) {
    console.log(inView);
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

        <Image src="orange1.webp" alt="" />
        <Image src="orange2.webp" alt="" />
        <Image src="orange3.webp" alt="" />
    
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
        <Image src="orange4.webp" alt="" />
        <Image src="orange5.webp" alt="" />
        <Image src="orange6.webp" alt="" />
     </LeftCol>
   </Container>
    )
}

export default SectionThree