const express = require('express');
var moment = require('moment'); // require

const PORT = process.env.PORT || 9000
const app = express();

const data = moment().format(); 
console.log(data)


app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`)
})