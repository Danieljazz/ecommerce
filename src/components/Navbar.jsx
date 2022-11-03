import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const NavbarWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(94, 201, 139, 1) 0%,
    rgba(254, 201, 139, 1) 30%,
    rgba(241, 11, 100, 1) 100%
  );
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  position: relative;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  font-size: 24px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const SearchBar = styled.div`
  border: 1px solid #000;
  margin: 0px 5px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  background: transparent;
`;

const Language = styled.span`
  font-size: 20px;
  color: #fff;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 32px;
`;

const MenuItem = styled.button`
  border: none;
  background: transparent;
  font-size: 20px;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Left>
        <Language>EN</Language>
        <SearchBar>
          <Input></Input>
          <SearchIcon />
        </SearchBar>
      </Left>
      <Center>
        <Logo>Neobonk.</Logo>
      </Center>
      <Right>
        <MenuItem>SignIn</MenuItem>
        <MenuItem>Register</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </MenuItem>
      </Right>
    </NavbarWrapper>
  );
};

export default Navbar;
