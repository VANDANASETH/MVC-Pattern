const express = require("express");
const app = express()
const dotenv = require('dotenv');
const port = process.env.PORT;
const connectDB = require('./config/db')
const productRoutes = require("./routes/productRoutes")

dotenv.config();
connectDB();

app.get('/', (req, res) =>{
    res.send("Hello World")
})

app.use('/api', productRoutes)

app.listen(port, ()=>{
    console.log(`App Listening on port ${port}`)
})
