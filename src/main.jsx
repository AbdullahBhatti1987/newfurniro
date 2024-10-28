import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./context/UserContext.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
// import SearchContextProvider from "./context/SearchContext.jsx";
import AddtoCartContextProvider from "./context/AddToCart.jsx";
import { NextUIProvider } from "@nextui-org/react";
import ProductsContextProvider from "./context/Products.jsx";
import CheckOutContextProvider from "./context/CheckOutContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <ProductsContextProvider>
        <AuthContextProvider>
          <UserContextProvider>
            <AddtoCartContextProvider>
              <CheckOutContextProvider>
                {/* <SearchContextProvider> */}
                <App />
              </CheckOutContextProvider>
            </AddtoCartContextProvider>
            {/* </SearchContextProvider> */}
          </UserContextProvider>
        </AuthContextProvider>
      </ProductsContextProvider>
    </NextUIProvider>
  </StrictMode>
);
