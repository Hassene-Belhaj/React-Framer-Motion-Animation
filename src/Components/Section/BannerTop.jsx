import React, {useEffect} from "react";
import {styled} from "styled-components";
import {delay, motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const BannerTop = () => {
  const {ref, inView} = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  const variantDiv = {
    hidden: {opacity: 0.5},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const variantBottle = {
    hidden: {opacity: 1, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        damping: 9,
      },
    },
  };

  return (
    <Container ref={ref}>
      <MotionBannerDiv variants={variantDiv} initial="hidden" animate={animation}>
        <ImageBanner src="full.webp" />
        <ImageBanner2 src="mobile.webp" />
      </MotionBannerDiv>
      <MotionBottle variants={variantBottle} initial="hidden" animate={animation}>
        <Imagebottle drag dragConstraints={{top: 0, left: 0, bottom: 0, right: 0}} dragElastic={0.8} whileDrag={{scale: 1.5}} src="orange3.webp" />
      </MotionBottle>
    </Container>
  );
};

export default BannerTop;

const Container = styled.div`
  position: relative;
`;

const MotionBannerDiv = styled(motion.div)`
  width: 100%;
  height: auto;
  display: flex;
  background: transparent;
`;

const ImageBanner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ImageBanner2 = styled.img`
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const Imagebottle = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const MotionBottle = styled(motion.div)`
  position: absolute;
  top: 8rem;
  left: 2rem;
  width: 10rem;
  height: 20rem;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
