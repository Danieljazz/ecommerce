import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductTile from "../components/ProductTile";
import { hotProducts } from "../data";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const PageTitle = styled.div`
  position: absoulte;
  top: 0;
  left: 0;
  font-size: 40px;
  color: #fff;
`;
const ItemsWrapper = styled.div`
  width: 100%;
  margin-top: 300px;
`;
const Filter = styled.span`
  color: white;
  margin-left: 20px;
  font-size: 28px;
`;
const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Select = styled.select`
  margin-left: 20px;
  font-size: 28px;
`;
const Option = styled.option``;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 40px;
`;

const CategoryProductList = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <PageTitle>[Dresses]</PageTitle>
      <ItemsWrapper>
        <FilterContainer>
          <Filter>
            Filter by
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Blue</Option>
              <Option>Brown</Option>
              <Option>Black</Option>
              <Option>Red</Option>
            </Select>
          </Filter>
          <Filter>
            Sort by
            <Select>
              <Option>Price ascending</Option>
              <Option>Price descending</Option>
              <Option>Alphabetical A{"->"}Z</Option>
              <Option>Alphabetical Z{"->"}A</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <ProductContainer>
          {hotProducts.map((item) => {
            if (item.category === "Dresses") {
              return <ProductTile item={item}></ProductTile>;
            }
          })}
        </ProductContainer>
      </ItemsWrapper>
    </Container>
  );
};

export default CategoryProductList;
