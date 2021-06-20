const express = require('express')
const app = express()
const port = 5000
var jwt = require('jsonwebtoken');
var urlG = require('url');
const { createAccount, auth } = require('./app_modules/AuthModule');
const { addNewUserTodo, getUserTodos, updateUserTodo, closeTodo, deleteTodo } = require('./app_modules/TodosModules');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});



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
  

  app.post("/api/todo/add", (req,res)=>{
    addNewUserTodo(req,res);
  })

  
  app.post("/api/todo/update", (req,res)=>{
    updateUserTodo(req,res);
  })

  app.post("/api/todo/close", (req,res)=>{
    closeTodo(req,res);
  })

  app.post("/api/todo/delete", (req,res)=>{
    deleteTodo(req,res);
  })
  

  app.get("/api/todo/list", (req,res)=>{
    getUserTodos(req,res);
  })




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})