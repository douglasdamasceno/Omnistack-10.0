const {Router} = require('express');
const axios = require('axios');

const routes = Router();

routes.get('/',(req,res)=>{
    return res.json({message:'opa !!'});
});


routes.post('/devs',async(req,res)=>{ 
    const {github_username} = req.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
    const {name = login,avatar_url,bio} = apiResponse.data;
    console.log(name,avatar_url,bio);
    return res.json({message:'post'});
});


module.exports = routes;