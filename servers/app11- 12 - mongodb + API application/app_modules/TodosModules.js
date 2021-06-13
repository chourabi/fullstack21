// add 
const { ObjectId, ObjectID } = require('bson');
var jwt = require('jsonwebtoken');
exports.addNewUserTodo = function (req, res) {

    const token = req.headers.authorization;

    try {
        var result = jwt.verify(token, 'shhhhh')

        const id_user = result.id;

        var body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {

            let textdata = Buffer.concat(body).toString();

            let jsonData = JSON.parse(textdata);

            if (
                jsonData.title != null &&
                jsonData.description != null
            ) {
                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";

                MongoClient.connect(url, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("mytodoapp");
                    var todo = {
                        title: jsonData.title,
                        description: jsonData.description,
                        status: 0,
                        user_id: id_user,
                        add_date: new Date()
                    }

                    dbo.collection("todos").insertOne(todo, function (err, result) {
                        if (err) throw err;

                        db.close();
                        res.send({ success: true, id: result.insertedId })
                    });
                });

            } else {
                res.send({ success: false, message: "bad request." })
            }

        });

    } catch (error) {
        res.send({ success: false, message: "session expired." })
    }

}


// listing
exports.getUserTodos = function (req, res) {

    const token = req.headers.authorization;

    try {
        var result = jwt.verify(token, 'shhhhh')

        const id_user = result.id;

        var body = [];

        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("mytodoapp");
            

            dbo.collection("todos").find({ user_id : id_user  }).toArray( function (err, result) {
                if (err) throw err;

                db.close();
                res.send(result)
            });
        });




    } catch (error) {
        res.send({ success: false, message: "session expired." })
    }

}





// delete


//update 

exports.updateUserTodo = function (req, res) {

    const token = req.headers.authorization;

    try {
        var result = jwt.verify(token, 'shhhhh')

        const id_user = result.id;

        var body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {

            let textdata = Buffer.concat(body).toString();

            let jsonData = JSON.parse(textdata);

            if (
                jsonData.title != null &&
                jsonData.description != null &&
                jsonData.todo != null
            ) {
                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";

                MongoClient.connect(url, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("mytodoapp");
                    var todo = {
                        title: jsonData.title,
                        description: jsonData.description
                    }

                    dbo.collection("todos").updateOne({ _id: ObjectId(jsonData.todo)}, { $set:todo }, function (err, result) {
                        if (err) throw err;

                        db.close();
                        res.send({ success: true, count:result.modifiedCount })
                    });
                });

            } else {
                res.send({ success: false, message: "bad request." })
            }

        });

    } catch (error) {
        res.send({ success: false, message: "session expired." })
    }

}


// end todo
//update 

exports.closeTodo = function (req, res) {

    const token = req.headers.authorization;

    try {
        var result = jwt.verify(token, 'shhhhh')

        const id_user = result.id;

        var body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {

            let textdata = Buffer.concat(body).toString();

            let jsonData = JSON.parse(textdata);

            if (
                jsonData.todo != null
            ) {
                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";

                MongoClient.connect(url, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("mytodoapp");
                    

                    dbo.collection("todos").updateOne({ _id: ObjectId(jsonData.todo)}, { $set:{status: 1} }, function (err, result) {
                        if (err) throw err;

                        db.close();
                        res.send({ success: true, count:result.modifiedCount })
                    });
                });

            } else {
                res.send({ success: false, message: "bad request." })
            }

        });

    } catch (error) {
        res.send({ success: false, message: "session expired." })
    }

}


//update 

exports.deleteTodo = function (req, res) {

    const token = req.headers.authorization;

    try {
        var result = jwt.verify(token, 'shhhhh')

        const id_user = result.id;

        var body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {

            let textdata = Buffer.concat(body).toString();

            let jsonData = JSON.parse(textdata);

            if (
                jsonData.todo != null
            ) {
                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";

                MongoClient.connect(url, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("mytodoapp");
                    

                    dbo.collection("todos").deleteOne({ _id: ObjectId(jsonData.todo)} , function (err, result) {
                        if (err) throw err;

                        db.close();
                        res.send({ success: true })
                    });
                });

            } else {
                res.send({ success: false, message: "bad request." })
            }

        });

    } catch (error) {
        res.send({ success: false, message: "session expired." })
    }

}


