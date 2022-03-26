var request = require('request');

module.exports = {
    getAWB : (data, cb) => {
        try {
            let options = {
                'method': 'POST',
                'url': 'https://api.ecomexpress.in/apiv2/fetch_awb/',
                'headers': {
                'Content-Type': 'application/json'
                },
                formData: {
                    'username': 'internaltest_live',
                    'password': 'tp-6cM&R=hjXQ7Sn@',
                    'count': data.count,
                    'type': data.type
                }
            };
            request(options, function (error, response) {
                if (error) throw new Error(error);
                return cb(error, response.body)
            });
        } catch (error) {
            res.send(error)
        }
    }
}