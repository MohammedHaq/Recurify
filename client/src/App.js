import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

export default function Dashboard() {

  let clientList = [];
  let productList = [];


  const [clients, setClient] = useState(clientList);  // Initialize with an empty array or actual data
  const [products, setProduct] = useState(productList); // Initialize with an empty array or actual data

  return (
    <div className="dashboard">
      <div className="clients-section">
        <h1>Welcome, Mohammed</h1>
        <h2>Clients</h2>
      </div>

      <div className="products-section">
        <h2>Products</h2>
      </div>
    </div>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));

