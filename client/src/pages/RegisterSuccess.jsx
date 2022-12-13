import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 100vh;
`;

const SuccessTitle = styled.div`
  color: white;
  font-size: 30px;
  text-align: center;
  height: 250px;
  display: grid;
  align-items: center;
`;

const RegisterSuccess = () => {
  return (
    <Container>
      <Navbar />
      <SuccessTitle>
        You have been registered successfully. Now you can login on the navbar
        using credentials
      </SuccessTitle>
    </Container>
  );
};
export default RegisterSuccess;
