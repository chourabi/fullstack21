var jwt = require('jsonwebtoken');
var sha1 = require('sha1');


exports.auth = function (req, res) {
    var body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {

        let textdata = Buffer.concat(body).toString();

        let jsonData = JSON.parse(textdata);

        if (jsonData.username != null && jsonData.password != null) {


            var MongoClient = require('mongodb').MongoClient;
            var url = "mongodb://localhost:27017/";
        
            MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mytodoapp");
            
            var hashedPassword = sha1(jsonData.password);
            console.log(hashedPassword);
            dbo.collection("users").find({username:jsonData.username, password:hashedPassword}).toArray(function(err, result) {
                if (err) throw err;

               
                
                if (result.length == 1) {

                    console.log("generated user id: ",result[0]._id);
                    // generate a new token
                    var token = jwt.sign({
                        id: result[0]._id,
                        exp: Math.floor(Date.now() / 1000) + (60*60 *24 *365),
                    }, 'shhhhh');
    
                    

                    var MongoClient = require('mongodb').MongoClient;
                    var url = "mongodb://localhost:27017/";
                
                    MongoClient.connect(url, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db("mytodoapp");
                    
                    var query = { username : jsonData.username }
                    var newValues = { $set : {  accessToken: token} }
                
                    dbo.collection("users").updateOne (query,newValues,function(err, result) {
                        if (err) throw err;
                        
                        res.send({ success: true, token: token })
                        db.close();
                      });
                
                
                    });
    
                    
    
    
                } else {
                    res.send({ success: false, message: "wrong username or password." })
                }
                db.close();
              });
        
        
            });
        


            
        } else {
            res.send({ success: false, message: "bad request." })
        }


    })
}



exports.createAccount = function (req, res) {
    var body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {

        let textdata = Buffer.concat(body).toString();

        let jsonData = JSON.parse(textdata);

        if (jsonData.username != null && jsonData.password != null) {

            // create user mongoDB

            // check first for username existance

            var MongoClient = require('mongodb').MongoClient;
            var url = "mongodb://localhost:27017/";

            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("mytodoapp");


                dbo.collection("users").find({ username: jsonData.username }).toArray(function (err, result) {
                    if (err) throw err;

                    console.log(result);
                    if (result.length == 0) {
                        var MongoClient = require('mongodb').MongoClient;
                        var url = "mongodb://localhost:27017/";

                        MongoClient.connect(url, function (err, db) {
                            if (err) throw err;
                            var dbo = db.db("mytodoapp");
                            var hashedPassword = sha1(jsonData.password);
                            var user = {
                                username: jsonData.username,
                                password: hashedPassword,
                            }

                            dbo.collection("users").insertOne(user, function (err, result) {
                                if (err) throw err;
                                res.send({ success: true })

                                db.close();
                            });
                        });
                    } else {
                        res.send({ success: false, message: "username already in use" })
                    }

                });


            });












        } else {
            res.send({ success: false, message: "bad request." })
        }


    })
}

