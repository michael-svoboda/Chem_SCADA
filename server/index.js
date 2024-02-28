





import express from "express";
import corse from "cors";

const app=express();
app.use(cors());

app.get("/getData", (req, res)=>{
    res.send("Hello")
});

app.listen(3001,()=>console.log("app is running"));



const fetchData = require('./Fetchdata.js');

// Call the fetchData function
fetchData()
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
