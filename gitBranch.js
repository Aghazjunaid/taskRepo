const express = require('express');
var git = require('git-rev-sync');
var pjson = require('./package.json'); 

const PORT = process.env.PORT || 9000

const app = express();

app.get('/gitBranch', async function getGitBranch(req,res){
    var return_response = { "status": null, "message": null, "data": null } 
    try {
        console.log(git)
        let data = {
            'project': pjson.name,
            'running': true,
            'version': pjson.version,
            'branch': git.branch(),
            'head': git.short(),
            'head-long': git.long(),
            'date': git.date(),
        }
        return_response.status = 200;
        return_response.message = "Success";
        return_response.data = git.branch();
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    res.json(return_response);
})



app.listen(PORT, () => {
    console.log(`app listening on port:${PORT}`)
})