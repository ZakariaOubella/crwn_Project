import React from "react";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

import { UserProvider } from "./Context/user.context";
import { ProductsProvider } from "./Context/product.context";
import { CartProvider } from "./Context/Cart.context";

import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
