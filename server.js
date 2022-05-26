const express = require('express');
const { engine } = require ('express-handlebars');
const app = express();
const nodemailer = require('nodemailer');
const handlebars = require('express-handlebars');
const { partials } = require('handlebars');
var mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;




//database connection

const dbURL = 'mongodb+srv://eray:eray344@examples.9tib0.mongodb.net/db-example?retryWrites=true&w=majority'
mongoose.connect(dbURL, {useNewURLParser: true, useUnifiedTopology: true})

.then((result) => console.log('bağlantı kuruldu'))
.catch((err) => console.log(err))




// Handlebars
app.set('view engine', 'handlebars');

app.engine('handlebars', engine({
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials`
}));



// Middleware
app.use(express.static('public'));
app.use(express.json())

const main = require('./router/main')
app.use('/',main)   

const userRoutes = require('./router/loginrouter')
app.use("/", userRoutes);

const registerRouter = require('./router/registerrouter')
app.use("/", registerRouter)




// post for sending email
app.post('/',(req,res)=>{
    console.log(req.body);

    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
          user: 'terayu666@gmail.com',
          pass: 'xsdzjrgoodzqdcat'
      }
  });

    var mailOptions = {
        from: req.body.email,
        to: 'terayu666@gmail.com',
        subject: `Message from ${req.body.email}`,
        text: req.body.message
      };

      transporter.sendMail(mailOptions, (error, info) =>{
        if (error) {
          console.log(error);
          res.send('error');
        } else {
          console.log('Email sent: ' + info.response);
          res.send('success')
        }
      });

    
})
// server
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})

