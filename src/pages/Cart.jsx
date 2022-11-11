import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductTile from "../components/ProductTile";
import { categories } from "../data";
const Container = styled.div``;
const Wrapper = styled.div`
  width: 100%;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <Wrapper>
        <ProductTile item={categories[0]}></ProductTile>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};
export default Cart;
