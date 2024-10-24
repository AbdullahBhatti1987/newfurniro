import React, { useState } from "react";
import Button from "../adminComponents/Button";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../utils/userfirebase";

export default function CategoryCreate() {
  const [formData, setFormData] = useState({
    categoryTitle: "",
    createdBy: "",
    stock: "",
    tagId: "",
    description: "",
    categoryImage: "",
  });

  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State for button disabling

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const imageUrl = URL.createObjectURL(selectedFile);
    setImagePreview(imageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
    setError("");
  };

  const handleCreateCategory = async () => {
    setIsSubmitting(true); // Disable the button
    try {
      const categoryRef = doc(db, "categories", formData.categoryTitle.toLowerCase());
      const categorySnap = await getDoc(categoryRef);

      if (categorySnap.exists()) {
        setError("Category name already exists, please choose another one.");
        setIsSubmitting(false); // Enable the button again
        return;
      }

      let imageUrl = "";
      if (file) {
        const storageRef = ref(storage, `categories/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const newFormData = {
        ...formData,
        categoryImage: imageUrl,
      };

      await setDoc(categoryRef, newFormData);
      console.log("Category created successfully:", newFormData.categoryTitle); // Success message
      window.location.reload(); // Refresh the page

      setError("");
      setSubmittedData(newFormData);
      setFormData({
        categoryTitle: "",
        createdBy: "",
        stock: "",
        tagId: "",
        description: "",
        categoryImage: "",
      });
      setFile(null);
      setImagePreview("");
    } catch (e) {
      setError("An error occurred while creating the category.");
    } finally {
      setIsSubmitting(false); // Enable the button again
    }
  };

  const handleReset = () => {
    setFormData({
      categoryTitle: "",
      createdBy: "",
      stock: "",
      tagId: "",
      description: "",
      categoryImage: "",
    });
    setFile(null);
    setImagePreview("");
    setError("");
    setSubmittedData(null);
  };

  return (
    <div className="w-full min-h-screen bg-gray-600">
      <div className="w-11/12 bg-gray-300 mx-auto">
        <div className="w-full">
          <h1 className="text-3xl text-center py-6">Create Category</h1>
        </div>
        <div className="w-full flex flex-row gap-4">
          <div className="left w-3/12 flex flex-col gap-2 bg-gray-100 p-4">
            <div className="w-full flex flex-col gap-3">
              <div className="first w-full">
                <img
                  src={imagePreview || "https://via.placeholder.com/150"}
                  className="w-full min-h-36 border-2 rounded-lg"
                  alt="Category Preview"
                  onClick={() => document.getElementById('fileInput').click()}
                />
              </div>
              <div className="second w-full flex flex-col py-4">
                <h3 className="text-xl">{submittedData?.categoryTitle || "Category Name"}</h3>
                <div className="w-full parent flex flex-row justify-between items-start">
                  <div className="w-1/3 child flex flex-col justify-start gap-1">
                    <p className="text-gray-600 text-sm">Created By :</p>
                    <p className="font-semibold">{submittedData?.createdBy || "Seller"}</p>
                  </div>
                  <div className="w-1/3 child flex flex-col justify-start gap-1">
                    <p className="text-gray-600 text-sm">Stock :</p>
                    <p className="font-semibold">{submittedData?.stock || "N/A"}</p>
                  </div>
                  <div className="w-1/3 child flex flex-col justify-start gap-1">
                    <p className="text-gray-600 text-sm">ID :</p>
                    <p className="font-semibold">{submittedData?.tagId || "N/A"}</p>
                  </div>
                </div>
              </div>
              <div className="third w-full flex flex-row justify-between items-center gap-4 border-t-2 pt-4">
                <Button
                  text={"Create Category"}
                  className="w-1/2"
                  onClick={handleCreateCategory}
                  disabled={isSubmitting} // Disable when submitting
                />
                <Button
                  text={"Reset Category"}
                  className="w-1/2 bg-orange-400 text-white"
                  onClick={handleReset}
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
                  name="categoryImage"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div
                  className="w-full min-h-36 bg-gray-200 flex items-center justify-center border-dashed border-2 border-gray-400 cursor-pointer"
                  onClick={() => document.getElementById('fileInput').click()}
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Selected"
                      className="w-full max-h-48 object-contain"
                    />
                  ) : (
                    <p>Click to choose an image</p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-row p-2 gap-3 ">
                <div className="w-1/2 mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Category Title:
                  </label>
                  <input
                    type="text"
                    name="categoryTitle"
                    value={formData.categoryTitle}
                    onChange={handleChange}
                    placeholder="Enter Title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>

                <div className="w-1/2 mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Created By:
                  </label>
                  <select
                    name="createdBy"
                    value={formData.createdBy}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  >
                    <option value="">Select Creator</option>
                    <option value="Admin">Admin</option>
                    <option value="Other">Other</option>
                    <option value="Seller">Seller</option>
                  </select>
                </div>
              </div>

              <div className="w-full flex flex-row p-2 gap-3 ">
                <div className="w-1/2 mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Stock:
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>

                <div className="w-1/2 mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tag ID:
                  </label>
                  <input
                    type="text"
                    name="tagId"
                    value={formData.tagId}
                    onChange={handleChange}
                    placeholder="Tag ID"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="w-full mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description:
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter Description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="w-full flex items-center justify-center">
                <Button
                  text={"Create Category"}
                  type="submit"
                  className="bg-blue-500 text-white"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
