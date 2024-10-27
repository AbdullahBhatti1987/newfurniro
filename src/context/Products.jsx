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

  // function addItemToCart(item) {
  //   const arr = addtoCart;
  //   const itemIndex = addtoCart.findIndex((data) => data.id == item.id);
  //   if (itemIndex == -1) {
  //     arr.push({ ...item, quantity: 1 });
  //   } else {
  //     arr[itemIndex].quantity++;
  //   }
  //   setAddtoCart([...arr]);
  // }

  // function lessQuanityFromCart(id) {
  //   const arr = addtoCart;
  //   const itemIndex = addtoCart.findIndex((data) => data.id == id);
  //   arr[itemIndex].quantity--;
  //   setAddtoCart([...arr]);
  // }

  // function removeItemFromCart(id) {
  //   const arr = addtoCart;
  //   const itemIndex = addtoCart.findIndex((data) => data.id == id);
  //   arr.splice(itemIndex, 1);
  //   setAddtoCart([...arr]);
  // }

  // function isItemAdded(id) {
  //   const arr = addtoCart;
  //   const itemIndex = addtoCart.findIndex((data) => data.id == id);
  //   if (itemIndex == -1) {
  //     return null;
  //   } else {
  //     return arr[itemIndex];
  //   }
  // }

  return (
    <ProductsContext.Provider
      value={{
        isProductsLoaded,
        setIsProductsLoaded,
        products,
        setProducts,
        // setAddtoCart,
        // addItemToCart,
        // lessQuanityFromCart,
        // removeItemFromCart,
        // isItemAdded,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;