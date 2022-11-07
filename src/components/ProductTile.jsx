import React from "react";
import styled from "styled-components";

const Description = styled.p`
  opacity: 1;
  z-index: 1;
  position: absolute;
  font-size: 32px;
  font-style: italic;
  color: rgba(254, 254, 254, 1);
  cursor: pointer;
  background-color: rgba(27, 80, 147, 0.5);
  padding: 5px 5px;
  &::after {
    position: absolute;
    content: "";
    background-color: #fff;
    width: 0;
    height: 2px;
    bottom: 5px;
    left: 0;
    transition: all 1s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 500px;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 0.5;
  transition: all 1.2s ease;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 90%;
  height: 80%;
  object-fit: cover;
`;

const ProductTile = ({ item }) => {
  return (
    <Container>
      <Image src={item.imgSrc}></Image>
      <Description>{item.desc}</Description>
    </Container>
  );
};

export default ProductTile;
