import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import FilterOptions from "../components/FilterOptions";
import OurProducts from "../components/OurProducts";
import Banner from "../components/Banner";
import PageTop from "../components/PageTop";
import NextPaggination from "../components/Pagination";
import { ProductsContext } from "../context/Products";
import { AddtoCartContext } from "../context/AddToCart";
import React, { useRef } from 'react';

function Shop() {
  const [searchInput, setSearchInput] = useState("");
  const [choosenCategory, setChoosenCategory] = useState("All");

  const {
    addtoCart,
    setAddtoCart,
    addItemToCart,
    lessQuanityFromCart,
    removeItemFromCart,
    isItemAdded,
  } = useContext(AddtoCartContext);
  const { products } = useContext(ProductsContext);
  const { id } = useParams(); // id will now be populated if route is /shop/:id

  const [viewstyle, setViewStyle] = useState("Card");
  const HandleStyleView = () => {
    setViewStyle(viewstyle === "Card" ? "ListViewProduct" : "Card");
    console.log(viewstyle);
  };

  const HandleCategory = (e) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === "All") {
      setChoosenCategory(products);
    } else {
      const filteredCategory = products.filter(
        (data) => data.category === selectedCategory
      );
      console.log("Selected Category:", selectedCategory);
      console.log("Filtered Products:", filteredCategory);
      setChoosenCategory(filteredCategory);
    }
  };


  const SearchProduct = (e) => {
    e.preventDefault();
    
    const searchTerm = e.target[0].value.toLowerCase();
    console.log("Search Input:", searchTerm);
  
    if (searchTerm.trim()) {
      const findProduct = products.filter((data) =>
        data.productTitle.toLowerCase().includes(searchTerm)
      );
      setChoosenCategory(findProduct);
      console.log("Filtered Products:", findProduct);
    } else {
      setChoosenCategory(products); 
    }
  
    form.current.reset(); 
  };
  
  const form = useRef(null); 
  

  return (
    <div className="">
      <PageTop heading={"Shop"} linkName={"Shop"} to={"/shop"} />
      <FilterOptions
        viewClick={HandleStyleView}
        categoryArray={products}
        HandleCategory={HandleCategory}
       form={form}
        onSubmit={SearchProduct}
      />
      <OurProducts
        toViewProduct={id}
        viewText={viewstyle}
        rendingArray={choosenCategory === "All" ? products : choosenCategory}
      />
      <NextPaggination />
      <Banner />
    </div>
  );
}

export default Shop;
