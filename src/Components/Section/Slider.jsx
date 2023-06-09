import React, { useEffect } from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import { GoPrimitiveDot } from 'react-icons/go'
import { motion ,useAnimate} from 'framer-motion'


const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
margin:0 auto 5rem auto;
background: #F07D00;
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
width: 800px;
`



const SlideDot = styled.div`
position: absolute;
margin-top: 10rem;
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

const Dot =styled(GoPrimitiveDot)`

`




const Slider = ({SliderData}) => {

  const [index,setIndex] = useState(0)

useEffect(()=>{
const timeout = setTimeout(() => {
 nextSlide() 
}, 2900); 
return () => clearTimeout(timeout)

},[index])




const nextSlide = () => {
  const curr = index === SliderData.length - 1;
  setIndex(curr ? 0 : index + 1)
};


  



const handleClick = (i) => {
setIndex(i)
}

  return (
   <Container>
     <SlideDiv>
       <DivText
          variants={{
            hidden : { opacity : 0 , x : "100%"} ,
            visible : {opacity : 1 , x : "0" }  ,
        }}
        initial='hidden'
        animate='visible'
        transition={{
            type : 'spring' ,
            bounce : 0.5 ,
            duration : 2 ,
            delay : 0.5,
        }}       
       
       
       >
        <h3>{SliderData[index].text} </h3>
       </DivText>
      <SlideDot>
      {SliderData.map((item,i)=>{
        return (
          <DotDiv key={i}>
            <Dot onClick={()=>handleClick(i)} size={25} />
          </DotDiv>
        )
      })}
      </SlideDot>
      
      </SlideDiv>
    </Container>

    )
}

export default Slider


