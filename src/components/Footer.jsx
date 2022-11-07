import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  height: 40vh;
  background-color: #000;
  position: relative;
  color: #fff;
`;

const SectionTitle = styled.p`
  color: #f0faf0;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 60px;
  z-index: 2;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  height: 20vh;
  padding-top: 170px;
`;

const Socials = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 50px;
`;
const SocialsDesc = styled.p`
  font-size: 20px;
`;
const IconsConatainer = styled.div`
  padding-top: 10px;
`;
const UsefulLinks = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const UsefulLink = styled.div`
  width: 50%;
  font-size: 20px;
  cursor: pointer;
`;
const ContactContainer = styled.div`
  flex: 1;
  display: flex;
  felx-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const ContactInfo = styled.div`
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
`;
const ContainerTitle = styled.span`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  color: ${(props) => props.fontColor};
`;

const Footer = () => {
  return (
    <Container>
      <SectionTitle>[Footer]</SectionTitle>
      <InfoWrapper>
        <Socials>
          <SocialsDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
            accumsan tortor. Praesent lacinia felis ac vestibulum sagittis.
            Morbi sapien magna, tincidunt quis lectus in, scelerisque auctor
            felis.
          </SocialsDesc>
          <IconsConatainer>
            <FacebookIcon sx={{ fontSize: 60 }} />
            <InstagramIcon sx={{ fontSize: 60 }} />
            <TwitterIcon sx={{ fontSize: 60 }} />
            <PinterestIcon sx={{ fontSize: 60 }} />
          </IconsConatainer>
        </Socials>
        <UsefulLinks>
          <ContainerTitle fontColor="red">
            Are YOU lost? USeful Links
          </ContainerTitle>
          <UsefulLink>Home</UsefulLink>
          <UsefulLink>Cart</UsefulLink>
          <UsefulLink>Man Fashion</UsefulLink>
          <UsefulLink>Woman Fashion</UsefulLink>
          <UsefulLink>Accessories</UsefulLink>
          <UsefulLink>My Account</UsefulLink>
          <UsefulLink>Order Tracking</UsefulLink>
          <UsefulLink>Terms</UsefulLink>
        </UsefulLinks>
        <ContactContainer>
          <ContainerTitle fontColor="#7474b5">Contact</ContainerTitle>
          <ContactInfo>
            <LocationOnIcon /> 9516 Ketch Harbour, NY 11207
          </ContactInfo>
          <ContactInfo>
            <PhoneIcon /> 703-346-14
          </ContactInfo>
          <ContactInfo>
            <EmailIcon /> newbonk.@contact.com
          </ContactInfo>
        </ContactContainer>
      </InfoWrapper>
    </Container>
  );
};

export default Footer;
