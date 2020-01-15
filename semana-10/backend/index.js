const express = require('express');

const app = express();
app.use(express.json());

app.post('/',(req,res)=> res.json({message:'hello omnistack'}));
app.listen(3333);