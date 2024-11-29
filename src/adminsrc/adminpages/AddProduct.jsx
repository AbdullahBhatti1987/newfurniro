import React, { useState } from "react";
import Button from "../adminComponents/Button";
import { query, where, getDocs, addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../utils/userfirebase";
import { categories, description, returnPolicy, shippingInfo } from "../../utils/myArrays";

export default function ProductCreate() {
  const [productData, setProductData] = useState({
    productTitle: "",
    createdBy: "",
    price: "",
    discount: "",
    sku: "",
    category: "",
    subcategory: "",
    stock: "",
    description: "",
    productImages: [],
    weight: "",
    dimensions: "",
    brand: "",
    tags: "",
    returnPolicy: "",
    metaTitle: "",
    metaDescription: "",
    shippingInfo: "",
  });

  const [files, setFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length + files.length > 5) {
      console.log("You can upload a maximum of 5 images.");
      return;
    }

    const resizedImages = await Promise.all(
      selectedFiles.map((file) => resizeImage(file))
    );

    const updatedFiles = [...files, ...resizedImages];
    setFiles(updatedFiles);

    const imageUrls = updatedFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(imageUrls);
  };

  const resizeImage = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxWidth = 800;
        const maxHeight = 800;

        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          } else {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          const resizedFile = new File([blob], file.name, { type: file.type });
          resolve(resizedFile);
        }, file.type);
      };
    });
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!productData.category || !productData.productTitle) {
        console.error("Category or Title is missing.");
        alert("Category and Title are required.");
        setIsSubmitting(false);
        return;
      }

      // Step 1: Check if the product title already exists
      const productsRef = collection(db, "products");
      const titleQuery = query(
        productsRef,
        where("productTitle", "==", productData.productTitle)
      );
      const querySnapshot = await getDocs(titleQuery);
      console.log("Title not match with old products.");

      if (!querySnapshot.empty) {
        // If there is a document with the same title, show an error message
        alert(
          `A product with the title "${productData.productTitle}" already exists. Please choose a different title.`
        );
        setIsSubmitting(false);
        return;
      }

      let imageUrls = [];

      if (files.length > 0) {
        for (const file of files) {
          const storageRef = ref(
            storage,
            `products/${productData.category.toLowerCase()}/${productData.productTitle.toLowerCase()}/${
              file.name
            }`
          );
          const snapshot = await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          imageUrls.push(downloadURL);
        }
        console.log("Images uploaded into firebase");
      }

      const newProductData = {
        ...productData,
        productImages: imageUrls,
      };

      // Step 2: If title is unique, proceed with saving
      const productRef = await addDoc(
        collection(db, "products"),
        newProductData
      );
      console.log("Product created successfully:", productRef.id);

      HandleReset();
    } catch (error) {
      console.error("Error during product creation:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const HandleReset = () => {
    setFiles([]);
    setImagePreviews([]);
    // handleFileChange([]);
    setProductData({
      productTitle: "",
      createdBy: "",
      price: "",
      discount: "",
      sku: "",
      category: "",
      subcategory: "",
      stock: "",
      description: "",
      productImages: [],
      weight: "",
      dimensions: "",
      brand: "",
      tags: "",
      returnPolicy: "",
      metaTitle: "",
      metaDescription: "",
      shippingInfo: "",
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-600">
      <div className="w-11/12 bg-gray-300 mx-auto">
        <div className="w-full">
          <h1 className="text-3xl text-center py-6">Create Product</h1>
        </div>
        <div className="form w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
          <form onSubmit={handleCreateProduct}>
            {/* Product Title */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Title:
              </label>
              <input
                type="text"
                name="productTitle"
                value={productData.productTitle}
                onChange={handleChange}
                placeholder="Enter Product Title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Created By */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Created By:
              </label>
              <select
                name="createdBy"
                value={productData.createdBy}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Creator</option>
                <option value="Admin">Admin</option>
                <option value="Seller 1">Seller 1</option>
                <option value="Seller 2">Seller 2</option>
              </select>
            </div>

            {/* Price */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price:
              </label>
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                placeholder="Enter Price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Discount */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Discount Amount:
              </label>
              <input
                type="number"
                name="discount"
                value={productData.discount}
                onChange={handleChange}
                placeholder="Enter Discount"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* SKU */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                SKU:
              </label>
              <input
                type="text"
                name="sku"
                value={productData.sku}
                onChange={handleChange}
                placeholder="Enter SKU"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category:
              </label>
              <select
                name="category"
                value={productData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Subcategory:
              </label>
              <input
                type="text"
                name="subcategory"
                value={productData.subcategory}
                onChange={handleChange}
                placeholder="Enter Subcategory"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Stock */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Stock Quantity:
              </label>
              <input
                type="number"
                name="stock"
                value={productData.stock}
                onChange={handleChange}
                placeholder="Enter Stock Quantity"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description:
              </label>
              <textarea
                name="description"
                // value={productData.description}
                value={description}
                onChange={handleChange}
                placeholder="Enter Product Description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="4"
              />
            </div>

            {/* Product Images */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Product Images:
              </label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="w-full border border-gray-300 rounded-md"
              />
              <div className="mt-2">
                {imagePreviews.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Preview ${index}`}
                    className="w-32 h-32 object-cover mr-2 mb-2"
                  />
                ))}
              </div>
            </div>

            {/* Weight */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Weight:
              </label>
              <input
                type="text"
                name="weight"
                value={productData.weight}
                onChange={handleChange}
                placeholder="Enter Weight"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Dimensions */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Dimensions:
              </label>
              <input
                type="text"
                name="dimensions"
                value={productData.dimensions}
                onChange={handleChange}
                placeholder="Enter Dimensions"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Brand */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Brand:
              </label>
              <input
                type="text"
                name="brand"
                value={productData.brand}
                onChange={handleChange}
                placeholder="Enter Brand Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Tags */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tags:
              </label>
              <input
                type="text"
                name="tags"
                value={productData.tags}
                onChange={handleChange}
                placeholder="Enter Tags (comma separated)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Return Policy */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Return Policy:
              </label>
              <textarea
                name="returnPolicy"
                // value={productData.returnPolicy}
                value={returnPolicy}
                onChange={handleChange}
                placeholder="Enter Return Policy"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="4"
              />
            </div>

            {/* Meta Title */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Meta Title:
              </label>
              <input
                type="text"
                name="metaTitle"
                value={productData.metaTitle}
                onChange={handleChange}
                placeholder="Enter Meta Title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Meta Description */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Meta Description:
              </label>
              <textarea
                name="metaDescription"
                value={productData.metaDescription}
                onChange={handleChange}
                placeholder="Enter Meta Description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="4"
              />
            </div>

            {/* Shipping Information */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Shipping Information:
              </label>
              <textarea
                name="shippingInfo"
                // value={productData.shippingInfo}
                value={shippingInfo}
                onChange={handleChange}
                placeholder="Enter Shipping Information"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="4"
              />
            </div>

            <Button
              type="submit"
              text={isSubmitting ? "Submitting..." : "Create Product"}
              disabled={isSubmitting}
              className={`w-full ${
                isSubmitting ? "bg-gray-400"  : "bg-orange-300"
              }`}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
