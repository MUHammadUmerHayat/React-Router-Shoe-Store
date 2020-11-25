import { Link  } from "react-router-dom";
const ProductIndex = () =>{
    return(
        <div>
            <h2>Products Index</h2>
            <Link to={"shoe104"}>Product01</Link><br/>
            <Link to={"shoe105"}>Product02</Link><br/>
            <Link to={"shoe106"}>Product03</Link>
        </div>
    )
}

export default ProductIndex