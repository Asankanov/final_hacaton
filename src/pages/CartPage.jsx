import { Container } from "@mui/material";
import React from "react";
import CartTable from "../components/CartTable";

const CartPage = () => {
  return (
    <div>
      <Container>
        <h2 style={{ color: "white" }}>Cart page</h2>
        <CartTable />
      </Container>
    </div>
  );
};

export default CartPage;
