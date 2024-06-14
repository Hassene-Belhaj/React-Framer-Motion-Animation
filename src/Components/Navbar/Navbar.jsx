import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

const Navbar = ({ NavLinks, nav, setNav }) => {
  const handleClick = () => setNav(!nav);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 845) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <Container>
      <ScrollProgressMotion style={{ scaleX: scrollYProgress }}></ScrollProgressMotion>
      <Menu>{nav ? <IconAiOutlineClose size={25} onClick={handleClick}  /> : <IconAiOutlineMenu size={25} onClick={handleClick} />}</Menu>
      <Logo>
        <Image src="logo.avif" alt="" />
      </Logo>
      <Nav>
        <NavWrapper>
          <Wrapper1>
            <FirstNav>
              {NavLinks[0].map((item, key) => {
                return <LinkItem key={key}>{item.link}</LinkItem>;
              })}
            </FirstNav>
          </Wrapper1>

          <Wrapper2>
            <SecondNav>
              {NavLinks[1].map((item, key) => {
                return <LinkItem key={key}>{item.link}</LinkItem>;
              })}
            </SecondNav>

            <ThirdNav>
              <AiOutlineSearch size={25} />
              <BsFillBasketFill size={25} />
              <AiOutlineUser size={25} />
            </ThirdNav>
          </Wrapper2>
        </NavWrapper>
      </Nav>

      <NavContainerSm $nav={nav}>
        <ContainerSm>
          {NavLinks[0].map((item, key) => {
            return (
              <LinkItem onClick={handleClick} key={key}>
                {item.link}
              </LinkItem>
            );
          })}

          {NavLinks[1].map((item, key) => {
            return (
              <LinkItem onClick={handleClick} key={key}>
                {item.link}
              </LinkItem>
            );
          })}
        </ContainerSm>
      </NavContainerSm>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  height: 140px;
  position: relative;
`;

const ScrollProgressMotion = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(45deg, red, orange);
  transform-origin: left;
  z-index: 100;
`;

const Nav = styled.nav`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  margin: auto;
`;
const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10rem;
`;
const Menu = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  z-index: 40;
  @media screen and (min-width: 846px) {
    display: none;
  }
`;
const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;
`;
const Image = styled.img`
  width: 10rem;
  object-fit: cover;
  transition: all ease-out 0.3s;
  @media screen and (max-width: 290px) {
    width: 7rem;
  }
  @media screen and (max-width: 220px) {
    width: 5rem;
  }
`;

const Wrapper1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 846px) {
    display: none;
  }
`;
const Wrapper2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 846px) {
    display: none;
  }
`;
const FirstNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  /* @media screen and (max-width: 846px) {
    display: none;
  } */
`;
const SecondNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const ThirdNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const IconAiOutlineMenu = styled(AiOutlineMenu)`
  fill: #000;
  cursor: pointer;
`;
const IconAiOutlineClose = styled(AiOutlineClose)`
  fill: #000;
  cursor: pointer;
`;
const NavContainerSm = styled.div`
  display: none;
  @media screen and (max-width: 846px) {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: ${({ $nav }) => ($nav ? 0 : "-100%")};
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    transition: all 0.4s ease-in-out;
    overflow-y: hidden;
  }
`;
const ContainerSm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d5d5d5;
  gap: 2rem;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    color: #f07d00;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
