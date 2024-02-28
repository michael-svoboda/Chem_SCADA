const { Client } = require('pg');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Dav1decek!",
    database: "Capstone",
    
     // Ensure that this is a string
});

client.connect();

client.query('SELECT * FROM tableone', (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end();
});

client.query('SELECT "Stream Number", "Temperature [C]", "Pressure [kPaa]", "Mass Flow [kg/h]", "Molar Flow [kmol/h]", "Vapor Volume Fraction", "Time" FROM tableone', (err, res) => {
    if (!err) {
        const rows = res.rows;
        
        // Extract data for chart
        const streamNumbers = rows.map(row => row['Stream Number']);
        const temperatures = rows.map(row => row['Temperature [C]']);
        const pressures = rows.map(row => row['Pressure [kPaa]']);
        const massFlows = rows.map(row => row['Mass Flow [kg/h]']);
        const molarFlows = rows.map(row => row['Molar Flow [kmol/h]']);
        const vaporFractions = rows.map(row => row['Vapor Volume Fraction']);
        const times = rows.map(row => row['Time']);
        
        // Assuming using Chart.js for drawing line graph
        const chartCallback = (ChartJS) => {
            ChartJS.defaults.global.defaultFontColor = 'black';
            const chartConfig = {
                type: 'line',
                data: {
                    labels: streamNumbers, // Assuming 'Stream Number' is used as x-axis labels
                    datasets: [
                        {
                            label: 'Temperature [C]',
                            data: temperatures,
                            fill: false,
                            borderColor: 'red',
                            tension: 0.1
                        },
                        {
                            label: 'Pressure [kPaa]',
                            data: pressures,
                            fill: false,
                            borderColor: 'blue',
                            tension: 0.1
                        },
                        // Add more datasets for other columns if needed
                    ]
                },
                options: {
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Stream Number'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            }
                        }]
                    }
                }
            };
            return chartConfig;
        };

        const canvasRenderService = new ChartJSNodeCanvas({ width: 800, height: 600 });
        canvasRenderService.renderToBuffer(chartCallback).then(buffer => {
            // Buffer contains the image of the line graph, you can save it or do whatever you want with it
            console.log('Line graph created successfully!');
        }).catch(err => {
            console.error('Failed to create line graph:', err);
        });
    } else {
        console.error(err.message);
    }
    client.end();
});
