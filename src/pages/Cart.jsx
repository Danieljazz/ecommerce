import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductTile from "../components/ProductTile";
import { categories } from "../data";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Container = styled.div`
  position: relative;
  background-color: #97a396;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 80px;
`;
const PageTitle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  font-size: 60px;
  color: #fff;
`;
const Button = styled.button`
  margin-left: 30px;
  margin-top: 30px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;
const ProductsContainer = styled.div`
  flex: 2;
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
`;
const ProductContainer = styled.div`
  width: 100%;
  height: 400px;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ProductImage = styled.img`
  flex: 1;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

const ProductSummary = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 120px;
`;
const ProductProp = styled.span`
  font-size: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  margin-left: 20px;
`;

const ProductPrice = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Price = styled.span`
  font-size: 40px;
`;
const Qunatity = styled.div`
  font-size: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;
const SummaryContainer = styled.div`
  flex: 1;
  height: 500px;
  border: 3px dashed #fff;
  position: relative;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const SummaryTitle = styled.span`
  color: #fff;
  font-size: 30px;
`;
const SummaryItem = styled.span`
  font-size: 20px;
`;

const CheckoutButton = styled.button`
  width: 80%;
  font-size: 40px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 0;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <PageTitle>[Cart]</PageTitle>
      <Button>
        <ArrowBackIosNewIcon fontSize="large" />
        Back to shopping
      </Button>
      <Wrapper>
        <ProductsContainer>
          <ProductContainer>
            <ProductImage src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"></ProductImage>
            <ProductSummary>
              <ProductProp>Product: Sweater Anna</ProductProp>
              <ProductProp>Id: 92193013290</ProductProp>
              <ProductProp>Size: M</ProductProp>
              <ProductProp>
                Color: <Color bg="red"></Color>
              </ProductProp>
            </ProductSummary>
            <ProductPrice>
              <Qunatity>
                <RemoveIcon fontSize="large" />
                1<AddIcon fontSize="large" />
              </Qunatity>
              <Price>400$</Price>
            </ProductPrice>
          </ProductContainer>
          <ProductContainer>
            <ProductImage src="https://images.unsplash.com/photo-1663428494415-d42a8982f60b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></ProductImage>
            <ProductSummary>
              <ProductProp>Product: l' odeurs</ProductProp>
              <ProductProp>Id: 124123123</ProductProp>
              <ProductProp>Size: -</ProductProp>
              <ProductProp>Color: -</ProductProp>
            </ProductSummary>
            <ProductPrice>
              <Qunatity>
                <RemoveIcon fontSize="large" />
                1<AddIcon fontSize="large" />
              </Qunatity>
              <Price>1200$</Price>
            </ProductPrice>
          </ProductContainer>
        </ProductsContainer>
        <SummaryContainer>
          <SummaryTitle>SUMMARY</SummaryTitle>
          <SummaryItem>Subtotal 1600$</SummaryItem>
          <SummaryItem>Shipping 10$</SummaryItem>
          <SummaryTitle>Total 1610$</SummaryTitle>
          <CheckoutButton>CHECKOUT</CheckoutButton>
        </SummaryContainer>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};
export default Cart;
