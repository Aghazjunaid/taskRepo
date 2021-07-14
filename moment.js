const express = require('express');
var moment = require('moment'); // require

const PORT = process.env.PORT || 9000
const app = express();

console.log(moment().format())
console.log(moment().millisecond())
console.log(moment().minute())
console.log(moment().hour())
console.log(moment().date())
console.log(moment().day()) //weekday
console.log(moment().dayOfYear())
console.log(moment().month())
console.log(moment().year())
console.log(moment().set({'year': 2013, 'month': 3})) //Moment<2013-04-14T11:37:52+05:30>
console.log(moment().toString()) //Wed Jul 14 2021 12:00:40 GMT+0530

console.log(moment().add(30, 'days').add(1, 'months').add(25, 'minutes').toString()) //Mon Sep 13 2021 12:27:02 GMT+0530

console.log(moment([2019, 0, 29]).fromNow()) //2 years ago

var a = moment([2021, 7, 14]);
var b = moment([2021, 7, 29]);
console.log(a.from(b)) //15 days ago


app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`)
})