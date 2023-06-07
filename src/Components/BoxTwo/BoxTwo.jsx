import React from 'react'
import { styled } from 'styled-components'
import { motion ,useScroll ,useTransform} from 'framer-motion'
import { useReducer } from 'react'
import { useRef } from 'react'



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
background: #000;
display: flex;
flex-direction:row ;
justify-content: center;
align-items: center;
/* h3{
  color: #fff;
  text-transform:uppercase;
  text-align: center;
  font-size: 5rem;
  margin-left:3rem ;
} */
`
const Inbanner = styled.div`
width: 10rem;
height:10rem;
background: rgb(234,141,39);
z-index : 1;
`
const Section = styled(motion.div)`
height: 10rem;
background : #000;
`


const BoxTwo = () => {
 const Ref = useRef()
  const {scrollYProgress} = useScroll()
  const width= useTransform(scrollYProgress , [0 ,1] ,['0%' , "50%"])

  return (
    <Container ref={Ref}>
       {/* <BannerContainer>
           <Banner>
        <motion.div 
         style={{ width}}
        // initial={{
        //   x: "50%"
        // }}
        // animate = {{
        //   x:"-100%" ,
        //  transition : {
        //   duration : 5 ,
        //  }
        // }}
        >
          <Inbanner></Inbanner>     
        </motion.div>
           </Banner>
       </BannerContainer> */}

      <Section style={{width}}></Section>

    </Container>
  )
}

export default BoxTwo