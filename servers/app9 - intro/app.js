var http = require('http');
var datemodule = require('./myModules/dateModule');
var url = require('url');
var fs = require('fs');


http.createServer(function(req,res){
    /*let year = datemodule.getDateFromOption('y');
    let month = datemodule.getDateFromOption('m');
    let date = datemodule.getDateFromOption('d');
    
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! in '+year+' today is '+date +' / '+month);
*/

    // url

   /* var users = [
        { id:"15", username: "taher" },
        { id:"16", username: "taher 2 " },
        { id:"17", username: "taher 3" },
        
    ];

    var  result = null;


    const urlPath = req.url;
    var q = url.parse(urlPath, true).query;

    console.log(q);

    if (q.id != null) {
        result = users.filter((u)=> u.id == q.id)
    }else{
        result = users;
    }

    res.end(JSON.stringify(result));*/

    // file system

    /*fs.readFile('fruits.txt',function(err,data){
        if (err) {
            throw err;
        }

        console.log(data.toString().split(','));
        res.end("hi");
    })*/

    /*fs.writeFile('test.txt',"hello world",function(err) {
        if (err) {
            throw err;
        }

        res.end("hi");
    })*/

    /*fs.unlink('test.txt',function(err){
        if (err) {
            throw err;
        }

        res.end("deleted !");
    })*/

 
    /*switch (path) {
        case '/summer':
            fs.readFile('./templates/summer.html',function(err,data){
                res.end(data);
            })
        break;
        case '/winter':
            fs.readFile('./templates/winter.html',function(err,data){
                res.end(data);
            })
        break;
        
    
        default:
            fs.readFile('./templates/index.html',function(err,data){
                res.end(data);
            })

        break;
    }*/


    var users = [
        { id:"1", username:"taher chourabi", email:"tchourabi@gmail.com" },
        
    ];

    var path = url.parse(req.url, true).pathname;
    console.log(path);

    res.writeHead(200, {'Content-Type': 'application/json'});

    switch (path) {
        case '/users':
            if (req.method=== 'GET') {
                res.end(JSON.stringify({ success:true, users:users }));
            }else if(req.method == 'POST') {

                var body = [];

                req.on('data',(chunk)=>{
                    body.push(chunk);
                }).on('end',()=>{
                    
                    let textdata = Buffer.concat(body).toString();

                    let jsonData = JSON.parse(textdata);


                    console.log("data :",textdata);
                    users.push(jsonData);

                    console.log(users);

                    res.end(JSON.stringify({ success:true, message:"user inserted" }));
                })
            }
        break;
        default:
            res.end(JSON.stringify({message:"access denied"}));
        break;
    }







    

}).listen(5000);
