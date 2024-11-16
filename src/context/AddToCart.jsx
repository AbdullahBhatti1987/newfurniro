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








// import { createContext, useEffect, useState } from "react";
// import { collection, query, where, getDocs, setDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
// import { auth, db } from "../utils/userfirebase";


// export const AddtoCartContext = createContext();

// function AddToCartContextProvider({ children }) {
//   const [addtoCart, setAddtoCart] = useState([]);
//   const [isLoaded, setIsLoaded] = useState(false);



//   useEffect(() => {
//     if (isLoaded) {
//       localStorage.setItem("addtoCart", JSON.stringify(addtoCart));
//     }
//     console.log("cart =>", addtoCart);
//   }, [addtoCart]);

//   useEffect(() => {
//     const itemsFromStorage = localStorage.getItem("addtoCart");
//     if (itemsFromStorage) {
//       setAddtoCart([...JSON.parse(itemsFromStorage)]);
//       setIsLoaded(true);
//     }
//   }, []);

//   const handleaddCart = async (cartData) => {
//     setIsLoaded(true);
//     const cartRef = collection(db, "addtocart");
//     const titleQuery = query(cartRef, where("productTitle", "==", cartData.productTitle));
//     const querySnapshot = await getDocs(titleQuery);

//     if (!querySnapshot.empty) {
//       alert(`A product with the title "${cartData.productTitle}" already exists in the cart.`);
//       setIsLoaded(false);
//       return;
//     }

//     try {
//       const productRef = doc(db, "products", cartData.productId);
//       const productSnapshot = await getDoc(productRef);

//       if (productSnapshot.exists()) {
//         const productData = productSnapshot.data();
//         const cartItem = { ...productData, quantity: 1 };

//         // Add item to Firebase using product ID as the document ID
//         await setDoc(doc(cartRef, cartData.productId), cartItem);
//         setAddtoCart([...addtoCart, { ...cartItem, id: cartData.productId }]);
//         console.log("Product successfully added to cart.");
//       } else {
//         console.error("Product not found in 'products' collection.");
//       }
//     } catch (error) {
//       console.error("Error adding product to cart:", error);
//     } finally {
//       setIsLoaded(false);
//     }
//   };

//   const addItemToCart = async (item) => {
//     const itemIndex = addtoCart.findIndex((data) => data.id === item.id);
//     const updatedCart = [...addtoCart];

//     if (itemIndex === -1) {
//       const cartItem = { ...item, quantity: 1 };
//       await setDoc(doc(collection(db, "addtocart"), item.id), cartItem);
//       setAddtoCart([...addtoCart, { ...cartItem, id: item.id }]);
//     } else {
//       updatedCart[itemIndex].quantity++;
//       await updateDoc(doc(db, "addtocart", item.id), { quantity: updatedCart[itemIndex].quantity });
//       setAddtoCart(updatedCart);
//     }
//   };

//   const lessQuantityFromCart = async (id) => {
//     const itemIndex = addtoCart.findIndex((data) => data.id === id);
//     const updatedCart = [...addtoCart];

//     if (updatedCart[itemIndex].quantity > 1) {
//       updatedCart[itemIndex].quantity--;
//       await updateDoc(doc(db, "addtocart", id), { quantity: updatedCart[itemIndex].quantity });
//     } else {
//       await deleteDoc(doc(db, "addtocart", id));
//       updatedCart.splice(itemIndex, 1);
//     }
//     setAddtoCart(updatedCart);
//   };

//   const removeItemFromCart = async (id) => {
//     try {
//       await deleteDoc(doc(db, "addtocart", id));
//       setAddtoCart(addtoCart.filter((item) => item.id !== id));
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//     }
//   };

//   const isItemAdded = (id) => {
//     const itemIndex = addtoCart.findIndex((data) => data.id === id);
//     return itemIndex === -1 ? null : addtoCart[itemIndex];
//   };

//   return (
//     <AddtoCartContext.Provider
//       value={{
//         isLoaded,
//         setIsLoaded,
//         addtoCart,
//         setAddtoCart,
//         addItemToCart,
//         lessQuantityFromCart,
//         removeItemFromCart,
//         isItemAdded,
//         handleaddCart, 
//       }}
//     >
//       {children}
//     </AddtoCartContext.Provider>
//   );
// }

// export default AddToCartContextProvider;
