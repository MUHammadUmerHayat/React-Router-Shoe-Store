import { Outlet } from "react-router-dom";
const Product = () => {
    return (
        <div className="producst-conatainer">
            <h3>Products page</h3>
            <Outlet />
        </div>
    )
}

export default Product;
