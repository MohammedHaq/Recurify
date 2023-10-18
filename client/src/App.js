import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

export default function Dashboard() {

  useEffect(() => {
    fetch('http://localhost:3001/getData')
      .then(response => response.json())
      .then(clients => setClient(clients))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  let clientList = [];
  let productList = [];


  const [clients, setClient] = useState(clientList);  // Initialize with an empty array or actual data
  const [products, setProduct] = useState(productList); // Initialize with an empty array or actual data

  return (
    <div className="dashboard">
      <div className="clients-section">
        <h1 className='app-title'>Welcome, Mohammed</h1>
        <h2>Clients</h2>
          <ul>
            {clients.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
      </div>
      <div className="products-section">
        <h2>Products</h2>
      </div>
    </div>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));

