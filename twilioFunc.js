
const accountSid = "";
const authToken = "";

const sendSms = (phone, message) => {
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
       body: message,
       from: "",
       to: phone
     })
    .then(message => console.log(message.sid))
    .catch(err => console.log(err))

}


module.exports = sendSms;
