import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #000;
  width: 500px;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Description = styled.p`
  opacity: 1;
  z-index: 1;
  position: absolute;
  bottom: 0px;
  font-size: 28px;
  font-style: italic;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  opacity: 0.5;
  transition: all 1.2s ease;
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const ProductTile = ({ item }) => {
  return (
    <Container>
      <Image src={item.imgSrc}></Image>
      <Description>Description: {item.desc}</Description>
    </Container>
  );
};

export default ProductTile;
