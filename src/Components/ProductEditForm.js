import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ProductEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image_url: "",
    stock_quantity: 0
  });

  const updateProduct = (updatedProduct) => {
    axios
      .put(`${API}/products/${id}`, updatedProduct)
      .then(
        () => {
          navigate(`/products/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((error) => {
        console.warn("Error updating product:", error);
      });
  };

  const handleTextChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/products/${id}`).then(
      (response) => setProduct(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct(product);
  };

  return (
    <div className="text-box">
      <form onSubmit={handleSubmit}>
        {/* Form fields go here */}
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input 
            type="text" 
            value={product.name}
            className="form-control"
            id="name"
            onChange={handleTextChange}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={product.description}
            onChange={handleTextChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input 
            type="number"
            value={product.price}
            className="form-control"
            id="price"
            onChange={handleTextChange}
            step="0.01"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="image_url">Image URL</label>
          <input 
            type="text"
            value={product.image_url}
            className="form-control"
            id="image_url"
            onChange={handleTextChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock_quantity">Stock Quantity</label>
          <input 
            type="number"
            value={product.stock_quantity}
            className="form-control"
            id="stock_quantity"
            onChange={handleTextChange}
            required 
          />
        </div>

        <div className="button-container">
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to={`/products/${id}`}>
            <button className="btn btn-outline-secondary">Nevermind!</button>
          </Link>
        </div>
      </form>
    </div> 
  );
}

export default ProductEditForm;
