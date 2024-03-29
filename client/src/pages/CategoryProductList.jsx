import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProductTile from "../components/ProductTile";
import Footer from "../components/Footer";
import Announcemenet from "../components/Announcement";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
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
  const chosenCategory = location.pathname.split("/")[2].toLowerCase();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("new");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          chosenCategory
            ? `${process.env.REACT_APP_SERVER}/api/products/?category=${chosenCategory}`
            : `${process.env.REACT_APP_SERVER}/api/products`,
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
    setFilteredProducts(products);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => setFilteredProducts(products), [products]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value.toLowerCase()),
        ),
      ),
    );
  }, [filters]);

  useEffect(() => {
    switch (sort) {
      case "new":
        setFilteredProducts((prevFilt) =>
          [...prevFilt].sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1)),
        );
        break;
      case "old":
        setFilteredProducts((prevFilt) =>
          [...prevFilt].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
        );
        break;
      case "asc":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => a.price - b.price),
        );
        break;
      case "desc":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price),
        );
        break;
      case "az":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => (a.title > b.title ? 1 : -1)),
        );
        break;
      case "za":
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => (a.title < b.title ? 1 : -1)),
        );
        break;
    }
  }, [, sort]);

  const filterHandler = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Announcemenet></Announcemenet>
      <Navbar></Navbar>
      <PageTitle>[{chosenCategory}]</PageTitle>
      <ItemsWrapper>
        <FilterContainer>
          <Filter>
            Filter by
            <Select
              name="color"
              onChange={(e) => {
                e.target.value === "Color"
                  ? setFilters((filters) => delete { ...filters["color"] })
                  : filterHandler(e);
              }}
            >
              <Option>Color</Option>
              <Option>White</Option>
              <Option>Blue</Option>
              <Option>Brown</Option>
              <Option>Black</Option>
              <Option>Red</Option>
            </Select>
            <Filter>
              or
              <Select
                name="size"
                onChange={(e) => {
                  e.target.value === "Size"
                    ? setFilters((filters) => delete { ...filters["size"] })
                    : filterHandler(e);
                }}
              >
                <Option>Size</Option>
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
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="new">Newest</Option>
              <Option value="old">Oldest</Option>
              <Option value="asc">Price ascending</Option>
              <Option value="desc">Price descending</Option>
              <Option value="az">Alphabetical A-Z</Option>
              <Option value="za">Alphabetical Z-A</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <ProductContainer>
          {filteredProducts.length !== 0 ? (
            filteredProducts.map((item) => {
              if (item.inStock) {
                return <ProductTile key={uuidv4()} item={item}></ProductTile>;
              }
            })
          ) : (
            <div
              style={{
                height: "34vh",
                fontSize: "50px",
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
            >
              Nothing here
            </div>
          )}
        </ProductContainer>
      </ItemsWrapper>
      <Footer></Footer>
    </Container>
  );
};

export default CategoryProductList;
