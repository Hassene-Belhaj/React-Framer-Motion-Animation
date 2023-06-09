import React, { useEffect } from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import { GoPrimitiveDot } from 'react-icons/go'
import { motion } from 'framer-motion'


const Container = styled.div`
width: 100%;
height: auto;
padding: 15rem 0;
display: flex;
justify-content: center;
align-items: center;
margin:0 auto 0 auto;
background: #F07D00;
position: relative;
`

const ThumbsUp = styled.div`
position: absolute;
top: 15%;
left: 5rem;
display: flex;
width: auto;
img{
  max-width : 20%;
  object-fit :cover ;
}


`

const SlideDiv = styled.div`
width: 100%;
height : 100% ; 
margin: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

h3{
  font-size: 2rem;
  text-align: center;
}
`
const DivText = styled(motion.div)`
width: 60%;
height:200px;
transition: all 0.3 ease-in-out;
h3{
  font-size: 1.5rem;
}
@media screen and (max-width : 768px){
  width: 300px;
  height: 280px;
}
overflow: hidden;
`



const SlideDot = styled.div`
position: absolute;
margin-top: 20rem;
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`


const DotDiv = styled.div`
width: 20px;
height: 20px;
display: flex;
margin: 0 1rem;
cursor: pointer;
`

const Dot = styled(GoPrimitiveDot)`
`




const Slider = ({ SliderData }) => {

  const [index, setIndex] = useState(0)
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide()
    }, 2500);
    return () => clearTimeout(timeout)

  }, [index])



  const nextSlide = () => {
    const curr = index === SliderData.length - 1
    setIndex(curr ? 0 : index + 1)
  }

  // const prevslide = () => {
  //  const curr = index === 0
  //  setIndex(curr ? SliderData.length - 1 : index - 1) 
  // }




  const handleClick = (i) => {
    setIndex(i)
  }

  return (
    <Container>
      <ThumbsUp>
        <img src="thumpsup.webp" alt="" />
      </ThumbsUp>
      <SlideDiv>
        <DivText>
            <motion.h3 initial={{opacity : 0 , x :'100%'}}
          animate={{opacity :1 , x : 0}}
          exit={{opacity : 0}}
          transition={{
            duration : 0.5 ,
            type :'spring' ,
            bounce : 0.3
          }}
          key={SliderData[index].text}
          >
            {SliderData[index].text} 
            </motion.h3>
        </DivText>
        <SlideDot>
          {SliderData.map((item, i) => {
            return (
              <DotDiv key={i}>
                <Dot onClick={() => handleClick(i)} size={25} />
              </DotDiv>
            )
          })}
        </SlideDot>

      </SlideDiv>
    </Container>

  )
}

export default Slider


