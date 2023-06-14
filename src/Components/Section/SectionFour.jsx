import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Container  = styled.div`
margin: auto;
width: 100%;
height: 30vh;
display: flex;
justify-content: center;
align-items: center;
background: #f8fafc;

`

const Section  = styled(motion.section)`
width: 100%;
height: 100%;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
h4 {
font-size    : 2rem ;
}
`
const SociaIcons = styled.div`
margin-top: 2rem;
width: 100% ;
height: auto;
`
const LinkItem = styled(Link)`
text-decoration: none;
`
const IconFB = styled(FaFacebook)`
fill:#000;
transition    :all 0.15s ease-in-out ;
&:hover{
fill :#F07D00 ;    
transition    :all 0.15s ease-in-out ;
}
`
const IconInsta = styled(FaInstagram)`
fill:#000;
transition    :all 0.15s ease-in-out ;
&:hover{
fill :#F07D00 ;    
transition    :all 0.15s ease-in-out ;
}
`
const IconTw = styled(FaTwitter)`
fill:#000;
transition    :all 0.15s ease-in-out ;
&:hover{
fill :#F07D00 ;    
transition    :all 0.15s ease-in-out ;
}
`

const SectionFour = () => {
 const {inView,ref} = useInView()
 const animation = useAnimation()

useEffect(()=>{
if(inView) {
 animation.start('visible')
} else {
  animation.start('hidden')
}


},[inView])



  return (
    <Container >
        <Section ref={ref}
        variants={{
          hidden : {opacity : 1 , x : "-5rem" } ,
          visible : {opacity : 1 , x  : 0}
        }}
        initial="hidden"
        animate={animation}
        transition={{
          duration : 1.8 ,
          type : "spring" ,
          bounce : 0.2
        }}
        
        >
       <h4>STALK US ON SOCIAL</h4>
        <SociaIcons>
            <LinkItem to={'https://www.facebook.com/'} target="_blank">
                <IconFB size={25} color='#000' />
            </LinkItem>
            <LinkItem to={'https://www.instagram.com/'} target="_blank">
          <IconInsta style={{marginLeft:"2rem"}} size={25} color='#000'  />
            </LinkItem>
          <LinkItem to={'https://www.twitter.com/'} target="_blank">
            <IconTw style={{marginLeft:"2rem"}} size={25}  color='#000' />
          </LinkItem>

        </SociaIcons>
        </Section>
    </Container>
    )
}

export default SectionFour