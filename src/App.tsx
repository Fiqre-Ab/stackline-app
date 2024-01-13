import React, { useEffect } from 'react';
import './App.css';
import data from "./stackline_frontend_assessment_data_2021.json";
import logo from "./stackline_logo.svg";

function App() {

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <img src={logo} className="logo" alt="stackline-Logo" />
      {
        data.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.subtitle}</p>
            {/* Render other details as needed */}
          </div>
        ))
      }
    </>
  );
}

export default App;
