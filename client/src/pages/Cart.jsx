import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { removeProduct } from "../redux/cartRedux";
const Container = styled.div`
  position: relative;
  background-color: #97a396;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  ${mobile({ flexDirection: "column", alignItems: "center" })};
  min-height: 57vh;
`;
const PageTitle = styled.div`
  position: relative;
  top: 0;
  left: 0;
  font-size: 60px;
  color: #fff;
  ${mobile({ fontSize: "32px" })};
`;
const Button = styled.button`
  margin-left: 30px;
  margin-top: 30px;
  font-size: 20px;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "14px" })};
`;
const ProductsContainer = styled.div`
  flex: 2;
  margin: 20px 30px;
  margin-bottom: 100px;
  ${mobile({ marginBottom: "0px" })}
`;
const ProductContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  padding-top: 80px;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "content",
  })}
`;
const ProductImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;
  ${mobile({ borderRadius: "50%", width: "125px", height: "125px" })}
`;
const ProductSummary = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 120px;
  ${mobile({ paddingLeft: "0", marginBottom: "20px" })}
`;
const ProductProp = styled.span`
  font-size: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  margin-left: 20px;
`;
const ProductPrice = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Price = styled.span`
  font-size: 40px;
  ${mobile({ marginTop: "20px", fontSize: "20px" })}
`;
const Qunatity = styled.div`
  font-size: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  ${mobile({ fontSize: "14px" })}
`;
const SummaryContainer = styled.div`
  flex: 1;
  height: 500px;
  border: 3px dashed #fff;
  position: relative;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ${mobile({ border: "none", fontSize: "20px" })}
`;
const SummaryTitle = styled.span`
  color: #fff;
  font-size: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
`;
const SummaryItem = styled.span`
  font-size: 20px;
  padding-top: 10px;
`;
const CheckoutButton = styled.button`
  width: 100%;
  font-size: 40px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 0;
  ${mobile({ fontSize: "20px" })};
`;
const Error = styled.span`
  font-size: 20px;
  margin-top: 20px;
  color: red;
`;

const Cart = () => {
  const KEY = process.env.REACT_APP_STRIPEPK;
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [reducedCart, setReducedCart] = useState([{}]);
  const [stripeToken, setStripeToken] = useState(null);
  useEffect(() => {
    let reducedList = [{}];
    const reduceProducts = () => {
      cart.products.forEach((product) => {
        const { _id, chosenColor, chosenSize, productQuantity } = product;
        const newObject = { _id, chosenColor, chosenSize };
        let reducedIndex = reducedList.indexOf(
          reducedList.find(
            (product) =>
              product._id === _id &&
              product.chosenColor === chosenColor &&
              product.chosenSize === chosenSize,
          ),
        );
        reducedIndex >= 0
          ? (reducedList[reducedIndex].productQuantity += 1)
          : reducedList.push({ ...product });
      });
    };
    reduceProducts();
    setReducedCart(reducedList);
  }, [cart]);

  const onToken = (token) => {
    setStripeToken(token);
  };

  const removeCartProduct = (price, _id) => {
    dispatch(removeProduct({ price, _id }));
  };

  useEffect(() => {
    const makePaymentReq = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: (cart.total + 10) * 100,
          },
        );
        navigate("/success", {
          state: {
            stripeData: res.data,
            cart: cart,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && cart.total >= 1 && makePaymentReq();
  }, [stripeToken, cart.total, navigate]);

  return (
    <Container>
      <Navbar></Navbar>
      <PageTitle>[Cart]</PageTitle>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button>
          <ArrowBackIosNewIcon fontSize="20px" />
          Back to shopping
        </Button>
      </Link>
      <Wrapper>
        <ProductsContainer>
          {cart.products.length === 0 ? (
            <div
              style={{
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              C'mon add smth
            </div>
          ) : (
            reducedCart.slice(1, reducedCart.length).map((product) => (
              <ProductContainer>
                <ProductImage src={product.img}></ProductImage>
                <ProductSummary>
                  <ProductProp>Product: {product.title}</ProductProp>
                  <ProductProp>Id: {product._id}</ProductProp>
                  <ProductProp>Size: {product.chosenSize}</ProductProp>
                  <ProductProp>
                    Color: <Color bg={product.chosenColor}></Color>
                  </ProductProp>
                </ProductSummary>
                <ProductPrice>
                  <Qunatity>
                    <RemoveIcon
                      fontSize="20px"
                      onClick={() =>
                        removeCartProduct(product.price, product._id)
                      }
                      style={{ zIndex: "3", cursor: "pointer" }}
                    />
                    {product.productQuantity}
                    {/* <AddIcon
                      onClick={() => (product.productQuantity += 1)}
                      fontSize="20px"
                      style={{ zIndex: "3", cursor: "pointer" }}
                    /> */}
                  </Qunatity>
                  <Price>{product.price * product.productQuantity}$</Price>
                </ProductPrice>
              </ProductContainer>
            ))
          )}
        </ProductsContainer>
        <SummaryContainer>
          <SummaryTitle>SUMMARY</SummaryTitle>
          <SummaryItem>Subtotal {cart.total}$</SummaryItem>
          <SummaryItem>Shipping 10$</SummaryItem>
          <SummaryTitle>Total {cart.total + 10}$</SummaryTitle>
          <StripeCheckout
            name="Neobonk"
            shippingAddress
            billingAddress
            amount={(cart.total + 10) * 100}
            description={`Your total is ${cart.total + 10}$`}
            token={onToken}
            stripeKey={KEY}
          >
            <CheckoutButton disabled={!user}>CHECKOUT</CheckoutButton>
            {!user && <Error>Login or register to make the order</Error>}
          </StripeCheckout>
        </SummaryContainer>
      </Wrapper>
      <Footer></Footer>
    </Container>
  );
};
export default Cart;
