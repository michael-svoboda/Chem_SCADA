import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ property, times, range, stream, stream2, property2 }) => {
  const [counter, setCounter] = useState(0);
  const chartRef = useRef(null);
  const myChart = useRef(null);

  useEffect(() => {
    const updateChart = () => {
      if (chartRef.current && myChart.current) {
        const ctx = chartRef.current.getContext('2d');

        if (counter == 1) {

          myChart.current.data.datasets[0].data = property.slice(0, range * 60);
          myChart.current.data.datasets[1].data = property2.slice(0, range * 60);
          myChart.current.data.labels = times.slice(0, range * 60);
           setCounter(range*60)
        }

        else {
          if (myChart.current.data.labels.length > range * 60) {
            myChart.current.data.labels.shift();
            myChart.current.data.datasets[0].data.shift();
            myChart.current.data.datasets[1].data.shift();
          }
  
          myChart.current.data.labels.push(times[counter]);
          myChart.current.data.datasets[0].data.push(property[counter]);
          myChart.current.data.datasets[1].data.push(property2[counter]);
          console.log( myChart.current.data.datasets[1]);

        }

        if (!stream) {
          myChart.current.data.datasets[0].data = [];
        }
        if (!stream2) {
          myChart.current.data.datasets[1].data = [];
        }
        myChart.current.update();
      }
    };

    const interval = setInterval(() => {
      if (counter + 1 < times.length) {
        setCounter(counter + 1);
        updateChart();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    setCounter(0)
  },[property,property2,range])


  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart if it exists
      if (myChart.current) {
        myChart.current.destroy();
      }

      myChart.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [],
          datasets: [
            {
              label: 'stream:' + stream.toString(),
              data: [],
              borderColor: 'rgb(75, 192, 192, 1)',
              borderWidth: 1.5,
              stepped: true,
              pointRadius: 0,
              pointHoverRadius: 6,
            },
            {
              label: 'stream:' + stream2.toString(),
              data: [],
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
              text: ' Property VS Time Plot ',
              color: 'rgba(255, 255, 255, 0.7)',
            },
            legend: {
              display: true,
              labels: {
                color: 'rgb(255, 255, 255, 0.8)',
              },
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false,
              },
              color: 'rgba(255, 255, 255, 0.8)',
              ticks: {
                color: 'rgba(255, 255, 255, 0.8)',
              },
            },
            y: {
              display: true,
              color: 'rgba(255, 255, 255, 0.8)',
              ticks: {
                color: 'rgba(255, 255, 255, 0.8)',
              },
            },
          },
        },
      });
    }
  }, [chartRef, property, stream]);

  return <canvas ref={chartRef} width="400" height="200" />;
};

export default LineChart;





























// import React, { useEffect,useState, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const LineChart = ({ property, times, range }) => {
//   const [counter, setcounter] = useState(0);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     console.log(counter)
//     const interval = setInterval(() => {
      
//       if (counter+(range*3600)>=property.length-1){
//         setcounter(0)
//       } else{setcounter(counter+1)}

//     }, 1000 );

//     return () => clearInterval(interval)

//   },[counter]);

//   // function updatewindow(){
//   //     console.log (counter)
//   //     setwproperty(property.slice(counter,counter+60))
//   //     setwTimes(property.slice(counter,counter+60))
//   //     setcounter(counter+1)
      
//   // }


//   useEffect(() => {
//     console.log('wtf', range);
//     let myChart;

//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d');

//       // Destroy existing chart if it exists
//       if (myChart) {
//         myChart.destroy();
//       }

//       console.log(counter, counter+(range*3600));

//       myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//           labels: times.slice(counter, counter+(range*3600)),
//           datasets: [
//             {
//               label: 'Dataset 1',
//               data: property.slice(counter, counter+(range*3600)),
//               borderColor: 'rgb(75, 192, 192, 1)',
//               borderWidth: 1.5,
//               stepped: true,
//               pointRadius: 0, // Adjust the size of the circles
//               pointHoverRadius: 6, // Adjust the size of the circles on hover
//             },
//             // {
//             //   label: 'Dataset 2',
//             //   data: generateRandomData(),
//             //   borderColor: 'rgb(255, 99, 132, 1)',
//             //   borderWidth: 1.5,
//             //   stepped: true,
//             //   pointRadius: 0, // Adjust the size of the circles
//             //   pointHoverRadius: 6, // Adjust the size of the circles on hover
//             // },
//           ],
//         },
//         options: {
//           responsive: true,
//           interaction: {
//             intersect: false,
//             axis: 'x',
//           },
//           plugins: {
//             title: {
//               display: true,
//               text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
//               color: 'rgba(255, 255, 255, 0.7)', // White with 70% opacity
//             },
//             legend: {
//                 display: true,
//                 labels: {
//                     color: 'rgb(255, 255, 255, 0.8)'
//                 }
//             }
//           },
//           scales: {
//             x: {
//               display: true,
//               grid: {
//                 display: false,
//               },
//               color: 'rgba(255, 255, 255, 0.8)', // White with 50% opacity
//               ticks: {
//                 color: 'rgba(255, 255, 255, 0.8)', // White with 70% opacity
//               },
//             },
//             y: {
//               display: true,
//               color: 'rgba(255, 255, 255, 0.8)', // White with 50% opacity
//               ticks: {
//                 color: 'rgba(255, 255, 255, 0.8)', // White with 70% opacity
//               },
//             },
            
//           },
          
//         },
//       });
//     } 

//     // Cleanup on component unmount
//     return () => {
//       if (myChart) {
//         myChart.destroy();
//       }
//     };
//   }, [property, times, counter]);

//   return <canvas ref={chartRef} width="400" height="200"/>;
// };



// export default LineChart;