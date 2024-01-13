import React, { useEffect } from 'react';
import './App.css';
import data from "./stackline_frontend_assessment_data_2021.json";
import logo from "./stackline_logo.svg";

function App() {
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
          {/**/ }
          <div key={data[0].id}>
            <img src={data[0].image} className="product-image" alt={data[0].title} />
            <h2 className="product-title">{data[0].title}</h2>
            <p className="product-subtitle">{data[0].subtitle}</p>
            {/*  */}
          </div>
        </div>
        <div className="chart-container">
          {/* The chart related component should be rendered here */}
        </div>
      </div>
    </div>
  );
}

export default App;
