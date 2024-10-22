
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const response = await axios.get('/api/products'); // Adjust the API endpoint as needed
    //         setProducts(response.data);
    //     };
    //     fetchProducts();
    // }, []);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            {/* Add functionality for adding and editing products */}
        </div>
    );
};

export default Products;
