const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/details', require('./routes/details.js'))


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})

// app.get('/', (req,res)=>{
//     res.send("Hello World!");
// });