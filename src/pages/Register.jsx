import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
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

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: -1;
  transform: scale(1.5);
`;

const Input = styled.input`
  font-size: 40px;
  background: rgba(0, 0, 0, 0.5);
  margin: 12px 12px;
  font-style: italic;
`;

const FormWrapper = styled.div`
  width: 40%;
  height: 50%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

const Agreement = styled.span`
  color: #fff;
  font-size: 20px;
`;

const SubmitButton = styled.button`
  width: 80%;
  margin-top: 20px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Register = () => {
  return (
    <Container>
      <VideoBg
        autoPlay
        muted
        loop
        src="https://assets.mixkit.co/videos/preview/mixkit-friends-laughing-on-a-bus-42583-large.mp4"
      ></VideoBg>
      <Title>[REGISTER]</Title>
      <Wrapper>
        <FormWrapper>
          <Form>
            <Input type="text" placeholder="Name"></Input>
            <Input type="text" placeholder="Surname"></Input>
            <Input type="mail" placeholder="Mail"></Input>
            <Input type="password" placeholder="Password"></Input>
          </Form>
          <Agreement>
            By creating an account I consent to processing of my personal data
            in accordance with the PRIVACY POLICY
          </Agreement>
          <SubmitButton>
            Create <AddIcon fontSize="large" />
          </SubmitButton>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Register;
