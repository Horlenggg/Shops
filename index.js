const express = require('express');
const app = express();

app.use(express.json());
app.listen(5000,()=>{
    console.log('http://localhost:5000');
})

app.get('/',(req,res)=>{
    res.json(req.query);
})
