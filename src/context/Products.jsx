import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isProductsLoaded, setIsProductsLoaded] = useState(false);
  
  useEffect(() => {
    if (isProductsLoaded) {
      localStorage.setItem("products", JSON.stringify(products));
    }
    // console.log("cart =>", addtoCart)
  }, [products]);

  useEffect(() => {
    const productsFromStorage = localStorage.getItem("products");
    // console.log("productsFromStorage=>", productsFromStorage);
    if (productsFromStorage) {
      setProducts([...JSON.parse(productsFromStorage)]);
      setIsProductsLoaded(true);
    }
  }, []);

  useEffect(() => {
    const productsFromStorage = localStorage.getItem("products");
    // console.log("productsFromStorage=>", productsFromStorage);
    if (productsFromStorage) {
      setProducts([...JSON.parse(productsFromStorage)]);
      setIsProductsLoaded(true);
    }
  }, []);


  return (
    <ProductsContext.Provider
      value={{
        isProductsLoaded,
        setIsProductsLoaded,
        products,
        setProducts,       
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;