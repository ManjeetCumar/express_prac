// var dbPerson = require('../models/person')

// exports.editPerson = (req, res) =>{
//     if( !req.body.name || !req.body.phone || req.bod.age ){
//         res.json({
//             sucess: false,
//             msg: "Please enter all details"
//         })
//     }
//     else{
//         dbPerson.findOne({ _id: req.body.id}, (err, data)=>{
//             if(err){
//                 res.json({
//                     sucess: false,
//                     msg: "something  wrong while searching"
//                 })
//             }
//             else if(!data){
//                 res.json({
//                     sucess: false,
//                     msg: "user not found"
//                 })
//             }else{
//                 dbPerson.findOneAndUpdate({ _id: req.body.id }, { $set:{
//                     name: req.body.name, age: req.body.age }
//                 }})
//             }
//         })
//     }
// }