const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://cancio:0000@cluster0-lptep.mongodb.net/week10?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true});


app.use(express.json());

app.post('/',(req,res)=> res.json({message:'hello omnistack'}));
app.listen(3333);