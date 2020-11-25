import { Link } from "react-router-dom";
import { ProductData } from "./ProductData";

const ProductIndex = () => {
  console.log(ProductData);
  return (
    <div className="jsutify-content-center ">
        <div className="text-center ">
      <h2 className={`pt-2 mt-2`}>PRODUCTS</h2>
      <p className={`pt-0 mt-0`}>Grab the latest collection of <strong>| Show Case |</strong> Now</p>

        </div>
      <div className="d-flex flex-wrap justify-content-center">
      {ProductData.map(({ id, name, image, details }) => (
        <div key={id} className="p-2">
          <div className={`card`} style={{width: "18rem"}}>
            <img class={`card-img-top`} src={image} alt={name} />
            <div className={`card-body`}>
              <h5 className={`card-title`}>{name}</h5>
              <p className={`card-text`}>{details}</p>
              <Link to={id} className={`btn btn-primary`}>
                Get It Now
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductIndex;
