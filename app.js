require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
// const path = require('path');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/email', (req, res) => {
    log(req.body);
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>First name: ${req.body.first_name}</li>
      <li>Last name: ${req.body.last_name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Adress: ${req.body.address}</li>
      <li>City: ${req.body.city}</li>
      <li>Zip: ${req.body.zip}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.comment}</p>
  `;
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
      }
  });

  let mailOptions = {
    from: req.body.email,
    to: 'belzeshop@gmail.com', // list of receivers
    subject: 'zamowienie', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs: ', err);
    }
    return log('Email sent!!!');
});

})

app.post('/email',( req, res) => {
    console.log(req.body);
    res.json({message: 'Message received!!!'})
})




app.listen(3000, () => {
    console.log('Server is working at http://localhost:3000')
});