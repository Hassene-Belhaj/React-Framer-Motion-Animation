import React from 'react'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'

const Container = styled.div`
width: 40rem;
height: 40rem;
background: transparent;
display: flex;
margin-top: 5rem;

img{
    max-width: 80%;
    object-fit: cover;
}
`




const BoxOne = () => {
  return (
    <motion.div
    initial={{
        opacity : 0.5 ,
    }}
    animate={{
      x : 1400,
      opacity : 1 ,
      rotate : 360 ,

    }}
    transition={{
        //  type : 'tween' ,
        //  duration : 1 ,
        type :'spring' ,
        stiffness : 50 ,

    }}
  
    >
        <Container>
            <img src="orangejuice.png" alt="" />
        </Container>
    </motion.div>
  )
}

export default BoxOne