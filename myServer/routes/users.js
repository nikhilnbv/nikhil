var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const config = {
    host : 'localhost',
    port : 3306,
    user : 'root',
    password: 'root',
    database: 'tms'
};

var connection = mysql.createConnection(config);
connection.connect();

var users = {};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





router.get('/authenticate1',function(req, res, next){
    console.log("inside authenticate");

    connection.query('select * from users where username = "'+ "Nikhil" +'"', function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result[0].firstname + ' records present..');
            res.send(result);
            /*if(result[0].count>0){
                console.log("true efdfdfdf");
            }else{
                console.log("false sdfsfsfsf");
            }*/
        }
    });
});

module.exports = users;

module.exports = router;

