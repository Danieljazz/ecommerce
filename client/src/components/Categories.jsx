import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { mobile } from "../responsive";
import { v4 as uuidv4 } from "uuid";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  ${mobile({
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "auto",
  })}
`;

const PageTitle = styled.p`
  z-index: 2;
  color: #f0faf0;
  font-size: 60px;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: italic;
  ${mobile({ fontSize: "32px" })}
`;

const Categories = () => {
  return (
    <Container>
      <PageTitle>[Categories]</PageTitle>
      {categories.map((category) => (
        <CategoryItem key={uuidv4()} item={category}></CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
