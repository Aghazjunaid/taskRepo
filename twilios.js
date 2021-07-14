const express = require("express");
const app = express();
const port = 4000;

app.get("/sendSMS", function (req, res) {
  var accountSid = ""; // Your Account SID from www.twilio.com/console
  var authToken = ""; // Your Auth Token from www.twilio.com/console

  var twilio = require("twilio");
  var client = new twilio(accountSid, authToken);

  client.messages
    .create({
      body: "Hello from Node",
      to: "+919525887776", // Text this number
      from: "", // From a valid Twilio number
    })
    .then(message => console.log(message))
    .catch(err => console.log(err))

});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  