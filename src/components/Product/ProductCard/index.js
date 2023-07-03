import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {BsBasket3Fill} from "react-icons/bs";
import {AiTwotoneHeart} from "react-icons/ai";


const ProductCard = ({el}) => {
    const dispatch = useDispatch()
    const [button, setButton] = useState(false)
    const {basket} = useSelector(state => state)
    const {favorites} = useSelector(state => state)
    const heart = favorites.some(some => some.id === el.id)

    const btnBas = () => {
        setButton(!button)
    }

    const addBasket = () => {
        let baskets = [...basket, {...el, count: 1}]
        localStorage.setItem('basket', JSON.stringify(baskets))
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }

     const favBtn = () => {
         let favorite = [...favorites,{...el,count:1}]
         localStorage.setItem('favorites',JSON.stringify(favorite))
         dispatch({type: "ADD_TO_FAVORITE",payload:el})

     }


    return (
        <div
            className="max-w-sm bg-white border border-b-black rounded-lg shadow dark:bg-gray-800 dark:border-b-black ">
            <a href="#">
                <img className="rounded-t-lg" src={el.images} alt=""/>
            </a>
            <div className="p-5 bg-black">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
                <p className="mb-3 font-medium text-gray-700 dark:text-gray-400"> Price : {el.price}</p>

                {
                    button ?
                               <Link to={"/basket"}>
                                   <button
                                       className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
                                       <BsBasket3Fill/>
                                   </button>
                               </Link> :

                         <button onClick={() => {
                            addBasket()
                            btnBas()
                        }
                        }
                                  className=" focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                            Add basket
                        </button>

                }

                <button onClick={favBtn}

                    className=" ml-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-8">
                    <AiTwotoneHeart className={ heart ? "text-red-600" : "text-white"}/>
                </button>

            </div>
        </div>

    );
};

export default ProductCard;