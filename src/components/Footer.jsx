import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40vh;
  background-color: #000;
  position: relative;
`;

const SectionTitle = styled.p`
  color: #f0faf0;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 60px;
  z-index: 2;
`;

const Footer = () => {
  return (
    <Container>
      <SectionTitle>[Footer]</SectionTitle>
    </Container>
  );
};

export default Footer;
