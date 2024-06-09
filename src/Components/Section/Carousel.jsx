import React, {useEffect, useState} from "react";
import {styled} from "styled-components";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

const Slides = [{img: "bottles.webp"}, {img: "man.webp"}, {img: "woman.webp"}, {img: "manwoman.webp"}, {img: "bottles.webp"}, {img: "man.webp"}, {img: "woman.webp"}, {img: "manwoman.webp"}];

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const scrollref = useRef(null);

  useEffect(() => {
    // console.log(Ref.current.scrollWidth-Ref.current.offsetWidth);
    setWidth(3000);
  }, [scrollref]);

  return (
    <Container>
      <CarouselContainer ref={scrollref}>
        <CarouselDiv
          drag="x"
          dragConstraints={{
            right: 0,
            left: -width,
          }}
        >
          {Slides.map((item, index) => {
            return (
              <motion.div key={index}>
                <img src={item.img} alt="image" />
              </motion.div>
            );
          })}
        </CarouselDiv>
      </CarouselContainer>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 4px;
  position: relative;
`;
const CarouselContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 25px;
  margin: 4rem 0;
  padding: 2rem 0;
  overflow-x: hidden;
  cursor: grab;
`;

const CarouselDiv = styled(motion.div)`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 2rem;
  background-color: #000;
  img {
    width: 500px;
    height: 500px;
    border-radius: 25px;
    object-fit: cover;
    pointer-events: none;
  }
`;
