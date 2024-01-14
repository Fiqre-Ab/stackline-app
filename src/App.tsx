import React, { useEffect, useState } from 'react';
import './App.css';
import data from "./data/stackline_frontend_assessment_data_2021.json";
import logo from "./assets/stackline_logo.svg";
import SalesChart from "./Charts/SalesChart";
import SortableTable from './components/SortableTable';
function App() {
  const [selectedProduct, setSelectedProduct] = useState(data[0]);
  
  // This function will be called when a category button is clicked
  const handleCategoryClick = (category) => {
    const product = data.find((product) => product.category === category);
    if (product) {
      setSelectedProduct(product);
    }
  };

  // This will run once on component mount
  useEffect(() => {
    console.log(data);
  }, []);
  
  return (
    <div className="app-container">
      <div className="logoContainer">
        <img src={logo} className="logo" alt="Stackline Logo" />
      </div>
      <div className="main-content">
        <div className="sidebar">
          <div key={selectedProduct.id}>
            <img src={selectedProduct.image} className="product-image" alt={selectedProduct.title} />
            <h2 className="product-title">{selectedProduct.title}</h2>
            <p className="product-subtitle">{selectedProduct.subtitle}</p>
            {/* Buttons to select categories */}
            <button onClick={() => handleCategoryClick('Pantry')}>Pantry</button>
            <button onClick={() => handleCategoryClick('Obsolete')}>Obsolete</button>
            <button onClick={() => handleCategoryClick('Blender')}>Blender</button>
            <button onClick={() => handleCategoryClick('Lightning Deal')}>Lightning Deal</button>
          </div>
        </div>
        <div className="chart-container">
          {/* The chart component e*/
            <SalesChart />
           
          }
          <SortableTable />
        </div>
      </div>
    </div>
  );
}

export default App;
