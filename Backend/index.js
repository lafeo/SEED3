require('dotenv').config({path:__dirname+'/.env'});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const portNumber = 8010;

const mongoose = require('mongoose');

const UserRoutes = require('./routes/UserRoutes');
const WritingRoutes = require('./routes/WritingRoutes');

//
app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();

});

mongoose.connect(`mongodb+srv://${process.env['MONGO_USERNAME']}:${process.env['MONGO_PASSWORD']}@seoed.rfnxm.mongodb.net/SeedDatabase?retryWrites=true&w=majority`,{

    useNewUrlParser: true,
     useUnifiedTopology: true
  }).then(client=>{

    console.log("Connected!");

    app.get('/',(req,res,next)=>{
        console.log("Works!!");
        return res.json({
            success:true
        })
    })


    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(portNumber,()=>{
        console.log("Listening on " + portNumber.toString());
    });

    app.use('/writing-routes',WritingRoutes);
    app.use('/user-routes',UserRoutes);
    app.use('/uploads',express.static('uploads'));
  }).catch(e=>{
      console.log("ERROR!");
      console.log(e);
  })



