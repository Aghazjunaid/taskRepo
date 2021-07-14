const express = require('express');
const fs = require('fs');
const axios = require('axios');
const { promisify } = require('util');
const PORT = process.env.PORT || 9000

const app = express();

const writeFilePromise = promisify(fs.writeFile);

app.get('/stream', async function(req,res){
    var return_response = { "status": null, "message": null, "data": null } 
    const url = "https://www.youtube.com/watch?v=ZjBLbXUuyWg"
    try {
        const response = await axios.get(url);
    if (response.data) {
        await writeFilePromise(response.data);
    }
        return_response.status = 200;
        return_response.message = "Success";
        return_response.data = response.data;
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    res.json(return_response);
})


app.listen(PORT, () => {
    console.log(`app listening on port:${PORT}`)
})