import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductTile from "../components/ProductTile";
import Footer from "../components/Footer";
import Announcemenet from "../components/Announcement";
import { hotProducts } from "../data";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
const Container = styled.div`
  position: relative;
  width: 100%;
`;

const PageTitle = styled.div`
  top: 0;
  left: 0;
  font-size: 60px;
  color: #fff;
  ${mobile({ fontSize: "32px" })}
`;
const ItemsWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  padding-bottom: 180px;
  ${mobile({ marginTop: "32px", paddingBottom: "32px" })}
`;
const Filter = styled.span`
  color: white;
  margin-left: 20px;
  font-size: 28px;
  ${mobile({ fontSize: "16px", marginBottom: "32px" })}
`;
const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  ${mobile({ flexDirection: "column" })}
`;

const Select = styled.select`
  margin-left: 20px;
  font-size: 28px;
  ${mobile({ fontSize: "16px" })}
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
  ${mobile({ paddingTop: "0" })}
`;

const CategoryProductList = () => {
  const location = useLocation();
  const chosenCategory = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("new");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await axios.get("http://localhost:5000/api/products/");
        setProducts(products.data);
      } catch (err) {}
    };
    getProducts();
  }, [filter]);
  console.log(products);
  const filterHandler = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  console.log(filter);
  return (
    <Container>
      <Announcemenet></Announcemenet>
      <Navbar></Navbar>
      <PageTitle>[{chosenCategory}]</PageTitle>
      <ItemsWrapper>
        <FilterContainer>
          <Filter>
            Filter by
            <Select name="color" onClick={filterHandler}>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Blue</Option>
              <Option>Brown</Option>
              <Option>Black</Option>
              <Option>Red</Option>
            </Select>
            <Filter>
              or
              <Select name="size" onClick={filterHandler}>
                <Option disabled selected>
                  Size
                </Option>
                <Option>XXS</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
              </Select>
            </Filter>
          </Filter>

          <Filter>
            Sort by
            <Select onClick={(e) => setSort(e.target.value)}>
              <Option value="new">Newest</Option>
              <Option value="old">Oldest</Option>
              <Option value="asc">Price ascending</Option>
              <Option value="desc">Price descending</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <ProductContainer>
          {hotProducts.map((item) => {
            if (item.category === chosenCategory) {
              return <ProductTile item={item}></ProductTile>;
            }
          })}
        </ProductContainer>
      </ItemsWrapper>
      <Footer></Footer>
    </Container>
  );
};

export default CategoryProductList;
