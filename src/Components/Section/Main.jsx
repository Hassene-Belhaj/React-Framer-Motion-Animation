import {motion, useAnimation} from "framer-motion";
import React, {useEffect} from "react";
import styled from "styled-components";
import {useInView} from "react-intersection-observer";

const Main = () => {
  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  const variantsLeft = {
    hidden: {opacity: 1, scale: 0.9},
    visible: {opacity: 1, scale: 1, transition: {duration: 0.5, type: "spring"}},
  };
  const variantsRigth = {
    hidden: {opacity: 1, scale: 0.9},
    visible: {opacity: 1, scale: 1, transition: {duration: 0.5, type: "spring"}},
  };
  return (
    <MainDiv ref={ref}>
      <LeftCol variants={variantsLeft} initial="hidden" animate={animation}>
        <TextCol>
          <h3>THE JUICEBURST PROMISE.</h3>
          <p>
            People have always expected their soft drinks to be tasty, but these days they also need to be healthy, natural and eco-friendly. That's a lot to ask for from a beverage, but JUICEBURST has managed it. Our ten delicious flavours are made from quality ingredients with no extra sugar or
            artificial additives, and each drink counts as one of your five a day. Plus, our juices are bottled up in recyclable packaging.
          </p>
          <br />
          <h3>SOUND TOO GOOD TO BE TRUE ?</h3>
          <p>JUICEBURST might well seem like a thirst trap but, we promise, all our claims are 100% real.</p>
        </TextCol>
      </LeftCol>
      <RightCol variants={variantsRigth} initial="hidden" animate={animation}>
        <DivImage>
          <Image src="/mainPic.webp" alt="" />
        </DivImage>
      </RightCol>
    </MainDiv>
  );
};

export default Main;

const MainDiv = styled.div`
  width: 80%;
  height: 700px;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 2rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 4rem;
  }
`;
const LeftCol = styled(motion.div)`
  flex: 1;
`;

const TextCol = styled.div`
  h3 {
    font-size: 3rem;
  }
  p {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 1341px) {
    h3 {
      font-size: 2.5rem;
    }
  }
`;

const RightCol = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    gap: 4rem;
    flex: 2;
  }
`;

const DivImage = styled.div`
  max-width: 600px;
  height: 600px;
  @media screen and (max-width : 460px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width : 300px) {
    width: 200px;
    height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;
