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
    <div style={{
      padding: "20px",
      backgroundColor: "#F0F0F0",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center"  // Center align the text
    }}>
      <h1 style={{
        color: "#008080",
        fontSize: "2.5em",
        marginBottom: "20px",
        fontWeight: "bold",  // Make the text bold
        lineHeight: "1.2"  // Adjust the line height
      }}>
        Total Products: {products.length}
      </h1>
      <h2 style={{
        color: "#00CED1",
        fontSize: "1.8em",
        marginBottom: "15px",
        fontStyle: "italic"  // Make the text italic
      }}>
        Average Product Price: ${averagePrice.toFixed(2)}
      </h2>
      <h2 style={{
        color: "#00CED1",
        fontSize: "1.8em",
        marginBottom: "15px",
        textDecoration: "underline"  // Underline the text
      }}>
        Total Price of Listed Products: ${totalPrice.toFixed(2)}
      </h2>
      <div className="grid-container" style={{
        marginTop: "30px",  // Add top margin to the grid
        border: "2px solid #ccc",  // Add a border to the grid
        borderRadius: "10px"  // Add rounded corners to the grid
      }}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
  

  
}

export default Products;
