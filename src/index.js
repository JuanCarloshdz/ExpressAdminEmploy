const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000)

//middle ware 
app.use(express.json())

//routes
app.use(require('./routes/employees'))
app.listen(app.get('port'), ()=>{

    console.log('Server on port ' + app.get('port'));
    console.log('http://localhost:3000/');

});