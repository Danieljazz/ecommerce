import React from "react";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import { mobile } from "../responsive";
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
  ${mobile({ fontSize: "32px" })}
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: -1;
  transform: scale(1.5);
  ${mobile({ transform: "scale(1)" })}
`;

const Input = styled.input`
  font-size: 40px;
  background: rgba(0, 0, 0, 0.5);
  margin: 12px 12px;
  font-style: italic;
  ${mobile({ fontSize: "20px" })}
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
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

const Link = styled.a`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  ${mobile({ fontSize: "16px" })}
`;

const SubmitButton = styled.button`
  width: 80%;
  margin-top: 20px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${mobile({ fontSize: "20px" })}
`;
const Login = () => {
  return (
    <Container>
      <VideoBg
        autoPlay
        muted
        loop
        src="https://assets.mixkit.co/videos/preview/mixkit-female-models-in-a-convertible-car-43192-large.mp4"
      ></VideoBg>
      <Title>[LogIN]</Title>
      <Wrapper>
        <FormWrapper>
          <Form>
            <Input type="mail" placeholder="Mail"></Input>
            <Input type="password" placeholder="Password"></Input>
          </Form>
          <Link>Password lost?</Link>
          <Link>Create Account</Link>
          <SubmitButton>
            LogIn <LoginIcon fontSize="large" />
          </SubmitButton>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Login;
