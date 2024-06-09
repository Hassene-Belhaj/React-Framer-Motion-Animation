import {delay, easeIn, motion, useAnimation} from "framer-motion";
import React, {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {styled} from "styled-components";

const SectionThree = () => {
  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  const variantsDiv = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const variantsChildren1 = {
    hidden: {opacity: 0, x: -100},
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
      },
    },
  };

  const VariantTitle = {
    hidden : {scale : 0.8} ,
    visible : {
      scale : 1.2 ,
      transition : {
        delay : 0.2 ,
        duration : 0.2 ,
        ease : 'easeIn'
      }
    }
  }
  const VariantText = {
    hidden : {opacity : 0} ,
    visible : {
      opacity : 1, 
      transition : {
        delay : 0.2 ,
        duration : 1 ,
        ease : 'easeIn'
      }
  }
}

  const variantsChildren2 = {...variantsChildren1, hidden: {opacity: 0, x: 100}};
  // console.log(variantsChildren2);
  return (
    <Container ref={ref}>
      <RightCol>
        <ImageDivMotion variants={variantsDiv} initial="hidden" animate={animation}>
          <motion.img variants={variantsChildren1} src="orange1.webp" alt="" />
          <motion.img variants={variantsChildren1} src="orange2.webp" alt="" />
          <motion.img variants={variantsChildren1} src="orange3.webp" alt="" />
        </ImageDivMotion>
      </RightCol>
      <MiddleColMotion>
        <Title3Motion variants={VariantTitle} initial="hidden" animate={animation}>
          GET A SLICE OF THE ACTION!
        </Title3Motion>
        <Text variants={VariantText}  initial="hidden" animate={animation}>
          We squeeze a lot into our tasty drinks: oodles of real fruit juice, plenty of nutrients and tons of flavour - without adding anything artificial. That's right, in the famous words of Doja Cat, we keep it juicy juicy. So pop a few bottles in your basket and see for yourself (it'd be rude
          not too).
        </Text>
      </MiddleColMotion>
      <LeftCol>
        <ImageDivMotion variants={variantsDiv} initial="hidden" animate={animation}>
          <motion.img variants={variantsChildren2} src="orange4.webp" alt="" />
          <motion.img variants={variantsChildren2} src="orange5.webp" alt="" />
          <motion.img variants={variantsChildren2} src="orange6.webp" alt="" />
        </ImageDivMotion>
      </LeftCol>
    </Container>
  );
};

export default SectionThree;

const Container = styled.div`
  display: flex;
  height: 600px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    gap: 4rem;
  }
`;

const RightCol = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageDivMotion = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 1180px) {
    width: 200px;
    height: 200px;
    gap: 0.5rem;
  }
  @media screen and (max-width : 280px) {
    width: 180px;
    height: 180px;
  }
    @media screen and (max-width : 280px) {
    width: 140px;
    height: 140px;
  }
`;

const LeftCol = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleColMotion = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  p {
    width: 100%;
    font-size: 1.2rem;
    margin-top: 4rem;
    text-align: center;
  }
`;

const Title3Motion = styled(motion.h3)`
  padding: 1rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  text-align: center;
  white-space: break-spaces;
  @media screen and (max-width : 275px) {
    font-size: 2rem;
    width: 10rem;
  }
`;

const Text = styled(motion.p)`
  padding: 2rem;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  text-align: center;
  @media screen and (max-width: 768px) {
  }
`;
