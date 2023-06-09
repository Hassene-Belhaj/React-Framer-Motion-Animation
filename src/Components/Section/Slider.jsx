import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import { GoPrimitiveDot } from 'react-icons/go'


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
width: 40%;
height : 100% ; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease-in-out;

h3{
  font-size: 2rem;
}

`
const SlideDot = styled.div`
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

const handleClick = (i) => {
setIndex(i)
}

  return (
   <Container>
     <SlideDiv>
      <h3>
      {SliderData[index].text}
      </h3>
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