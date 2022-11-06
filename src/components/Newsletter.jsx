import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #247066;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.p`
  z-index: 2;
  color: #f0faf0;
  font-size: 60px;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: italic;
`;
const Info = styled.p`
  font-size: 32px;
`;
const MailContainer = styled.div`
  padding-top: 50px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const MailInput = styled.input`
  width: 500px;
  height: 40px;
  border: 2px solid #000;
  font-size: 28px;
`;
const SubmitButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>[Newsletter]</Title>
      <Info>Sign up to get information about new drop!</Info>
      <MailContainer>
        <MailInput placeholder="Type your mail here"></MailInput>
        <SubmitButton>
          Submit <SendIcon />
        </SubmitButton>
      </MailContainer>
    </Container>
  );
};

export default Newsletter;
