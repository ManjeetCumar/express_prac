var dbPerson = require('../models/person')

exports.addPerson = (req, res)=>{
    if(!req.body.name || !req.body.age ){
        res.json({
            sucess: false,
            msg: "Please enter all details"
        })
    }
    else{
      new dbPerson({
      name: req.body.name,
      age: req.body.age,
      phone: req.body.phone,
      address:{
          line1: req.body.line1,
          line2: req.body.line2,
          city: req.body.city,
          state: req.body.state,
          pincode: req.body.pincode,
          country: req.body.country
         }
      //hobbies: req.body.hobbies
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
  }

  exports.getPersons= (req, res)=> {
      dbPerson.find({},(err, data)=>{
          if(err){
                res.json({
                    sucess: false,
                    msg: "something went wrong"
                })
          }
          else{
            res.json({
                sucess: true,
                msg: "All persons",
                data: data
            })
          }
      })
  }

//   exports.logincont = (req, res)=> {
//     dbPerson.find({},(err, data)=>{
//         if(err){
//               res.json({
//                   sucess: false,
//                   msg: "something went wrong"
//               })
//         }
//         else{
//           res.json({
//               sucess: true,
//               msg: "All persons",
//               data: data
//           })
//         }
//     })
// }