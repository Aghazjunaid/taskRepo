const AWS = require('aws-sdk');
const fs = require('fs');
// Enter copied or downloaded access ID and secret key here
const ID = '';
const SECRET = '';

// The name of the bucket that you have created
const BUCKET_NAME = '';


const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});


const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: "us-east-2"
    }
};

// s3.createBucket(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     else console.log('Bucket Created Successfully', data.Location);
// });

const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    console.log(`myfolder/${fileName}`)
    const params = {
        Bucket: BUCKET_NAME,
        Key: `myfolder/${fileName}`, // File name you want to save as in S3
        Body: fileContent,
        ACL: 'public-read',
        ContentType: 'image/jpeg',
        CacheControl: 'max-age=604800'
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadFile('iron_man.jpg');
