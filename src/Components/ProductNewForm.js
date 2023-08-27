import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ProductNewForm() {
  let navigate = useNavigate();

  const addProduct = (newProduct) => {
    axios
      .post(`${API}/products`, newProduct)
      .then(
        () => {
          navigate(`/products`);
        },
        (error) => console.error(error)
      )
      .catch((error) => {
        console.warn("Error adding product:", error);
      });
  };

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image_url: "",
    stock_quantity: 0,
  });

  const handleTextChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(product);
  };

  return (
    <div className="New form-group row text-box">
      <form onSubmit={handleSubmit}>
        {/* Form fields go here */}
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Product Name</label>
          <div className="col-sm-10">
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              value={product.name} 
              placeholder="Enter Product Name" 
              onChange={handleTextChange}
              required />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="description"
              placeholder="Enter Description"
              onChange={handleTextChange} 
              value={product.description}
              required />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-10">
            <input 
              type="number" 
              className="form-control" 
              id="price" 
              placeholder="Enter Price" 
              onChange={handleTextChange} 
              value={product.price}
              step="0.01"
              required />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="image_url" className="col-sm-2 col-form-label">Image URL</label>
          <div className="col-sm-10">
            <input 
              type="text" 
              className="form-control" 
              id="image_url" 
              placeholder="http://" 
              onChange={handleTextChange} 
              value={product.image_url}
              required />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="stock_quantity" className="col-sm-2 col-form-label">Stock Quantity</label>
          <div className="col-sm-10">
            <input 
              type="number" 
              className="form-control" 
              id="stock_quantity" 
              placeholder="Enter Stock Quantity" 
              onChange={handleTextChange} 
              value={product.stock_quantity}
              required />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductNewForm;
