const express = require('express')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')
const multer = require('multer')

const app = express()
const PORT = process.env.PORT || 9000

const s3 = new AWS.S3({
    accessKeyId: "",
    secretAccessKey: "",
    region: "us-east-2"
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    } else {
        cb(new Error('Invalid Mime Type'), false);
    }
}
app.post('/upload', async function getGitBranch(req,res){
    var upload = await multer({
        storage: multerS3({
            fileFilter,
            s3 : s3,
            bucket: "", //add bucket name 
            acl: "public-read",
            metadata: function(req, file, cb) {
                cb(null, { fieldName: "Aghaz metadata"})
            },
            key:  function(req, file, cb) {
                cb(null, Date.now().toString())
            },
        })
    })
    res.status(200).json({
        "result": upload,
    });
})

app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`)
})