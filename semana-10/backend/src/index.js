const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://cancio:0000@cluster0-lptep.mongodb.net/sandbox?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true});


app.use(express.json());
app.use(routes);
app.listen(3333);