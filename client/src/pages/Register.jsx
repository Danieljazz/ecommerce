import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../responsive";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
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
  color: white;
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
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const Agreement = styled.span`
  color: #fff;
  font-size: 20px;
  ${mobile({ fontSize: "16px", width: "270px" })}
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

const Register = () => {
  const [mail, setMail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const submitButton = () => {
    const createUser = () => {
      axios
        .post("http://localhost:5000/api/auth/register", {
          mail,
          username,
          password,
        })
        .then((value) => {
          console.log({
            data: { status: value.status, statusText: value.statusText },
          });
          navigate("/registersuccess");
        })
        .catch((err) => console.log(err));
    };
    console.log("hi");
    createUser();
  };

  return (
    <Container>
      <VideoBg
        autoPlay
        muted
        loop
        src="https://assets.mixkit.co/videos/preview/mixkit-friends-laughing-on-a-bus-42583-large.mp4"
      ></VideoBg>
      <Link to="/">
        <Title>[REGISTER]</Title>
      </Link>
      <Wrapper>
        <FormWrapper>
          <Form>
            <Input type="text" placeholder="Name" onChange={() => {}}></Input>
            <Input
              type="text"
              placeholder="Surname"
              onChange={() => {}}
            ></Input>
            <Input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
            <Input
              type="mail"
              placeholder="Mail"
              onChange={(e) => setMail(e.target.value)}
            ></Input>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </Form>
          <Agreement>
            By creating an account I consent to processing of my personal data
            in accordance with the PRIVACY POLICY
          </Agreement>
          <SubmitButton
            onClick={submitButton}
            disabled={!username || !mail || !password}
          >
            Create <AddIcon fontSize="40px" />
          </SubmitButton>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Register;
