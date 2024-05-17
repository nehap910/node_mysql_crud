const express = require('express');
app = express();

bodyParser = require('body-parser');

require('express-async-errors')
const db = require('./db');
 bodyparser = require('body-parser');

employeeroutes = require('./controllers/employee.controller');



//Middleware

app.use(bodyparser.json());
app.use('/api/employees',employeeroutes)

app.use((err,req,resp,next)=>{
    console.log(err)
    resp.status(err.status || 500).send('Something went Wrong!')
})

db.query("SELECT 1")
.then(() =>{
    app.listen(3000,
        ()=>console.log('Server started at port 3000'));
        console.log('Db Connection succeeded')
})
.catch(err=>console.log('db Connection failed. \n'+err))

