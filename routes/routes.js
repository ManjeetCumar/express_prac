var express = require('express')
var router = express.Router()
var dbUser = require('../models/user')
var addperson = require('./addpersons')

router.post('/addPerson', addperson.addPerson)
router.get('/getperson', addperson.getPersons)
router.post('/registration', (req, res)=>{
    if( !req.body.email || !req.body.password){
        res.json({
            sucess: false,
            msg: "Please enter all details"
        })
    }
    else{
        new dbUser({
            email: req.body.email,
            password: req.body.password
        }).save((err, data) => {
            if(err){
                res.json({
                    success: false,
                    msg: "some error ",
                    err: err
                })
            }
            else{
                res.json({
                    success: true,
                    header: req.headers,
                    body: req.body
                })
            }
          })
        }
})

module.exports = router