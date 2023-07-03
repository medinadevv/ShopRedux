import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
    const {favorites} = useSelector(state => state)

    return (
        <div className=" py-5">
            <div className="flex my-10 flex-wrap justify-center pl-15 gap-6">
                {
                     favorites.map((el)=> <ProductCard el={el}/>)
                }
            </div>
        </div>
    );
};

export default Favorite;