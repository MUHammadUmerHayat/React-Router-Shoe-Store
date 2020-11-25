import { Link  } from "react-router-dom";
import { ProductData } from './ProductData'

const ProductIndex = () =>{
    console.log(ProductData)
    return(
        <div>
            <h2>Products Index</h2>
            {
            ProductData.map(({id, name, image}) =>
                <li>
                    <Link key={id} to={id}>{name}<br/> <img src={image} alt={name}/> </Link>
                </li>
                )
            }
        </div>
    )
}

export default ProductIndex