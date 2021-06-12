const express = require('express')
const { getMarks } = require('./app_modules/MarksModule')
const app = express()
const port = 3500
var jwt = require('jsonwebtoken');
const { auth } = require('./app_modules/AuthModule');


app.use(function (req, res, next) {
    if (req.path === "/auth") {
        next();
    } else {
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



app.get('/marks/list', (req, res) => {
    getMarks(req, res);
})

app.post('/auth', (req, res) => {
    auth(req, res);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})