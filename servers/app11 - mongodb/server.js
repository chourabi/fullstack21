const express = require('express')
const app = express()
const port = 5000
var jwt = require('jsonwebtoken');
var urlG = require('url');
const { createAccount, auth } = require('./app_modules/AuthModule');


app.use(function (req, res, next) {
    if (req.path === "/auth") {
        next();
    }else if (req.path === "/signup") {
        next();
    }
    else {
        console.log('Time:', Date.now())

        if (req.headers.authorization != null) {
            // we ca test the auth token value
            const token = req.headers.authorization;

            try {
                var result = jwt.verify(token, 'shhhhh')
                next();


            } catch (error) {
                res.send({ success: false, message: "session expired." })
            }
        } else {
            res.send({ success: false, message: "access denied, an auth tokne is required." })
        }
    }
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/signup', (req, res) => {
    
    createAccount(req,res);
  })

  app.post('/auth', (req, res) => {
    
    auth(req,res);
  })
  


app.get('/dev', (req, res) => {

    const params = urlG.parse(req.url,true).query;

    console.log(params);

    const status = params.status;

    var query = {};

    if (status != null) {
        query.status = parseInt(status);

    }


    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mytodoapp");
    

    dbo.collection("todos").find(query).toArray(function(err, result) {
        if (err) throw err;
        
        res.send(result)
        db.close();
      });


    });





    
  })


  app.get('/update', (req, res) => {

    


    var hashedPassword = passwordHash.generate("123456");

    console.log(hashedPassword);

    res.send("ok")
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})