
const express = require('express')
const multer = require('multer')
const AWS = require('aws-sdk')

const app = express()
const port = 3000

const screenshot = require('screenshot-desktop')


app.get("/screen", function (req, res) {
    screenshot("screenshot.png", function(error, complete) {
        if(error)
            console.log("Screenshot failed", error);
        else
            console.log("Screenshot succeeded");
    });
    res.json("Screenshot succeeded");
  });


app.listen(port, () => {
    console.log(`Server is up at ${port}`)
})