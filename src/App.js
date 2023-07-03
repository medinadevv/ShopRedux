import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Home from "./components/Home";
import Favorite from "./components/Favorite";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={ <Home/> }/>
                <Route path={"product"} element={ <Product/> }/>
                <Route path={"/basket"} element={ <Basket/> }/>
                <Route path={"/favorite"} element={ <Favorite/> }/>
            </Routes>
        </div>
    );
}

export default App;
