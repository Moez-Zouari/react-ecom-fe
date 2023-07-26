import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProductItemsCard from './ProductItemsCard';

const ProductsCard = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getproducts()
    }, [])

    const getproducts = () => {
        axios.get("http://localhost:5000/api/articles")
            .then(res => setProducts(res.data))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <ProductItemsCard products={products} />
        </div>
    )
}

export default ProductsCard
