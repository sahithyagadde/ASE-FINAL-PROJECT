const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const details = require("./details.json");
const bodyparser = require("body-parser");
const User = require("./User");
const Org= require("./Org");
const quesset= require("./quesset");
const Org1= require("./Org1");

  const db = mongoose.connect("mongodb+srv://roshnatoke:Newgen123@userdata-rd6xu.mongodb.net/test?retryWrites=true&w=majority", function (err, response) {
    if(err)
      console.log("Error in mongodb connection");
    console.log("Mongodb connection added");
});


const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Welcome to AI Chatbot <br></h1>"
  );
});





app.post('/loginpage', function (req, res, next) {
  Org1.findOne({orgMail: req.body.orgMail}).then(user =>{
    if (user) {
      if(req.body.registerPassword === user.registerPassword){
        console.log('123');
        console.log(user);
        res.json(user);
      }
      else{
        res.send('password does not match')
      }
    }
    else {
      res.send('User does not exist')
    }
  }).catch(err => {
    res.send('error: ' + err)
  })
});
  app.post('/login', function (req, res, next) {
    User.findOne({profMail: req.body.profMail}).then(user =>{
      if (user) {
        if(req.body.regPassword === user.regPassword){
          console.log('123');
          console.log(user);
          res.json(user);
        }
        else{
          res.send('password does not match')
        }
      }
      else {
        res.send('User does not exist')
      }
    }).catch(err => {
      res.send('error: ' + err)
    })
  });
    app.post('/registration', (req, res) => {
      console.log(req.body);


      const profId = req.body.profId;
      const profName = req.body.profName;
      const orgName1 = req.body.orgName1;
      const profMail = req.body.profMail;
      const orgAddr1 = req.body.orgAddr1;
      const profPhnum = req.body.profPhnum;
      const regPassword = req.body.regPassword;
      const user = new User();

      user.profId = profId;
      user.profName = profName;
      user.orgName1 = orgName1;
      user.profMail = profMail;
      user.orgAddr1 = orgAddr1;
      user.profPhnum = profPhnum;
      user.regPassword = regPassword;

      user.save(function (err, doc) {
        if (err) {

          console.log("There is a error while adding in db");
          res.send({success: "Failed to add user", status: 500});
        } else {
          console.log("successfuly saved");
          res.json(doc);
          //console.log(result);

          //const id= doc[0]._id;


        }
      })

    });
