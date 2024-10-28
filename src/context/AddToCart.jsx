import { createContext, useEffect, useState } from "react";

export const AddtoCartContext = createContext();

function AddToCartContextProvider({ children }) {
  const [addtoCart, setAddtoCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("addtoCart", JSON.stringify(addtoCart));
    }
    console.log("cart =>", addtoCart);
  }, [addtoCart]);

  useEffect(() => {
    const itemsFromStorage = localStorage.getItem("addtoCart");
    // console.log("itemsFromStorage=>", itemsFromStorage);
    if (itemsFromStorage) {
      setAddtoCart([...JSON.parse(itemsFromStorage)]);
      setIsLoaded(true);
    }
  }, []);

  const handleaddCart = async () => {
    setIsLoaded(true);
    const cartRef = collection(db, "addtocart");
    const titleQuery = query(
      cartRef,
      where("productTitle", "==", cartData.productTitle)
    );
    const querySnapshot = await getDocs(titleQuery);
    console.log("Title not match with old Carts.");

    if (!querySnapshot.empty) {
      // If there is a document with the same title, show an error message
      alert(
        `A product with the title "${cartData.productTitle}" already exists. Please choose a different title.`
      );
      setIsSubmitting(false);
      return;
    }
      // Step 2: If title is unique, proceed with saving
      const productRef = await addDoc(
        collection(db, "products"),
        newProductData
      );
      console.log("Product created successfully:", productRef.id);

  
  
  };

  function addItemToCart(item) {
    const arr = addtoCart;
    const itemIndex = addtoCart.findIndex((data) => data.id == item.id);
    if (itemIndex == -1) {
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemIndex].quantity++;
    }
    setAddtoCart([...arr]);
  }

  function lessQuanityFromCart(id) {
    const arr = addtoCart;
    const itemIndex = addtoCart.findIndex((data) => data.id == id);
    arr[itemIndex].quantity--;
    setAddtoCart([...arr]);
  }

  function removeItemFromCart(id) {
    const arr = addtoCart;
    const itemIndex = addtoCart.findIndex((data) => data.id == id);
    arr.splice(itemIndex, 1);
    setAddtoCart([...arr]);
  }

  function isItemAdded(id) {
    const arr = addtoCart;
    const itemIndex = addtoCart.findIndex((data) => data.id == id);
    if (itemIndex == -1) {
      return null;
    } else {
      return arr[itemIndex];
    }
  }

  return (
    <AddtoCartContext.Provider
      value={{
        isLoaded,
        setIsLoaded,
        addtoCart,
        setAddtoCart,
        addItemToCart,
        lessQuanityFromCart,
        removeItemFromCart,
        isItemAdded,
      }}
    >
      {children}
    </AddtoCartContext.Provider>
  );
}

export default AddToCartContextProvider;
