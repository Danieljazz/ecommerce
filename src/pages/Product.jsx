import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import { productSliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  background-color: #a66aab;
  position: relative;
`;
const PageTitle = styled.div`
  position: absoulte;
  top: 0;
  left: 0;
  font-size: 60px;
  color: #fff;
`;
const ProductContainer = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
`;
const ProductImgContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.video`
  width: 90%;
  height: 90%;
  object-fit: cover;
`;
const ProductDescription = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Description = styled.div`
  width: 90%;
  height: 90%;
  border: 1px solid #000;
  font-size: 30px;
`;
const DescriptionContent = styled.p``;
const Sizes = styled.select`
  font-size: 28px;
  margin-left: 20px;
`;
const DescriptionSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 30px;
  margin-left: 20px;
`;

const Size = styled.option`
  font-size: ${(props) => props.size};
`;

const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  margin-left: 20px;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Product = () => {
  const [imgIndex, setImgIndex] = useState(1);
  const ArrowHandler = (dir) => {
    if (dir === "+") {
      setImgIndex(imgIndex < 2 ? imgIndex + 1 : 2);
    } else {
      setImgIndex(imgIndex > 0 ? imgIndex - 1 : 0);
    }
  };
  return (
    <Container>
      <Navbar></Navbar>
      <PageTitle>[Product][DS]</PageTitle>
      <ProductContainer>
        <ProductImgContainer>
          <Arrow onClick={() => ArrowHandler("-")}>
            <KeyboardArrowLeftIcon />
          </Arrow>
          <Image
            autoPlay
            muted
            loop
            src={productSliderItems[imgIndex].imgSrc}
          ></Image>
          <Arrow onClick={() => ArrowHandler("+")}>
            <KeyboardArrowRightIcon />
          </Arrow>
        </ProductImgContainer>
        <ProductDescription>
          <Description>
            <DescriptionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              odit facilis fugiat maiores voluptatum quos. Dolorem voluptatem
              saepe iure tempore.
            </DescriptionContent>
            <DescriptionSection>
              <DescriptionContent>Choose size:</DescriptionContent>
              <Sizes>
                <Size size="20px">XXS</Size>
                <Size size="24px">XS</Size>
                <Size size="28px">S</Size>
                <Size size="32px">M</Size>
                <Size size="36px">L</Size>
              </Sizes>
            </DescriptionSection>
            <DescriptionSection>
              <DescriptionContent>Choose color: </DescriptionContent>
              <Color bg="black"></Color>
              <Color bg="red"></Color>
              <Color bg="white"></Color>
            </DescriptionSection>
          </Description>
        </ProductDescription>
      </ProductContainer>
      <Footer></Footer>
    </Container>
  );
};

export default Product;