app.post('/registrationpage', (req, res) => {
  console.log(req.body);


  const orgId = req.body.orgId;
  const orgName = req.body.orgName;
  const orgMail = req.body.orgMail;
  const orgAddr = req.body.orgAddr;
  const orgPhnum = req.body.orgPhnum;
  const registerPassword = req.body.registerPassword;

  const org12 = new Org1();

  org12.orgId = orgId;
  org12.orgName = orgName;
  org12.orgMail = orgMail;
  org12.orgAddr = orgAddr;
  org12.orgPhnum = orgPhnum;
  org12.registerPassword = registerPassword;


  org12.save(function (err, doc) {
    if (err) {

      console.log("There is a error while adding in db");
      res.send({success: "Failed to add user", status: 500});
    } else {
      console.log("successfuly saved");
      res.json(doc);
      //console.log(result);

      //const id= doc[0]._id;


    }
  })

});


    app.post('/globaladminadd', (req, res) => {

      console.log(req.body);

      const orgId = req.body.orgId;
      const orgName = req.body.orgName;
      const orgAddr = req.body.orgAddr;
      const Mail1 = req.body.Mail1;
      const orgPhnum = req.body.orgPhnum;

      const registerPassword = req.body.registerPassword;
      const registerPassword2 = req.body.registerPassword2;


      const org1 = new Org1();

      org1.orgId = orgId;
      org1.orgName = orgName;
      org1.orgAddr = orgAddr;
      org1.Mail1 = Mail1;
      org1.orgPhnum = orgPhnum;

      org1.registerPassword = registerPassword;
      org1.registerPassword2 = registerPassword2;
      org1.save(function (err, doc) {
        if (err) {
          //abc
          console.log("There is a error while adding in db");
          res.send({success: "Failed to add user", status: 500});
        } else {
          console.log("successfuly saved");
          res.json(doc);
          //console.log(result);

          //const id= doc[0]._id;


        }
      })

    });
    app.post('/orgquessetadd', (req, res) => {
      console.log(req.body);
      const quessetName = req.body.quessetName;
      const deptname = req.body.deptname;
      const ques1 = req.body.ques1;
      const ques2 = req.body.ques2;
      const ques3 = req.body.ques3;
      const ques4 = req.body.ques4;
      const ques5 = req.body.ques5;
      const date = req.body.date;

      const Quesset = new quesset();
      Quesset.quessetName = quessetName;
      Quesset.deptname = deptname;
      Quesset.ques1 = ques1;
      Quesset.ques2 = ques2;
      Quesset.ques3 = ques3;
      Quesset.ques4 = ques4;
      Quesset.ques5 = ques5;
      Quesset.date = date;


      Quesset.save(function (err, doc) {
        if (err) {

          console.log("There is a error while adding in db");
          res.send({success: "Failed to add user", status: 500});
        } else {
          console.log("successfuly saved");
          res.json(doc);
          //console.log(result);

          //const id= doc[0]._id;


        }
      })

    });

    app.get('/globaladmin', (req, res) => {
        Org1.find({}, function (err, users) {
          if (!err) {
            console.log(users);
            res.json(users);
          } else {
            res.render('/details', {users: docs})
          }
        });

      }
    )


    app.get('/globaladminview/:id', (req, res, next) => {

        Org1.findById(req.params.id, function (err, post) {
          if (err) return next(err);
          res.json(post);
        });


      }
    )
    app.get('/orgquessetview/:id', (req, res, next) => {

        quesset.findById(req.params.id, function (err, post) {
          if (err) return next(err);
          res.json(post);
        });


      }
    )
    app.get('/organizationadminquest', (req, res) => {
        quesset.find({}, function (err, users) {
          if (!err) {
            console.log(users);
            res.json(users);
          } else {
            res.render('/details', {users: docs})
          }
        });

      }
    )

    app.put('/globaladminedit/:id', function (req, res, next) {
      Org1.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      })
    })
    app.put('/orgquessetedit/:id', function (req, res, next) {
      quesset.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      })
    })
app.put('/userprofile', function(req, res, next){
  Org1.findByIdAndUpdate(req.body._id, req.body, function (err,post){
    if (err) {return next(err);}
    else {
      res.json(post);
      console.log('sahi');
      console.log(post);
    }
  })
})


    app.delete('/globaladminview/:id', (req, res) => {

        Org1.findByIdAndDelete(req.params.id, function (err, post) {
          if (err) return next(err);
          res.json(post);
        });

      }
    )
    app.delete('/orgquessetview/:id', (req, res) => {

        quesset.findByIdAndDelete(req.params.id, function (err, post) {
          if (err) return next(err);
          res.json(post);
        });

      }
    )
    app.get('/orgprof', (req, res, next) => {
        User.find({}, function (err, docs) {
          if (!err) {
            console.log(docs);
            res.json(docs);
          } else {
            res.render('/details', {docs})
          }
        });

      }
    )

    app.get('/orgprofview/:id', (req, res, next) => {

        User.findById(req.params.id, function (err, post) {
          if (err) return next(err);
          res.json(post);
        });


      }
    )
    app.put('/orgprofedit/:id', function (req, res, next) {
      User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      })
    })


    app.delete('/orgprofview/:id', (req, res) => {

        User.findByIdAndDelete(req.params.id, function (err, post) {
          if (err) return next(err);
          res.json(post);
        });

      }
    )
    app.post("/sendmail", (req, res) => {
      console.log("request came");
      let user = req.body;
      sendMail(user, info => {
        console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
        res.send(info);
      });
    });

    async function sendMail(user, callback) {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: details.email,
          pass: details.password
        }
      });


      let mailOptions = {
        from: '"Roshna"<example.gimail.com>', // sender address
        to: user.email, // list of receivers
        subject: "Wellcome to AI Chatbot", // Subject line
        html: `<h1>Hi ${user.email}</h1><br>
    <h4>Thank you for joining us</h4>`
      };

      // send mail with defined transport object
      let info = await transporter.sendMail(mailOptions);

      callback(info);

  }
// main().catch(console.error);
