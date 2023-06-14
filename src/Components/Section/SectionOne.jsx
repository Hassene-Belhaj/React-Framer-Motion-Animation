import React, { useEffect} from 'react'
import { styled } from 'styled-components'
import { motion ,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const Container = styled.div`
width: 100%;
height: 100%;
margin: auto;
position: relative;
z-index: 10;
overflow: hidden;
`
const Main = styled.div`
margin-top: -15rem;
margin-left: auto;
margin-right: auto;
width: 80%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding:5rem ;
@media screen and (max-width : 768px) {
  display: block;
  width: 100%;
  margin: auto;
  margin-top:-15rem;
}
`
const LeftCol = styled.div`
width: 50%;
height: 80%;
display: flex;
flex-direction: column;
line-height: 2rem;
h3{
    font-size: 2rem;
    margin-bottom: 1rem;
}
p{
    font-size:1.2rem ;
}
@media screen and (max-width : 768px) {
  display: block;
  width: 100%;
  height: 100%;
  margin: 2rem auto;
}
`
const RightCol = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: center;
border-radius: 5px;
img{
    width: 80%;
    border-radius: 5px;
    object-fit: cover;
}
@media screen and (max-width : 768px) {
    width: 100%;
    margin: auto;
    img{
    width: 600px;
    border-radius: 5px;
    object-fit: cover;
}
}

`
const BannerSm = styled.div`
display: none;
@media screen and (max-width : 768px) {
display    : block;
margin:auto;
width: 100%;
img{
    width: 100%;
    object-fit: cover;
}
}

`



const BannerDiv = styled.div`
width: 100%;
height: 10rem;
display: block;
margin-bottom: 5rem;
img{
    width: 100%;
    object-fit: cover;
}
@media screen and (max-width : 768px) {
    display: none;
}
`

const ImageDiv = styled.div`
width: 15rem;
height: 15rem;
background: transparent;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
img{
    width: 90%;
    object-fit: cover;
    z-index: 20;
}
@media screen and (max-width : 768px) {
  display: block;
}
`

const SectionOne = () => {

const {ref,inView} =useInView()

const animation = useAnimation()


useEffect(()=>{
    if(inView) {
        animation.start("visible") ;
    } else {
       animation.start("hidden")
    }

},[inView])


 return (
<Container >

    <BannerSm>    
        <img src="mobile.webp" alt="" />       
    </BannerSm> 
    <BannerDiv ref={ref}>
   
        <motion.img  
        initial={{opacity : 0.1}}
        animate={{
            opacity : 1 ,
            transition : {
                duration : 2 ,
            }
        }}
        src="full.webp" alt="" 
        />
    </BannerDiv>

    <motion.div
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
    <ImageDiv >
      <motion.img        
        src="orange4.webp" alt="" />
        </ImageDiv>
    </motion.div>
    
        <Main>
            <LeftCol>
            <h3>THE JUICEBURST PROMISE.</h3>
            <p>People have always expected their soft drinks to be tasty, but these days they also need to be healthy, natural and eco-friendly. That's a lot to ask for from a beverage, but JUICEBURST has managed it.
            Our ten delicious flavours are made from quality ingredients with no extra sugar or artificial additives, and each drink counts as one of your five a day. Plus, our juices are bottled up in recyclable packaging.</p>
             <br/>
            <h3>SOUND TOO GOOD TO BE TRUE ?</h3>
             <p>JUICEBURST might well seem like a thirst trap but, we promise, all our claims are 100% real.</p>
            </LeftCol>
            <RightCol>
                <img src='woman.webp' alt="" />
            </RightCol>
        </Main>
</Container>
  )
}

export default SectionOne