import React, { useState } from 'react'
import ReactDom from 'react-dom'
import './App.css';

const Clients = [
  // grab client info from database
];

const Products = [
  // grab product info from database
];

function Dashboard() {
  const [clients, addClient] = useState(Clients);
  const [products, addProduct] = useState(Products);

  return (
    <div className="dashboard">
      <div className="clients-section">
        <h1>Welcome, USER</h1>
        <h2>Clients</h2>
      </div>

      <div className="products-section">
        <h2>Products</h2>
      </div>
    </div>
  );
};

export default Dashboard;
