const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const data = require('./Data.json')

app.use(express.json());
app.use(cors());

app.post('/data',async(req,res)=>{
    try {
        const senData = data;
        return res.status(200).json({"message":"Data Fetched","success":true,"data":senData})
    } catch (error) {
        return res.status(500).json({"message":"Internal Server Error"});
    }
})

app.listen(port,()=>{
    console.log(`The Server is Running on port ${port}`)
})