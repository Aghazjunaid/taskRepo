const express = require('express');
var moment = require('moment-timezone');

const PORT = process.env.PORT || 9000
const app = express();

console.log(moment().format())
console.log(moment().tz("America/Los_Angeles").format('DD MMMM  YYYY, h:mm:ss a')) //14 July  2021, 12:46:03 am

moment().tz("Asia/Kolkata").format();
console.log(moment().format('DD MMMM  YYYY, h:mm:ss a')) //14 July  2021, 1:16:03 pm

var a = moment.tz("America/Toronto");
console.log(a.format('DD MMMM  YYYY, h:mm:ss a')) //14 July  2021, 3:50:12 am




app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`)
})