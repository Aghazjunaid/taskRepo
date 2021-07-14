const express = require('express');
var git = require('git-rev-sync');
var pjson = require('./package.json'); 

const PORT = process.env.PORT || 9000

const app = express();

const fs = require('fs')
const savePixels = require('save-pixels')
const getPixels = require('get-pixels')
const adaptiveThreshold = require('adaptive-threshold')
 
app.get('/get', async function(req,res){
    var return_response = { "status": null, "message": null, "data": null } 
    try {
        getPixels('sample.jpg', (err, pixels) => {
            if (err) {
              console.error(err)
              return
            }
            let thresholded = adaptiveThreshold(pixels, {size: 6,compensation: 7})
           let opt = savePixels(thresholded, 'png').pipe(fs.createWriteStream('5.png'))
          })
          
        return_response.status = 200;
        return_response.message = "Success";
    } catch (error) {
        console.error(error);
    }
    res.json(return_response);
})


app.listen(PORT, () => {
    console.log(`app listening on port:${PORT}`)
})