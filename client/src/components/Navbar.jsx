import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
  position: relative;
  height: 5vh;

  display: flex;
  ${mobile({
    height: "150px",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "space-evenly",
    flexDirection: "row-reverse",
  })}
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
  justify-content: space-around;
  width: 100%;
  /* ${mobile({ justifyContent: "space-around" })}; */
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
  ${mobile({ width: "90px" })};
`;

const Language = styled.span`
  font-size: 20px;
  color: #fff;
  ${mobile({ display: "none" })}
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 40px;
  text-decoration: none;
  ${mobile({ display: "flex", alignItems: "center" })}
`;

const MenuItem = styled.div`
  border: none;
  background: transparent;
  font-size: 20px;
  ${mobile({ justifyContent: "flex-start", fontSize: "14px" })};
`;

const Navbar = () => {
  const qunatity = useSelector((state) => state.cart.quantity);

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
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <Logo>Neobonk.</Logo>
        </Link>
      </Center>
      <Right>
        <MenuItem>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/login"}
          >
            LogIn
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/register"}
          >
            Register
          </Link>
        </MenuItem>
        <MenuItem>
          <Link style={{ textDecoration: "none", color: "black" }} to={"/cart"}>
            <Badge badgeContent={qunatity} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </MenuItem>
      </Right>
    </NavbarWrapper>
  );
};

export default Navbar;
