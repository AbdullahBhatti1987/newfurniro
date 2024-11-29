import React, { useState } from "react";
import Button from "../adminComponents/Button";
import { query, where, getDocs, addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../utils/userfirebase";
import { categories } from "../../utils/myArrays";

export default function ProductCreate() {
  const [productData, setProductData] = useState({
    productTitle: "",
    brand: "",
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
    tags: "",
    colors: [],
    sizes: [],
  });

  const furnitureCategories = categories;
  
  
  // [
  //   "Living Room", "Bedroom", "Dining Room", "Office", "Outdoor", 
  //   "Storage", "Kids Furniture", "Home Decor", "Lighting"
  // ];

  const [files, setFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length + files.length > 5) return;
    const updatedFiles = [...files, ...selectedFiles];
    setFiles(updatedFiles);
    const imageUrls = updatedFiles.map((file) => URL.createObjectURL(file));
    setImagePreviews(imageUrls);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Product creation logic here
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto bg-white p-8 rounded-md shadow-md">
        {/* Image Upload and Product Summary */}
        <div className="flex gap-8">
          {/* Product Image */}
          <div className="w-1/3">
            <img src={imagePreviews[0] || "/placeholder.png"} alt="Product" className="w-full h-72 object-cover rounded-md" />
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold">Men Black Slim Fit T-shirt</h2>
              <p className="text-gray-500">Fashion</p>
              <div className="text-xl">
                <span className="line-through text-gray-400">$100</span>
                <span className="text-orange-500 ml-2">$80</span>
                <span className="text-green-600 text-sm ml-1">(30% Off)</span>
              </div>
              <div className="mt-4">
                <span className="text-gray-600">Size: </span>
                <span className="font-semibold">S, M, XL, XXL</span>
              </div>
              <div className="mt-2">
                <span className="text-gray-600">Colors: </span>
                <span className="inline-block w-4 h-4 rounded-full bg-black"></span>
                <span className="inline-block w-4 h-4 rounded-full bg-gray-500"></span>
                <span className="inline-block w-4 h-4 rounded-full bg-orange-500"></span>
                <span className="inline-block w-4 h-4 rounded-full bg-pink-500"></span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-2/3">
            <form onSubmit={handleCreateProduct}>
              {/* Image Upload */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Add Product Photo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                  <p className="text-gray-400">Drop your images here, or <span className="text-orange-500 cursor-pointer">click to browse</span></p>
                  <input type="file" multiple onChange={handleFileChange} className="hidden" />
                </div>
              </div>

              {/* Product Information */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Product Name</label>
                  <input type="text" name="productTitle" value={productData.productTitle} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Items Name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Product Categories</label>
                  <select name="category" value={productData.category} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2">
                    <option value="">Choose a category</option>
                    {furnitureCategories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
                  </select>
                </div>
              </div>

              {/* Brand and Weight */}
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Brand</label>
                  <input type="text" name="brand" value={productData.brand} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Brand Name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Weight</label>
                  <input type="text" name="weight" value={productData.weight} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="In gm & kg" />
                </div>
              </div>

              {/* Size and Color */}
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Size</label>
                  <div className="flex gap-2">
                    {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size) => (
                      <button key={size} type="button" className="border px-4 py-2 rounded-md">{size}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Colors</label>
                  <div className="flex gap-2">
                    {["#000", "#666", "#FFA500", "#FF69B4", "#ADD8E6"].map((color, idx) => (
                      <div key={idx} className="w-8 h-8 rounded-full" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4">
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea name="description" value={productData.description} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" rows="4" placeholder="Short description about the product"></textarea>
              </div>

              {/* Pricing Details */}
              <div className="grid grid-cols-3 gap-6 mt-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Price</label>
                  <input type="number" name="price" value={productData.price} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Price" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Discount</label>
                  <input type="number" name="discount" value={productData.discount} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Discount" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Tax</label>
                  <input type="number" name="tax" value={productData.tax} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2" placeholder="Tax" />
                </div>
              </div>

              {/* Submit & Cancel Buttons */}
              <div className="mt-8 flex justify-between">
                <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-md">Create Product</button>
                <button type="button" className="bg-gray-300 px-6 py-2 rounded-md">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
