import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import styled from "styled-components";

const TextAnimated = ({TextBanner, direction}) => {
  const Ref = useRef();
  const {scrollYProgress} = useScroll();
  const direction1 = [900, -900];
  const direction2 = [-900, 900];
  const width = useTransform(scrollYProgress, [0, 1], direction ? direction1 : direction2);

  return (
    <>
      <Container ref={Ref}>
        <BannerDiv>
          <TitleDiv style={{x: width}}>
            {Array(5)
              .fill(TextBanner.text)
              .map((item, i) => {
                return (
                  <h3 key={i}>
                    {item}
                    <span>&bull;</span>
                  </h3>
                );
              })}
          </TitleDiv>
        </BannerDiv>
      </Container>
    </>
  );
};

export default TextAnimated;

const Container = styled.div`
  padding: 5rem 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #fff;
`;

const BannerDiv = styled.div`
  height: 15rem;
  width: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1280px) {
    height: 10rem;
  }
  @media screen and (max-width: 586px) {
    height: 5rem;
  }
`;

const TitleDiv = styled(motion.div)`
  display: flex;
  margin: auto;
  transition: all ease-in-out 0.6s;
  span {
    padding-left: 2rem;
    padding-right: 2rem;
    color: gray;
  }
  h3 {
    font-size: 6rem;
    white-space: nowrap;
    color: #fff;
  }
  @media screen and (max-width: 1280px) {
    h3 {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 586px) {
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 262px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;
