import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductTile from "./ProductTile";
import { hotProducts } from "../data";
import { mobile } from "../responsive";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const Container = styled.div`
  background: #566485;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 100px;
`;

const Title = styled.p`
  color: #f0faf0;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 60px;
  ${mobile({
    fontSize: "32px",
  })}
`;

const HotProducts = () => {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER}/api/products`,
        );
        setProducts(res.data.slice(4, 8));
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Title>[Hot Products]</Title>
      {products.map((item) => (
        <ProductTile key={uuidv4()} item={item}></ProductTile>
      ))}
    </Container>
  );
};

export default HotProducts;
