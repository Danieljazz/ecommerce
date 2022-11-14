import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import { productSliderItems } from "../data";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.bg === undefined ? "#a66aab" : props.bg};
  position: relative;
`;
const PageTitle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  font-size: 60px;
  color: #fff;
  ${mobile({ fontSize: "32px" })}
`;
const ProductContainer = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    height: "auto",
    padding: "20px 0px 20px 0px",
  })}
`;
const ProductImgContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
`;
const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  transition: all 1s ease;
`;
const Video = styled.video`
  width: 90%;
  height: 90%;
  object-fit: cover;
  transition: all 1s ease;
`;
const ProductDescription = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  ${mobile({ width: "90%", paddingTop: "20px" })}
`;
const Description = styled.div`
  width: 90%;
  height: 90%;
  font-size: 30px;
  ${mobile({
    fontSize: "16px",
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  })}
`;
const DescriptionContent = styled.p``;
const Sizes = styled.select`
  font-size: 28px;
  margin-left: 20px;
  ${mobile({ fontSize: "16px" })}
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
  ${mobile({ fontSize: "10px" })}
`;

const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  margin-left: 20px;
  cursor: pointer;
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const BuyButton = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 40px;
  margin-left: 20px;
  ${mobile({ fontSize: "20px", width: "30%" })}
`;

const PriceTag = styled.span`
  text-align: center;
  font-size: 90px;
  ${mobile({ fontSize: "32px", marginTop: "0" })}
`;

const Product = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const ArrowHandler = (dir) => {
    if (dir === "+") {
      setImgIndex(imgIndex < 1 ? imgIndex + 1 : 1);
    } else {
      setImgIndex(imgIndex > 0 ? imgIndex - 1 : 0);
    }
  };

  return (
    <Container bg={productSliderItems[0].bg}>
      <Navbar></Navbar>
      <PageTitle>[Product][DS]</PageTitle>
      <ProductContainer>
        <ProductImgContainer>
          <Arrow onClick={() => ArrowHandler("-")}>
            <KeyboardArrowLeftIcon fontSize="large" />
          </Arrow>
          {productSliderItems[imgIndex].type === "img" ? (
            <Image src={productSliderItems[imgIndex].imgSrc}></Image>
          ) : (
            <Video
              autoPlay
              loop
              muted
              src={productSliderItems[imgIndex].imgSrc}
            ></Video>
          )}
          <Arrow onClick={() => ArrowHandler("+")}>
            <KeyboardArrowRightIcon fontSize="large" />
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

            <DescriptionSection>
              <PriceTag>240$</PriceTag>
              <BuyButton>
                Buy <AddShoppingCartIcon fontSize="medium" />
              </BuyButton>
            </DescriptionSection>
          </Description>
        </ProductDescription>
      </ProductContainer>
      <Footer></Footer>
    </Container>
  );
};

export default Product;