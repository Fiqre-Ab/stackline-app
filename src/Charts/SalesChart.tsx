import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement);

// Define a type for your data structure if it's complex
// For example, if your data has a specific shape, replace 'any' with the correct type
type ChartDataType = any[];

const SalesChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartDataType>([]);

useEffect(() => {
  // This assumes that 'stackline_frontend_assessment_data_2021.json' is in the 'public' directory
  fetch("/stackline_frontend_assessment_data_2021.json")
    .then(response => {
      if (!response.ok) {
        // If the response is not 2xx, throw an error
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse JSON data from the response
    })
    .then(data => {
      setChartData(data); // Set the data to state
    })
    .catch(error => {
      console.error('Fetch error:', error); // Log any errors
    });
}, []);
console.log(chartData);
  const data: ChartData<'bar', number[], string> = {
    labels: chartData.map(d => d.sales[0].weekEnding), // Assuming your data structure has a 'label' property
    
    datasets: [
      {
        label: '',
        data: chartData.map(d => d.value), // Assuming your data structure has a 'value' property
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderWidth: 1
      }
    ]
  };

  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 26
          }
        }
      }
    }
  };

  return (
    <div>
      <Bar 
        data={data}
        options={options}
        height={400}
      />
    </div>
  );
};

export default SalesChart;
