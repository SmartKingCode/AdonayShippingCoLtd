
const express = require("express");
const  path = require('path');
const  nodeMailer = require('nodemailer');
const  bodyParser = require('body-parser');
const xoauth2 = require('xoauth2');
const serveStatic = require('serve-static');

const app = express();


app.use('/', serveStatic(path.join(__dirname,'./dist')));

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());




/*
    Routes
*/





var transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'adonay.mail.service@gmail.com',
         pass: 'adonayMailService2019'
     }
 });
 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

  app.post('/send-email', function (req, res) {
  

var form={
  "name":  req.body.user_name,
  "email":  req.body.user_mail,
 
  "message": req.body.text

};

var markUp = `
             
              <h2>   Mail: ${form.email}<h2>
                <p>Sent: ${form.message}</p>
          `;

var subject = `  Mr | Mrs ${form.name}`;

var mailOptions = {
  from: 'adonay.mail.service@gmail.com', // sender address
  to: 'credolebgaza@gmail.com', // list of receivers
  subject: subject, // Subject line
  html: markUp// plain text body
};
  
 
  transporter.sendMail(mailOptions, function (err, info) {
    if(err){
      console.log(err);
      }
    else
    {
      console.log(info);

    }
 });
 // res.writeHead(301, { Location: 'index.html' });*/
  res.end();
  
});



let server = app.listen(port, function(){
    let port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
