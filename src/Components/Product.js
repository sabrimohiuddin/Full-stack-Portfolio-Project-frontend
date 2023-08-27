import { Link } from "react-router-dom";

function Product({ product }) {

  // console.log("Price:", product.price, "Type:", typeof product.price);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image_url} className="card-img-top" alt={`${product.name} Image`} />
      <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <h6>{product.category}</h6>
        <p className="card-text">Price: ${typeof product.price === 'string' ? parseFloat(product.price).toFixed(2) : 'N/A'}</p>
        <p className="card-text">Stock Quantity: {product.stock_quantity}</p>

        <div className="details-button">
          <Link className="btn btn-primary" to={`/products/${product.id}`}>View Details</Link>

          <p className="card-title">
              {product.stock_quantity > 0 ? (
                <span className="available-text">Available ✅</span>
                ) : (
                  <span className="not-available-text">Out of Stock ❌</span>
                  )}
          </p>

        </div>

      </div>
    </div>
  );
}

export default Product;
