import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import axios from 'axios';

const ProductApp = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getproducts()
    }, [])

    const getproducts = () => {
        axios.get("http://localhost:5000/api/articles")
            .then(res => setProducts(res.data))
            .catch(error => console.log(error))
    }

    // const addProduct = (newProduct) => {
    //     setProducts([...products, newProduct]);
    // };
    const deleteProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    };
    // const updateProduct = (updatedProduct) => {
    //     setProducts(
    //         products.map((product) =>
    //             product.id === updatedProduct.id ? updatedProduct : product
    //         )
    //     );
    // }
    return (
        <div>
            <ProductList
                products={products}
                deleteProduct={deleteProduct}

            />

        </div>
    )
}

export default ProductApp
