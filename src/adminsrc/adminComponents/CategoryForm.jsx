import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../utils/userfirebase";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    categoryTitle: "",
    createdBy: "",
    stock: "",
    tagId: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        // console.log(" Form Data =>",formData)
        try {
          const docRef = await addDoc(collection(db, "category"), (formData));

          console.log("Document written with ID: ", docRef.id);
          e.target.reset();
        } catch (e) {
          console.error("Error adding document: ", e);
        }



    // Handle form submission logic
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
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
            placeholder="######"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>
      <div className="w-full flex flex-row p-2 gap-3 ">
        <div className="w-full mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Type description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
