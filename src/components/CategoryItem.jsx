import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;

const Description = styled.p`
  z-index: 2;
  color: #f0faf0;
  font-size: 60px;
`;

const Button = styled.button`
  z-index: 2;
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
      <Image src={item.imgSrc}></Image>
      <Info>
        <Description>{item.desc}</Description>
        <Button>Click for more</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
