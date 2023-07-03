

import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from "./ProductCard";

const Product = () => {
    const [product, setProduct] = useState([])
    const getProduct = () => {
        axios(`https://api.escuelajs.co/api/v1/products`)
            .then((res) => {
                setProduct(res.data.slice(0,30))
            })
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div className=" py-5  ">
            <div className="flex my-10 flex-wrap justify-center pl-15 gap-6">
                {
                    product.map((el) => (
                        <ProductCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;