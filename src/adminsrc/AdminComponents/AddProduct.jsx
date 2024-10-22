// src/components/AddProduct.jsx
import React, { useState } from 'react';
// import axios from 'axios';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = async () => {
        // await axios.post('/api/products', { name, price });
        // Handle response
    };

    return (
        <div>
            <h2>Add Product</h2>
            <input type="text" placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default AddProduct;
