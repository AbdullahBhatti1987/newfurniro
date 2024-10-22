import { createContext, useEffect, useState } from "react";

export const checkOutContext = createContext();

function CheckOutContextProvider({ children }) {
  const [checkOut, setCheckOut] = useState([]);

  useEffect(() => {
    const itemsFromStorage = localStorage.getItem("checkOut");
    if (itemsFromStorage) {
      setCheckOut([...JSON.parse(itemsFromStorage)]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("checkOut", JSON.stringify(checkOut));
    console.log("CheckOut =>", checkOut);
  }, [checkOut]);

  function addItemToCheckOut(item) {
    const itemIndex = checkOut.findIndex((data) => data.id === item.id);
    if (itemIndex === -1) {
      setCheckOut([...checkOut, { ...item, quantity: 1 }]);
    } else {
      const updatedCheckOut = [...checkOut];
      updatedCheckOut[itemIndex].quantity++;
      setCheckOut(updatedCheckOut);
    }
  }

  function lessQuanityFromCheckOut(id) {
    const updatedCheckOut = checkOut.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0);
    setCheckOut(updatedCheckOut);
  }

  function removeItemFromCheckOut(id) {
    const updatedCheckOut = checkOut.filter(item => item.id !== id);
    setCheckOut(updatedCheckOut);
  }

  function isItemAddedInCheckOut(id) {
    return checkOut.find((data) => data.id === id) || null;
  }

  return (
    <checkOutContext.Provider
      value={{
        checkOut,
        setCheckOut,
        addItemToCheckOut,
        lessQuanityFromCheckOut,
        removeItemFromCheckOut,
        isItemAddedInCheckOut,
      }}
    >
      {children}
    </checkOutContext.Provider>
  );
}

export default CheckOutContextProvider;
