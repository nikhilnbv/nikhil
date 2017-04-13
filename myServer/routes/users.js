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





router.post('/authenticate',function(req, res, next){
    console.log("inside authenticate");

    connection.query('select * from users where username = "'+ req.param('username') +'" and password = "' + req.param('password') + '" and isactive = true'
    ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            if(result.length > 0)
                 res.send(result);            
            else                
                 res.send([{'firstname' : 'No user found'}]);
            
        }
    });
});

router.post('/createUser',function(req, res, next){
    console.log("inside createUser "+req.param('userName'));

    connection.query(
      'insert into users values ( "' 
      + req.param("userName") + '","'
      + req.param("password") + '","' 
      + req.param("role") + '","' 
      + req.param("firstName") + '","'  
      + req.param("lastName")  + '",true)' 
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result + ' inserted');
            res.send(result);
            /*if(result[0].count>0){
                console.log("true efdfdfdf");
            }else{
                console.log("false sdfsfsfsf");
            }*/
        }
    });
});

router.get('/viewUsers',function(req, res, next){
    console.log("inside viewUsers ");

    connection.query(
      'select * from users' 
      ,function(err,result){
        if(err) { 
            console.log(err);
        }
        else{
            console.log(result + ' selected');
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