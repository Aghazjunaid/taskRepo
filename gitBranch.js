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
        return_response.data = data;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    res.json(return_response);
})

// {
//     "status": 200,
//     "message": "Success",
//     "data": {
//         "project": "taskApi",
//         "running": true,
//         "version": "1.0.0",
//         "branch": "master",
//         "head": "21fad57",
//         "head-long": "21fad57139bef97a25873735a0c542560205d552",
//         "date": "2021-05-30T07:17:24.000Z"
//     }
// }

app.listen(PORT, () => {
    console.log(`app listening on port:${PORT}`)
})