import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { motion ,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Container = styled.div`
width: 80%;
height: 100%;
margin : 5rem auto;
`
const FooterContainerTop = styled.div`
width: 80%;
height: 50vh;
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
`
const SectionOne = styled.div`
h3{
  font-size: 1.5rem;
  font-weight: 500;
}
input{
 padding: 1rem 5rem;
 margin: 1rem 1rem 0  0;
}
p {
  margin: 1rem 0;
  width: 500px;
  font-size:1.3rem;
}
`
const SectionTwo = styled.div`
li {
  list-style: none;
  margin: 0.3rem 0;
}
`

const SectionThree = styled.div`
li {
  list-style: none;
  margin: 0.3rem 0;
}
`

const SectionFour = styled.div`
img{
  width: 60%;
  margin: 1rem 0;
}
`

const Button = styled.button`
padding: 1rem 2rem;
border-radius: 5px;
`

const FooterDiv = styled.div`
width: 100%;
`
const FooterContainerBottom= styled(motion.div)`
width: 100%;
display: flex;
`
const LinkItems = styled(Link)`
text-decoration: none;
color: #000;
transition: all 0.15s ease-in-out;
&:hover{
transition: all 0.15s ease-in-out;
color: #F07D00;
}
`

const Footer = ({FooterbottomData,FooterTopData}) => {
    const {ref , inView} = useInView()
    const animation = useAnimation()
    
console.log(FooterTopData[0][0].title);
console.log(FooterTopData[1][0].title);



useEffect(()=>{

if(inView) {

animation.start("visible")

} else {
  animation.start("hidden")
}


 },[inView])   

  return (
    <Container ref={ref}>
      <FooterContainerTop>
            <SectionOne>
             <h3>{FooterTopData[0][0].title}</h3>
              <p>{FooterTopData[0][1].para}</p>
             <input type="text" placeholder="You Email Address" />
              <Button>Submit</Button>
            </SectionOne>
           <SectionTwo>
              <h3>{FooterTopData[1][0].title}</h3>
               <ul>
                {FooterTopData[1].map((item,index)=>{
                  return (
                    <li key={index}>{item.li}</li>
                  )
                })}
               </ul>
           </SectionTwo>
           <SectionThree> 
               <h3>{FooterTopData[2][0].title}</h3>
                <ul>

                {FooterTopData[2].map((item,index)=>{
                  return  (
                    <li key={index}>{item.li}</li>
                    )
                  })}
                  </ul>
           </SectionThree>
           <SectionFour>
                <h3>{FooterTopData[3][0].title}</h3>
                <p>{FooterTopData[3][1].email}</p>
                 <span>
                  <img src={FooterTopData[3][2].image}/>
                 </span>
                  
              
        
                
               
           </SectionFour>
     
  

       </FooterContainerTop>
      

         <FooterContainerBottom
           variants={{
            hidden : { opacity : 0 , x : "-100%"} ,
            visible : {opacity : 1 , x : "0" }  ,
        }}
        initial="hidden"
        animate={animation}
        transition={{
            duration : 1    ,
            delay : 0.2 ,
            type : 'spring' ,
            bounce : 0.2 ,
      
        }}
           
          >
            {FooterbottomData.map((item,K)=>{
                return (
                    <FooterDiv key={K}>           
                    <LinkItems>{item.text}</LinkItems>  
                    </FooterDiv>
                )
            })}
            </FooterContainerBottom>
    </Container>
    )
}

export default Footer