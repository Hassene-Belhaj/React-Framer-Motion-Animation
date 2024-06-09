import React, {useEffect} from "react";
import {useState} from "react";
import {styled} from "styled-components";
import {GoPrimitiveDot} from "react-icons/go";
import {motion} from "framer-motion";

const Slider = ({SliderData}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextSlide();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [index]);

  const nextSlide = () => {
    const curr = index === SliderData.length - 1;
    setIndex(curr ? 0 : index + 1);
  };

  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <Section>
      <Container>
        <ThumbsUp>
          <img src="thumpsup.webp" alt="" />
        </ThumbsUp>
        <SlideDiv>
          <CarouselTextDiv>
            <motion.h3
              initial={{opacity: 0, x: "100%"}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0}}
              transition={{
                duration: 1,
                type: "spring",
                bounce: 0.3,
              }}
              key={SliderData[index].text}
            >
              {SliderData[index].text}
            </motion.h3>
          </CarouselTextDiv>
        </SlideDiv>
        <SlideDot>
          {SliderData.map((_item, i) => {
            return (
              <DotDiv key={i}>
                <Dot $fill={index === i ? "#fff" : "#000"} onClick={() => handleClick(i)} size={25} />
              </DotDiv>
            );
          })}
        </SlideDot>
      </Container>
    </Section>
  );
};

export default Slider;

const Section = styled.section`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: #f07d00;
  position: relative;
`;
const ThumbsUp = styled.div`
  position: absolute;
  top: 5rem;
  left: 5rem;
  width: 8rem;
  height: 8rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 880px) {
    top: 2rem;
    left: 2rem;
    width: 4rem;
    height: 4rem;
  }
  @media screen and (max-width: 254px) {
    top: 1rem;
    left: 1rem;
    width: 4rem;
    height: 4rem;
  }
`;
const SlideDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const CarouselTextDiv = styled(motion.div)`
  padding: 2rem;
  h3 {
    width: 60%;
    margin: auto;
    font-size: 3rem;
  }
  @media screen and (max-width: 648px) {
    padding: 2rem;
    h3 {
      width: 100%;
      /* font-size:1.1rem; */
    }
  }
  @media screen and (max-width: 456px) {
    h3 {
      width: 100%;
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 250px) {
    h3 {
      width: 100%;
      font-size: 1.4rem;
    }
  }
`;
const SlideDot = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;
`;
const DotDiv = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const Dot = styled(GoPrimitiveDot)`
  fill: ${({$fill}) => $fill};
  transition: all ease-in-out 0.3s;
`;
