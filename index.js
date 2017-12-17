var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); //allows us to get the right data and post it to database/API.
var routes = require('./src/routes/crmRoutes');
const app = express(); //create an instance of express
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
  useMongoClient:true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended:true})); //setting JSON to work when we do our post request
app.use(bodyParser.json());

routes(app); //run the routes funtion to create all the routes

app.get('/',(req,res)=>
  res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, ()=>
  console.log(`Your server is running on port ${PORT}`)
);
