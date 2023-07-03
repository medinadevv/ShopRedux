import React from 'react';
import BasketTable from "./BasketTable";
import {useSelector} from "react-redux";

const Basket = () => {
    const {basket} = useSelector(state => state)

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-4/5 my-5 mx-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product name

                    </th>
                    <th scope="col" className="px-6 py-3">
                       img
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        count
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                  basket.map((el)=> (
                      <BasketTable el={el}/>
                  ))
                }
                </tbody>
            </table>
        </div>

    );
};

export default Basket;