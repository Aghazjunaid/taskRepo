
const express = require('express');

const fetch = require('node-fetch');

const redis  = require('redis');

const PORT = process.env.PORT || 9000;

const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT); 

const app = express();

// cache middleware

function cache(req,res,next)
{
    const {username} = req.params;

    client.get(username,(err,data) =>{

        if(err) throw err;

        if(data !== null)
        {
           res.send(`${username} has Github Repos`);
        }
        else{
            next();
        }

    });


}

app.get('/repos/:username', cache,getRepos);

async function getRepos(req,res,next)
{
   try{

    console.log("Fetching Data");

    const {username} = req.params;

    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();

    const repos = data.public_repos;

    client.setex(username,3600,repos);

    res.send(`${username} has ${repos} Github Repos`);

   }catch(err){
    
      console.log(err);

   }
}

app.listen(5000,() =>{
    console.log(`App listening on PORT ${PORT}`);
})