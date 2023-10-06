import React, { useState } from 'react'
import ReactDom from 'react-dom'
import './App.css';

const mockClients = [
  { id: 1, name: 'John Doe', lastRenewal: '2023-09-20' },
  { id: 2, name: 'Jane Smith', lastRenewal: '2023-09-25' },
  // ... more clients
];

const mockProducts = [
  { id: 1, name: 'Product A', subscriberCount: 100 },
  { id: 2, name: 'Product B', subscriberCount: 75 },
  // ... more products
];

function Dashboard() {
  const [clients] = useState(mockClients);
  const [products] = useState(mockProducts);

  return (
    <div className="dashboard">
      <div className="clients-section">
        <h2>Clients</h2>
        <ul>
          {clients.map(client => (
            <li key={client.id}>
              {client.name} (Last Renewal: {client.lastRenewal})
            </li>
          ))}
        </ul>
      </div>

      <div className="products-section">
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} (Subscribers: {product.subscriberCount})
            </li>
          ))}
        </ul>
      </div>

      {/* Other sections like Renewal Dates can be added here */}

    </div>
  );
};

export default Dashboard;
