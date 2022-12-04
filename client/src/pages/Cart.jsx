import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
const Container = styled.div`
  position: relative;
  background-color: #97a396;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  ${mobile({ flexDirection: "column", alignItems: "center" })};
  height: 57vh;
`;
const PageTitle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  font-size: 60px;
  color: #fff;
  ${mobile({ fontSize: "32px" })};
`;
const Button = styled.button`
  margin-left: 30px;
  margin-top: 30px;
  font-size: 20px;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "14px" })};
`;
const ProductsContainer = styled.div`
  flex: 2;
  margin: 20px 30px;
  margin-bottom: 100px;
  ${mobile({ marginBottom: "0px" })}
`;
const ProductContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  padding-top: 80px;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "content",
  })}
`;

const ProductImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  ${mobile({ borderRadius: "50%", width: "125px", height: "125px" })}
`;

const ProductSummary = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 120px;
  ${mobile({ paddingLeft: "0", marginBottom: "20px" })}
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
  ${mobile({ marginTop: "20px", fontSize: "20px" })}
`;
const Qunatity = styled.div`
  font-size: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  ${mobile({ fontSize: "14px" })}
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
  ${mobile({ border: "none", fontSize: "20px" })}
`;
const SummaryTitle = styled.span`
  color: #fff;
  font-size: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
`;
const SummaryItem = styled.span`
  font-size: 20px;
  padding-top: 10px;
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
  ${mobile({ fontSize: "20px" })};
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [reducedCart, setReducedCart] = useState([{}]);
  const listedProducts = [];
  const isProductEquals = (object1, object2) => {
    return (
      object1._id == object2._id &&
      object1.chosenColor == object2.chosenColor &&
      object1.chosenSize == object1.chosenSize
    );
  };

  useEffect(() => {
    let reducedList = [{}];
    const reduceProducts = () => {
      cart.products.forEach((product) => {
        const { _id, chosenColor, chosenSize, productQuantity } = product;
        const newObject = { _id, chosenColor, chosenSize };
        // const reducedIndex = reducedList.forEach((reducedItem, index) => {
        //   if (isProductEquals(newObject, reducedItem)) {
        //     return index;
        //   } else {
        //     return -1;
        //   }
        // });
        // reducedIndex >= 0
        let reducedIndex = reducedList.indexOf(
          reducedList.find(
            (product) =>
              product._id === _id &&
              product.chosenColor === chosenColor &&
              product.chosenSize === chosenSize,
          ),
        );
        console.log(reducedIndex);
        // reducedList.some(
        //   (product) =>
        //     product._id === _id &&
        //     product.chosenColor === chosenColor &&
        //     product.chosenSize === chosenSize,
        // )
        reducedIndex >= 0
          ? (reducedList[reducedIndex].productQuantity += 1)
          : reducedList.push({ ...product });
      });
    };
    reduceProducts();
    setReducedCart(reducedList);
  }, [cart]);
  console.log(reducedCart);
  return (
    <Container>
      <Navbar></Navbar>
      <PageTitle>[Cart]</PageTitle>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button>
          <ArrowBackIosNewIcon fontSize="20px" />
          Back to shopping
        </Button>
      </Link>
      <Wrapper>
        <ProductsContainer>
          {cart.products.length === 0 ? (
            <div
              style={{
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              C'mon add smth
            </div>
          ) : (
            reducedCart.slice(1, reducedCart.length).map((product) => (
              <ProductContainer>
                <ProductImage src={product.img}></ProductImage>
                <ProductSummary>
                  <ProductProp>Product: {product.title}</ProductProp>
                  <ProductProp>Id: {product._id}</ProductProp>
                  <ProductProp>Size: {product.chosenSize}</ProductProp>
                  <ProductProp>
                    Color: <Color bg={product.chosenColor}></Color>
                  </ProductProp>
                </ProductSummary>
                <ProductPrice>
                  <Qunatity>
                    <RemoveIcon fontSize="20px" />
                    1<AddIcon fontSize="20px" />
                  </Qunatity>
                  <Price>{product.price}$</Price>
                </ProductPrice>
              </ProductContainer>
            ))
          )}
        </ProductsContainer>
        <SummaryContainer>
          <SummaryTitle>SUMMARY</SummaryTitle>
          <SummaryItem>Subtotal {cart.total}$</SummaryItem>
          <SummaryItem>Shipping 10$</SummaryItem>
          <SummaryTitle>Total {cart.total + 10}$</SummaryTitle>
          <CheckoutButton>CHECKOUT</CheckoutButton>
        </SummaryContainer>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};
export default Cart;
