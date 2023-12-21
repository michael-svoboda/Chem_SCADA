import React from 'react';
import { Box } from '@mui/material';
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart if it exists
      const existingChart = Chart.getChart(ctx);
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Label 1', 'Label 2', 'Label 3'],
          datasets: [
            {
              data: [30, 30, 40],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              borderColor: 'black', // Set borderColor to an empty string
              borderWidth: 1.5
            },
          ],
        },
        options: {
          cutout: '50%', // Adjust the cutout percentage to make it smaller
          
          plugins: {
            tooltip: {
            enabled: false,
            bodyFont: {
            size: 5, // Set the font size of the tooltip body
        },
            },
            legend: {
            display: false,
          },
        },
        },
      });
    }
  }, []);

  return (
    <Box sx={{ height: '40px', width: '40px' }}>
      <canvas ref={chartRef} />
    </Box>
  );
};

export default DoughnutChart;
