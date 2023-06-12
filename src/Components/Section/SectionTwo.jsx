import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";




const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #fff;
`

const BannerDiv = styled.div`
height: 15rem;
width: 100%;
background: #000;
display: flex;
justify-content: center;
align-items: center;
`


const Title = styled(motion.h1)`
  color: #fff;
  font-size:6rem;
  white-space: nowrap;
  margin: 0;
  text-transform: uppercase;
  transition: all 1s ease-in-out;
  margin: auto;
  span {
  opacity:0.5;
  }
`





const SectionTwo = ({TextBanner}) => {
  const Ref  = useRef()  
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0,1],[-900,900]);




  return (
    <>
      <Container ref={Ref}>
        <BannerDiv>
         <Title  style={{x : width }}>  &nbsp; {TextBanner.text} &nbsp; <span>&bull;</span> &nbsp; {TextBanner.text} &nbsp; 
         <span>&bull;</span> &nbsp; {TextBanner.text}<span>&bull;</span> </Title>
        </BannerDiv>
      </Container>
    </>
  );
};

export default SectionTwo;