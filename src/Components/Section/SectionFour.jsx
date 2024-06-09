import React, {useEffect} from "react";
import {styled} from "styled-components";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const SectionFour = () => {
  const {inView, ref} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [inView]);

  return (
    <Container>
      <Section
        ref={ref}
        variants={{
          hidden: {opacity: 0},
          visible: {opacity: 1},
        }}
        initial="hidden"
        animate={animation}
        transition={{
          duration: 1,
        }}
      >
        <h4>STALK US ON SOCIAL</h4>
        <SociaIcons>
          <LinkItem to={"https://www.facebook.com/"} target="_blank">
            <FaFacebook size={25} />
          </LinkItem>
          <LinkItem to={"https://www.instagram.com/"} target="_blank">
            <FaInstagram size={25} />
          </LinkItem>
          <LinkItem to={"https://www.twitter.com/"} target="_blank">
            <FaTwitter size={25} />
          </LinkItem>
        </SociaIcons>
      </Section>
    </Container>
  );
};

export default SectionFour;

const Container = styled.div`
  margin: auto;
  padding-top: 4rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8fafc;
`;

const Section = styled(motion.section)`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
    font-size: 2rem;
  }
`;
const SociaIcons = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const LinkItem = styled(Link)`
  text-decoration: none;
  color: #000;
  transition: all 0.15s ease-in-out;
  &:hover {
    color: #f07d00;
  }
`;
