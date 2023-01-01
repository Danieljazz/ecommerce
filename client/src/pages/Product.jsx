import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { productSliderItems } from "../data";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

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
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
`;
const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
  transition: all 1s ease;
`;
const Video = styled.video`
  width: 90%;
  height: 90%;
  object-fit: cover;
  transition: all 1s ease;
`;
const ProductDescription = styled.div`
  width: 40%;
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
  border: ${(props) => (props.isSelected ? "2px solid black" : "none")};
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const BuyButton = styled.button`
  width: 40%;
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
  margin-right: 20px;
  ${mobile({ fontSize: "32px", marginTop: "0" })}
`;

const Product = () => {
  const pId = useLocation();
  const productId = pId.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [chosenSize, setChosenSize] = useState("-");
  const [chosenColor, setChosenColor] = useState("-");
  const dispatch = useDispatch();
  const productQuantity = 1;
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER}/api/products/${productId}`,
        );
        setProduct(res.data);
        setChosenSize(res.data.size[0]);
        setChosenColor(res.data.color[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addButtonHandle = () => {
    dispatch(
      addProduct({ ...product, chosenSize, chosenColor, productQuantity }),
    );
  };
  const [imgIndex, setImgIndex] = useState(0);
  const ArrowHandler = (dir) => {
    if (dir === "+") {
      setImgIndex(imgIndex < 1 ? imgIndex + 1 : 1);
    } else {
      setImgIndex(imgIndex > 0 ? imgIndex - 1 : 0);
    }
  };

  return (
    <Container bg={product?.bg}>
      <Navbar></Navbar>
      <PageTitle>[Product][{product.title}]</PageTitle>
      <ProductContainer>
        <ProductImgContainer>
          <Image src={product.img}></Image>
          {/* <Arrow onClick={() => ArrowHandler("-")}>
            <KeyboardArrowLeftIcon fontSize="large" />
          </Arrow>
          {productSliderItems[imgIndex].type === "video" ? (
            <Video
              autoPlay
              loop
              muted
              src={productSliderItems[imgIndex].imgSrc}
            ></Video>
          ) : (
            <Image src={product.img}></Image>
          )}
          <Arrow onClick={() => ArrowHandler("+")}>
            <KeyboardArrowRightIcon fontSize="large" />
          </Arrow> */}
        </ProductImgContainer>
        <ProductDescription>
          <Description>
            <DescriptionContent>{product.description}</DescriptionContent>
            <DescriptionSection>
              <DescriptionContent>Choose size:</DescriptionContent>
              <Sizes
                onChange={(e) => {
                  setChosenSize(e.target.value);
                }}
              >
                {/* <Size>-</Size> */}
                {product.size?.map((size) => (
                  <Size key={size}>{size.toUpperCase()}</Size>
                ))}
              </Sizes>
            </DescriptionSection>
            <DescriptionSection>
              <DescriptionContent>Choose color: </DescriptionContent>
              {product.color?.map((color) => {
                return (
                  <Color
                    key={color}
                    bg={color}
                    isSelected={color === chosenColor ? true : false}
                    onClick={() => {
                      setChosenColor(color);
                    }}
                  ></Color>
                );
              })}
            </DescriptionSection>

            <DescriptionSection>
              <PriceTag>{product.price}$</PriceTag>
              <BuyButton onClick={addButtonHandle}>
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
