import axios from 'axios';
import { useState, useEffect } from 'react';
import Product from './Product';  // Make sure to create a Product component

const API = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);
  const [averagePrice, setAveragePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);  // New state for total price

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => {
        setProducts(response.data);
        
        // Calculate the average price of all products
        const sum = response.data.reduce((accumulator, product) => {
          return accumulator + parseFloat(product.price);
        }, 0);
        
        const average = sum / response.data.length;
        setAveragePrice(average);

        // Calculate the total price of all products
        setTotalPrice(sum);  // Use the sum variable we already calculated
      })
      .catch((error) => console.warn('Error fetching products:', error));
  }, []);

  return (
    <div className="Products">
      <h1>Total Products: {products.length}</h1>
      <h2>Average Product Price: ${averagePrice.toFixed(2)}</h2>
      <h2>Total Price of Listed Products: ${totalPrice.toFixed(2)}</h2>  {/* Display the total price */}
      <div className="grid-container">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Products;
