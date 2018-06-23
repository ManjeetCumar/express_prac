var express = require('express')
var app = express()
var config = require('./config/config.json')
var mongoose = require('mongoose')
const port = process.env.port || config.port
var dbPerson = require('./models/person');
var bodyParser = require('body-parser')

var router = require('./routes/routes')

mongoose.connect('mongodb://localhost/test', (err, data)=>{
    if(err){
        console.log('Database not connceted');
    } else {
        console.log('Database connected');
    }
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/user', router)
// var newPerson = new dbPerson({
    
//     name: 'zenways',
//     age: 22,
//     phone: 9711190885,
//     address:{
//         line1: '452 A',
//         line2: 'Gopal Nagar, Najafgarh',
//         city: 'Delhi',
//         state: 'Delhi',
//         pincode: 110043,
//         country: 'India'
//     },
//     hobbies: ['Programming','Music']
// })

// newPerson.save((err, data) => {
//     if(err){
//         console.log('err saving data : ',err)
//     }
//     else console.log('saved successfully : ', data)
// })

// dbPerson.find({}, (err, data)=>{
//     if(err){
//         console.log('Err');
//     }
//     else if(!data || data.length == 0){
//       console.log("No data");
//     }
//     else console.log(data);
// });

app.get('/abc', (req, res) =>{
    console.log('here')
    res.json({
        success: true
    })
})
app.post('/abc', (req, res) =>{
    console.log('here body')
    res.json({
        success: true,
        header: req.headers,
        body: req.body
    })
})

app.listen(port, function(){
    console.log("Server Started at ", port);
});