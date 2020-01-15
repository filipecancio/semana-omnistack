const {Router} = require('express');

const routes = Router();

//Creat dev
routes.post('/devs',(req,res)=> {
    const {github_username} = req.body;
    console.log(req.body);
    res.json({message:'hello omnistack'});
});

module.exports = routes;