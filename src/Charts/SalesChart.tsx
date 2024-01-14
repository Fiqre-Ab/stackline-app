import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement);

// data structure
interface SalesData {
  sales: {
    weekEnding: string;
    value: number;
  }[];
}

const SalesChart: React.FC = () => {
  const [chartData, setChartData] = useState<SalesData>({ sales: [] });

  useEffect(() => {
    fetch("/stackline_frontend_assessment_data_2021.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          // response structure
          setChartData({ sales: data });
        } else {
          throw new Error('Invalid JSON format');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  const data: ChartData<'bar', number[], string> = {
    labels: chartData.sales.map(d => d.weekEnding),
    datasets: [
      {
        label: '',
        data: chartData.sales.map(d => d.value),
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
