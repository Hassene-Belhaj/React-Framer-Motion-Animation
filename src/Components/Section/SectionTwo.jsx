import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";




const Header = styled.div`
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
`





const SectionTwo = () => {
  const ref  = useRef()  
  const { scrollYProgress } = useScroll()
  const width = useTransform(scrollYProgress, [0,1],[-900,900]);


  return (
    <>
      <Header ref={ref}>
        <BannerDiv>
         <Title style={{x : width }}> &bull; &nbsp; NO-NONSENSE JUICE &nbsp; &bull;&nbsp; NO-NONSENSE JUICE &nbsp; &bull;&nbsp; NO-NONSENSE JUICE &nbsp;</Title>
        </BannerDiv>
      </Header>
    </>
  );
};

export default SectionTwo;