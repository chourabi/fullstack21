var jwt = require('jsonwebtoken');

exports.auth = function (req, res) {
    var body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {

        let textdata = Buffer.concat(body).toString();

        let jsonData = JSON.parse(textdata);

        if (jsonData.username != null && jsonData.password != null) {
            if (jsonData.username==='admin' && jsonData.password === 'admin' ) {
                // generate a new token
                var token = jwt.sign({
                    email: 'tchourabi@gmail.com',
                    exp: Math.floor(Date.now() / 1000) + (10),
                }, 'shhhhh');
        
                console.log(token);

                res.send({success:true,token:token})


            }else{
                res.send({success:false, message:"wrong username or password."})
            }
        }else{
            res.send({success:false, message:"bad request."})
        }

       
    })
}