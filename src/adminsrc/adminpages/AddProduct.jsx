import React, { useState } from "react";
import Button from "../adminComponents/Button";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../utils/userfirebase";

export default function ProductCreate() {
  const [productData, setProductData] = useState({
    productTitle: "",
    createdBy: "",
    price: "",
    discount: "",
    sku: "",
    category: "",
    stock: "",
    description: "",
    productImages: [],
  });

  const [files, setFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length + files.length > 5) {
      setError("You can upload a maximum of 5 images.");
      return;
    }
    const updatedFiles = [...files, ...selectedFiles];
    setFiles(updatedFiles);

    const imageUrls = updatedFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(imageUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    handleCreateProduct();
  };

  const handleCreateProduct = async () => {
    setIsSubmitting(true);
    try {

      const productRef = doc(db, "products", productData.category.toLowerCase());
      const productTitleRef = doc(productRef, productData.title.toLowerCase());

      const productSnap = await getDoc(productTitleRef);

      if (productSnap.exists()) {
        setError("Product name already exists, please choose another one.");
        setIsSubmitting(false);
        return;
      }

      let imageUrls = [];
      if (files.length > 0) {
        for (const file of files) {
          const storageRef = ref(storage, `products/${file.name}`);
          const snapshot = await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          imageUrls.push(downloadURL);
        }
      }

      const newproductData = {
        ...productData,
        productImages: imageUrls,
      };

      await setDoc(productRef, newproductData);
      console.log("Product created successfully:", newproductData.productTitle);
      window.location.reload();

      setError("");
      setFiles([]);
      setImagePreviews([]);
      setProductData({
        productTitle: "",
        createdBy: "",
        price: "",
        discount: "",
        sku: "",
        category: "",
        stock: "",
        description: "",
        productImages: [],
      });
    } catch (e) {
      setError("An error occurred while creating the product.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFiles([]);
    setImagePreviews([]);
    setError("");
    setProductData({
      productTitle: "",
      createdBy: "",
      price: "",
      discount: "",
      sku: "",
      category: "",
      stock: "",
      description: "",
      productImages: [],
    });
  };

  const handleShowProduct = () => {
    // Logic to show products can be implemented here
    console.log("Showing products...");
  };

  const handleCancel = () => {
    handleReset();
  };

  return (
    <div className="w-full min-h-screen bg-gray-600">
      <div className="w-11/12 bg-gray-300 mx-auto">
        <div className="w-full">
          <h1 className="text-3xl text-center py-6">Create Product</h1>
        </div>
        <div className="w-full flex flex-row gap-4">
          <div className="left w-3/12 flex flex-col gap-2 bg-gray-100 p-4">
            <div className="w-full flex flex-col gap-3">
              <div className="first w-full">
                {imagePreviews.length > 0 ? (
                  <img
                    src={imagePreviews[0]}
                    alt="Product Preview"
                    className="w-full min-h-36 border-2 rounded-lg object-cover"
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/150"
                    className="w-full min-h-36 border-2 rounded-lg"
                    alt="Category Preview"
                    onClick={() => document.getElementById('fileInput').click()}
                  />
                )}
              </div>

              <div className="second w-full flex flex-col py-4">
                <h3 className="text-xl">{productData.productTitle || "Product Name"}</h3>
                <div className="w-full parent flex flex-row justify-between items-start">
                  <div className="w-1/3 child flex flex-col justify-start gap-1">
                    <p className="text-gray-600 text-sm">Created By :</p>
                    <p className="font-semibold">{productData.createdBy || "Seller"}</p>
                  </div>
                  <div className="w-1/3 child flex flex-col justify-start gap-1">
                    <p className="text-gray-600 text-sm">Stock :</p>
                    <p className="font-semibold">{productData.stock || "N/A"}</p>
                  </div>
                  <div className="w-1/3 child flex flex-col justify-start gap-1">
                    <p className="text-gray-600 text-sm">ID :</p>
                    <p className="font-semibold">{productData.sku || "N/A"}</p>
                  </div>
                </div>
              </div>

              <div className="third w-full flex flex-row justify-between items-center gap-4 border-t-2 pt-4">
                <Button
                  text={"Show Product"}
                  className="w-1/2 font-semibold"
                  onClick={handleShowProduct}
                />
                <Button
                  text={"Cancel"}
                  className="w-1/2 font-semibold"
                  onClick={handleCancel}
                />
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>

          <div className="form w-9/12 flex flex-col gap-4">
            <form
              onSubmit={handleSubmit}
              className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg"
            >
              <div className="dropyourimage min-h-36">
                <input
                  type="file"
                  id="fileInput"
                  name="productImages"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div
                  className="w-full min-h-36 bg-gray-200 flex items-center justify-center border-dashed border-2 border-gray-400 cursor-pointer"
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  {imagePreviews.length > 0 ? (
                    <div className="w-full flex flex-row justify-between items-center gap-4 p-2">
                      {imagePreviews.map((imageUrl, index) => (
                        <div key={index} className="w-1/5 h-36 p-2 flex justify-center items-center">
                          <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                              src={imageUrl}
                              alt={`Selected ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center">Click to choose up to 5 images</p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-row p-2 gap-3">
                <div className="w-1/2 mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Product Title:
                  </label>
                  <input
                    type="text"
                    name="productTitle"
                    value={productData.productTitle}
                    onChange={handleChange}
                    placeholder="Enter Product Title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>

                <div className="w-1/2 mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Created By:
                  </label>
                  <select
                    name="createdBy"
                    value={productData.createdBy}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  >
                    <option value="">Select Creator</option>
                    <option value="Admin">Admin</option>
                    <option value="Seller 1">Seller 1</option>
                    <option value="Seller 2">Seller 2</option>
                  </select>
                </div>
              </div>

              <div className="w-full flex flex-row p-2 gap-3">
                <div className="w-1/2 mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Price:
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                    placeholder="Enter Price"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>

                <div className="w-1/2 mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Discount:
                  </label>
                  <input
                    type="number"
                    name="discount"
                    value={productData.discount}
                    onChange={handleChange}
                    placeholder="Enter Discount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="w-full flex flex-row p-2 gap-3">
                <div className="w-1/2 mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    SKU:
                  </label>
                  <input
                    type="text"
                    name="sku"
                    value={productData.sku}
                    onChange={handleChange}
                    placeholder="Enter SKU"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>

                <div className="w-1/2 mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Category:
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={productData.category}
                    onChange={handleChange}
                    placeholder="Enter Category"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="w-full mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Stock:
                </label>
                <input
                  type="number"
                  name="stock"
                  value={productData.stock}
                  onChange={handleChange}
                  placeholder="Enter Stock Quantity"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="w-full mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description:
                </label>
                <textarea
                  name="description"
                  value={productData.description}
                  onChange={handleChange}
                  placeholder="Enter Description"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="w-full flex flex-row justify-center">
                <Button
                  text={isSubmitting ? "Creating..." : "Create Product"}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
