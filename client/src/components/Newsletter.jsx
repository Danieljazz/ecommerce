import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #447670;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    height: "40vh",
  })}
`;
const Title = styled.p`
  z-index: 2;
  color: #f0faf0;
  font-size: 60px;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: italic;
  ${mobile({
    fontSize: "32px",
  })}
`;
const Info = styled.p`
  font-size: 32px;
  ${mobile({
    fontSize: "20px",
    width: "90%",
  })}
`;
const MailContainer = styled.div`
  padding-top: 50px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${mobile({
    fontSize: "20px",
    width: "90%",
    justifyContent: "space-between",
  })}
`;
const MailInput = styled.input`
  width: 500px;
  height: 40px;
  border: 2px solid #000;
  font-size: 28px;
  ${mobile({
    fontSize: "16px",
    width: "200px",
  })}
`;
const SubmitButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    fontSize: "16px",
    width: "90px",
  })}
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>[Newsletter]</Title>
      <Info>Sign up to get information about new drop!</Info>
      <MailContainer>
        <MailInput placeholder="Type your mail here"></MailInput>
        <SubmitButton>
          Submit <SendIcon fontSize="50px" />
        </SubmitButton>
      </MailContainer>
    </Container>
  );
};

export default Newsletter;
