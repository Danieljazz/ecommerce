import React from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const Arrow = styled.div`
  height: 30px;
  weith: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;

const SliderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const DescriptionContainer = styled.div`
  flex: 1;
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
`;

const Button = styled.button`
  border: none;
  font-size: 20px;
`;

const Slider = () => {
  return (
    <Container>
      <Wrapper>
        <Arrow direction="left">
          <KeyboardArrowLeftIcon />
        </Arrow>
        <SliderWrapper>
          <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1620&q=80"></Image>
          </ImageContainer>
          <DescriptionContainer>
            <Title>New Collection.</Title>
            <Desc>Checkout our new collection</Desc>
            <Button>Click here</Button>
          </DescriptionContainer>
        </SliderWrapper>
        <Arrow direction="right">
          <KeyboardArrowRightIcon />
        </Arrow>
      </Wrapper>
    </Container>
  );
};

export default Slider;
