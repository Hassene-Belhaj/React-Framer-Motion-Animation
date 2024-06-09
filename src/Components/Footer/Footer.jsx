import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import {motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";


const Footer = ({ FooterbottomData, FooterTopData }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

const scrollToTheTop = (e) => {
    window.scrollTo({top : 0 , behavior : "smooth"})
}


const variantsBtnScroll = {
  hidden : {opacity : 0 } ,
  visible : {
    opacity : 1 ,
    transition : { 
      delay : 0.5,
      duration : 0.5 ,
      ease: 'easeIn' , 
    }}}

    
const variantsDiv = {
  hidden : {opacity : 0 } ,
  visible : {
    opacity : 1 ,
    transition : { 
      duration : 0.5 ,
      staggerChildren : 0.1
    }}}

  const variantsChildren = {
    hidden : {opacity : 0 , x: -50} ,
    visible : {
      opacity : 1 ,
      x: 0 ,
      transition : {
        duration : 0.2,
        ease : 'easeIn'
      }
    },
  }  

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  return (
    <Container >
      <FooterContainer ref={ref} >
        <FooterContainerGrid variants={variantsDiv} initial='hidden' animate={animation}> 
          
          <SectionOne variants={variantsChildren}>
            <h3>{FooterTopData[0][0].title}</h3>
            <p>{FooterTopData[0][1].para}</p>
            <form onClick={(e) => e.preventDefault()}>
              <input name="textInput" type="text" placeholder="You Email Address" />
              <Button>Submit</Button>
            </form>
          </SectionOne>

          <SectionTwo  variants={variantsChildren}>
            <h3>{FooterTopData[1][0].title}</h3>
            <ul>
              {FooterTopData[1].map((item, index) => {
                return (
                  <li key={index}>
                    <LinkItems>{item.li}</LinkItems>
                  </li>
                );
              })}
            </ul>
          </SectionTwo>

          <SectionThree  variants={variantsChildren}>
            <h3>{FooterTopData[2][0].title}</h3>
            <ul>
              {FooterTopData[2].map((item, index) => {
                return (
                  <li key={index}>
                    <LinkItems>{item.li}</LinkItems>
                  </li>
                );
              })}
            </ul>
          </SectionThree>

          <SectionFour  variants={variantsChildren}>
            <h3>{FooterTopData[3][0].title}</h3>
            <p>
              <LinkItems>{FooterTopData[3][1].email}</LinkItems>
            </p>
            <span>
              <img src={FooterTopData[3][2].image} />
            </span>
          </SectionFour>
        </FooterContainerGrid>

        <FooterContainerBottom variants={variantsBtnScroll} initial='hidden' animate={animation} >
          {FooterbottomData.map((item, K) => {
            return (
              <FooterDiv key={K} >
                <LinkItems>{item.text}</LinkItems>
              </FooterDiv>
            );
          })}
        </FooterContainerBottom>
        <Scroll variants={variantsBtnScroll}  initial='hidden' animate={animation}>
            <Button onClick={scrollToTheTop}>
              <BsChevronUp size={25} />
            </Button>
        </Scroll>
      </FooterContainer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 100%;
  padding: 4rem;
  margin: auto;
  `;
const FooterContainer = styled.footer`
  height: 100%;
  text-align: center;
`;

const FooterContainerGrid = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4 , 1fr);
  gap: 2rem;
  margin: auto;
  @media screen and (max-width: 895px) {
    grid-template-columns: repeat(2 , 1fr);
    gap: 4rem;
    order: 2;
  } 
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1 , 1fr);
    gap: 4rem;
  } 
`;
const SectionOne = styled(motion.div)`
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  input {
    font-size: 1.2rem;
    height: 3rem;
    width: 100%;
    border-radius: 5px;
    padding-left: 1rem;
    border: 2px solid rgba(0,0,0,0.5);
    transition: all ease-in-out 0.3s;
  }
  p {
    padding: 1rem;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;
const SectionTwo = styled(motion.div)`
  li {
    list-style: none;
    margin: 0.3rem 0;
  }
`;

const SectionThree = styled(motion.div)`
  li {
    list-style: none;
    margin: 0.3rem 0;
  }
`;

const SectionFour = styled(motion.div)`
 width: 100%;
  img {
    width: 14rem;
    height: 14rem;
    object-fit: contain;
  }
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 5px;
  background-color: #f07d00;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  /* transform: skewX(0deg); */
  border-radius: 5px;
  &:hover{
    background-color: #000;
  }
`;

const FooterDiv = styled.div`
  width: 100%;
`;
const FooterContainerBottom = styled(motion.div)`
  padding-top: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6 , 1fr);
  @media screen and (max-width: 895px) {
    grid-template-columns: repeat(2 , 1fr);
    gap: 3rem;
  }
  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1 , 1fr);
    gap: 3rem;
  }
`;
const LinkItems = styled(Link)`
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: 1.2rem;
  color: #000;
  transition: all 0.15s ease-in-out;
  &:hover {
    color: #f07d00;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
const Scroll = styled(motion.div)`
  padding-top: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
