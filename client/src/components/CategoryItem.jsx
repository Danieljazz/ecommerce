import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 0.8;
  transition: all 1.2s ease;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  ${mobile({
    flexDirection: "column",
    height: "300px",
    width: "300px",
    margin: "10px 0px 10px 0px",
  })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Description = styled.p`
  z-index: 2;
  color: #f0faf0;
  font-size: 60px;
  ${mobile({ fontSize: "16px" })}
`;

const Button = styled.button`
  z-index: 2;
  cursor: pointer;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.desc}`} style={{ display: "contents" }}>
        <Image src={item.imgSrc}></Image>

        <Info>
          <Description>{item.desc}</Description>
          <Button>Click for more</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
