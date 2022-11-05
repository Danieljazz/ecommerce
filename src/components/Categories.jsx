import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

const Description = styled.p`
  z-index: 2;
  color: #f0faf0;
  font-size: 60px;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: italic;
`;

const Categories = () => {
  return (
    <Container>
      <Description>[Categories]</Description>
      {categories.map((category) => (
        <CategoryItem item={category}></CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
