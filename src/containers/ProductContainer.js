import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductComponent from '../components/ProductComponent';
import "../styles/Products.scss"

const ProductContainer = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://60682ee30add49001733fc44.mockapi.io/products")
        .then((res) => setProducts(res.data))
    }, []);

    

    const showProducts = () =>{
        return products.map((product) => {
            return <ProductComponent key={product.id} product={product}></ProductComponent>
        })
    }

    return <div className="productComponent">
        <button onClick={() =>console.log("")}>
            Add New Product
        </button>
        <section className="productGrid">
            {showProducts()}
        </section>
    </div>
}



export default ProductContainer;