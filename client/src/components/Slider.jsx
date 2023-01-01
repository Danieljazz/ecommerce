import React from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState, useEffect } from "react";
import { sliderItems } from "../data.js";
import { mobile } from "../responsive";
import { v4 as uuidv4 } from "uuid";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  ${mobile({ height: "auto", paddingBottom: "20px" })}
`;

const Arrow = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 2;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.transform * -100}vw);
`;

const SliderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "column", paddingTop: "220px" })}
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const DescriptionContainer = styled.div`
  flex: 1;
  ${mobile({ marginTop: "100px" })}
`;

const Image = styled.img`
  width: 60%;
`;

const Title = styled.h1`
  color: red;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 40px;
  ${mobile({ fontSize: "20px" })}
`;

const Button = styled.button`
  border: none;
  font-size: 20px;
`;

const SectionTitle = styled.p`
  color: #f0faf0;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 60px;
  z-index: 2;
  ${mobile({ fontSize: "32px" })}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const ArrowHandler = (direct) => {
    if (direct === "+") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    } else {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      ArrowHandler("+");
    }, 10000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <Container>
      <SectionTitle>[New]</SectionTitle>
      <Arrow direction="left" onClick={() => ArrowHandler("-")}>
        <KeyboardArrowLeftIcon />
      </Arrow>
      <Wrapper transform={slideIndex}>
        {sliderItems.map((slideItem) => (
          <SliderWrapper key={uuidv4()} bg={slideItem.bg}>
            <ImageContainer>
              <Image src={slideItem.imgSrc}></Image>
            </ImageContainer>
            <DescriptionContainer>
              <Title>{slideItem.title}</Title>
              <Desc>{slideItem.desc}</Desc>
              <Button>Click here</Button>
            </DescriptionContainer>
          </SliderWrapper>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => ArrowHandler("+")}>
        <KeyboardArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
