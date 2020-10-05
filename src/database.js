const mysql = require('mysql');

const mySqlCon =mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'password',
    database:'company',

});

mySqlCon.connect( function (err){

    if(err){
        console.log(err);
        return
    }else{
        console.log('Db is conected')
    }
} );

module.exports = mySqlCon;