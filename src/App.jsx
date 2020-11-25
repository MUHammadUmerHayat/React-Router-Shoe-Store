import Home from "./Home"
import { Route, Routes } from "react-router-dom";
import { Footer, Header, Product, ProductDetails, ProductIndex } from "./components";

export const App = () => {
    return(
        <div className="main-container">
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Product />}>
                <Route path="/" element={<ProductIndex/>} />
                <Route path=":productID" element={<ProductDetails/>} />
            </Route>
        </Routes>
        <Footer/>
        </div>
    )
}