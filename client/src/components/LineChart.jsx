import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart if it exists
      if (myChart) {
        myChart.destroy();
      }

      const generateRandomData = () => {
        return Array.from({ length: 35 }, () => Math.floor(Math.random() * 100));
      };

      myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: 35 }, (_, index) => index + 1),
          datasets: [
            {
              label: 'Dataset 1',
              data: generateRandomData(),
              borderColor: 'rgb(75, 192, 192, 1)',
              borderWidth: 1.5,
              stepped: true,
              pointRadius: 0, // Adjust the size of the circles
              pointHoverRadius: 6, // Adjust the size of the circles on hover
            },
            {
              label: 'Dataset 2',
              data: generateRandomData(),
              borderColor: 'rgb(255, 99, 132, 1)',
              borderWidth: 1.5,
              stepped: true,
              pointRadius: 0, // Adjust the size of the circles
              pointHoverRadius: 6, // Adjust the size of the circles on hover
            },
          ],
        },
        options: {
          responsive: true,
          interaction: {
            intersect: false,
            axis: 'x',
          },
          plugins: {
            title: {
              display: true,
              text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
              color: 'rgba(255, 255, 255, 0.7)', // White with 70% opacity
            },
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 255, 255, 0.8)'
                }
            }
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false,
              },
              color: 'rgba(255, 255, 255, 0.8)', // White with 50% opacity
              ticks: {
                color: 'rgba(255, 255, 255, 0.8)', // White with 70% opacity
              },
            },
            y: {
              display: true,
              color: 'rgba(255, 255, 255, 0.8)', // White with 50% opacity
              ticks: {
                color: 'rgba(255, 255, 255, 0.8)', // White with 70% opacity
              },
            },
          },
          
        },
      });
    }

    // Cleanup on component unmount
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} width="400" height="200"/>;
};

export default LineChart;
