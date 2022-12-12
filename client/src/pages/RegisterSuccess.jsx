import React from "react";
import styled from "styled-components";

const SuccessTitle = styled.div`
  color: white;
  font-size: 30px;
  text-align: center;
  height: 250px;
  display: grid;
  align-items: center;
`;

const RegisterSuccess = () => {
  return <SuccessTitle>You have been registered successfully</SuccessTitle>;
};
export default RegisterSuccess;
