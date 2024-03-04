import React from 'react';

const Home = () => {
    return (
        <div style={{ marginTop: '9%', height: '80vh', alignItems: 'center', justifyContent: 'center',position: 'relative' }}>

        <h2 style={{
        fontSize: '4em', // Adjust the font size as needed
        color: '#3366cc', // Change the color to your preference
        fontWeight: 'bold', // Add bold formatting
        textAlign: 'center' // Center the text
        }}>
        Scada Home Page
        </h2>

        <p style={{
        fontSize: '1.5em', // Adjust the font size as needed
        color: '#4CAF50', // Change the color to your preference
        fontStyle: 'italic', // Add italic formatting
        textAlign: 'center' // Center the text
        }}>
        "At EcoMeoh, our mission is to <br></br>
        prosper, With eco-conscious <br></br>
        practices, we foster. Balancing  <br></br>
        profit with environmental care,<br></br>
We aim for success that's truly rare."
        </p>

        <p style={{
        fontSize: '3em', // Adjust the font size as needed
        color: '#FF0000', // Change the color to your preference
        fontStyle: 'italic', // Add italic formatting
        textAlign: 'left', // Center the text
        textIndent: '43%'
        
        }}>
        Sponsored By:
        </p>


        <img style={{ width: '15%', height: '30%',position: 'absolute', top: '0%', left: '10%' }} src={process.env.PUBLIC_URL + '/EcoMeOH_Logo.jpg'} alt="Page 1" />
        
        <img style={{ width: '25%', height: 'auto',position: 'absolute', top: '30%', left: '60%',   }} src={process.env.PUBLIC_URL + '/hatchlogo.png'} alt="Page 1" />

        <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/27762966_web1_171112-LDN-M-Nechako-River.jpg'} alt="Page 1" />

        <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/burning.gif'} alt="Page 1" />

        <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/deforestation.jpeg'} alt="Page 1" />

        <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/money.gif'} alt="Page 1" />

        <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/real.gif'} alt="Page 1" />

        <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/tushy.gif'} alt="Page 1" />
       

        
            

        </div>
    );
};

export default Home;



