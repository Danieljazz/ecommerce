import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: teal;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Announcement = () => {
  return <Container>Winter Sale!</Container>;
};

export default Announcement;
