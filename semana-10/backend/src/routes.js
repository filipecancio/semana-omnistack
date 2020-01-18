const {Router} = require('express');
const axios = require('axios');

const routes = Router();
const Dev = require('./models/Dev')

//Creat dev
routes.post('/devs',async (req,res)=> {
    const {github_username,techs} = req.body;
    const response = await axios.get(`https://api.github.com/users/${github_username}`);
    const {name=login,avatar_url,bio} = response.data;
    const techsArray = techs.split(',').map(i => i.trim());
    let temp = {
        github_username,
        name,
        avatar_url,
        bio,
        techs:techsArray,
    };
    console.log(temp);
    const dev = await Dev.create(temp);
    return res.json(dev);
});

module.exports = routes;