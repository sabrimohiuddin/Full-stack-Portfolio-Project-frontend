import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Reviews from "./Reviews";  // Assuming you have a Reviews component
const API = process.env.REACT_APP_API_URL;

function ProductDetails() {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct();
    }
  };

  useEffect(() => {
    axios.get(`${API}/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id, navigate, API]);

  const deleteProduct = () => {
    axios
      .delete(`${API}/products/${id}`)
      .then(() => {
        navigate(`/products`);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <>
      <h3 className="card-title">{product.name}</h3>
      <h6>
        Price: ${product.price}
      </h6>
      <p>Description: {product.description}</p>
      <article style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          className="product-image" 
          src={product.image_url} 
          alt={`${product.name} Image`} 
          style={{ width: '25%', height: 'auto' }} 
        />
      </article>
      <div className="showNavigation">
        <div>
          <Link to={`/products`}>
            <button className="btn btn-success navbar-button">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/products/${id}/edit`}>
            <button className="btn btn-warning navbar-button">Edit</button>
          </Link>
        </div>
        <div>
          <button className="btn btn-danger navbar-button" onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <Reviews />  {/* Assuming you have a Reviews component */}
    </>
  );

}

export default ProductDetails;
