const express = require('express');

const PORT = process.env.PORT || 9000

const app = express();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("");
const msg = {
  to: 'aghazjunaid96@gmail.com',
  from: '', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'Hello Fame',
};

app.get('/mail', async (req, res) => {
    try {
        const data = await sgMail.send(msg);
        res.send("Message is sent")
    } catch (error) {
        res.send(error)
    }
})


app.listen(PORT, () => {
    console.log(`app listening on port:${PORT}`)
  })