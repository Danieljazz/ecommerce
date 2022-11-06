import React from "react";
import styled from "styled-components";
import ProductTile from "./ProductTile";
import { hotProducts } from "../data";

const Container = styled.div`
  background: #1b5093;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding-top: 40px;
`;

const Title = styled.p`
  color: #f0faf0;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 60px;
`;

const HotProducts = () => {
  return (
    <Container>
      <Title>[Hot Products]</Title>
      {hotProducts.map((item) => (
        <ProductTile item={item}></ProductTile>
      ))}
    </Container>
  );
};

export default HotProducts;
