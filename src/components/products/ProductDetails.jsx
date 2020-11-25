import { useParams } from "react-router-dom";
const ProductDetails = () => {
    const {productID} = useParams();
    return(
        <div>
            <p>This is product {productID}</p>
        </div>
    )
}

export default ProductDetails