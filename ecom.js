const express = require('express');
const axios = require('axios');
var request = require('request');
var convert = require('xml-js');

const app = express()
const port = 3100

var FormData = require('form-data');
let ecomFunc = require("./ecomFunc");

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({extended : true}))

app.get('/getLocation', async(req,res)=>{
    try {
        let data = new FormData();

        data.append('username', 'internaltest_live');
        data.append('password', 'tp-6cM&R=hjXQ7Sn@');

        var config = {
        method: 'post',
        url: 'https://api.ecomexpress.in/apiv2/pincode/',
        headers: { 
            ...data.getHeaders()
        },
        data : data
        };

        const resp = await axios(config)
        console.log(resp.data)
        res.send(JSON.stringify(resp.data))
    } catch (error) {
        res.send(error)
    }
})

app.get('/fetch_awb', (req,res)=>{
    try {
        let opt = req.body
        ecomFunc.getAWB(opt, (err,doc)=>{
            if (err) throw new Error(err); 
            return res.status(200).json({
                "data": doc,
            });
        })
    } catch (error) {
        res.send(error)
    }
})

app.get('/api/v1/u/ecom/shipmentTracking', async(req,res)=>{
    try {
        let data = new FormData();

        data.append('username', 'internaltest_live');
        data.append('password', 'tp-6cM&R=hjXQ7Sn@');
        data.append('awb', '2806135964');

        var config = {
            method: 'post',
            url: 'https://plapi.ecomexpress.in/track_me/api/mawbd/',
            headers: { 
              'Content-Type': 'application/json', 
              ...data.getHeaders()
            },
            data : data
        };
          
        const resp = await axios(config)
        let result = await convert.xml2json(resp.data)
        console.log(resp.data)
        console.log(result)
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})


app.listen(port, () => {
    console.log(`Server is up at ${port}`)
})