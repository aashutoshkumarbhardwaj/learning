// schema zed varification 


// const express = require("express");
// const { z } = require("zod");
// const app = express();
// const schema = z.array(z.number())
// // email=> string
// // password=> string
// // country=> "IN" or "US"
// const schema =Zod.object;({
//   email: Zod.string(),
//   password: Zod.string(),
//   country: Zod.literal("IN").or(Zod.literal("US")),
// })  
// app.use(express.json());

// app.post("/health_checkup", function (req, res) {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys);
//   if(!response.success){
//     res.status(411).json({
//       msg: "Input is invalid"
//     })
//   }else{
//   res.send({
//     response
//   });
//   }

// });

// app.listen(3000);



//validateUser = (user) => {
// function validateUser(user){

//     const schema = zod.array(zod.number());
  
//     const response = schema.safeParse(user);
//     console.log(response);
//   }




/// perfect way to do email and password validation


const zod =require ("zod");

function validateUser(user){
  const schema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8),
  });
  const response = schema.safeParse(user);
  console.log(response);
}

validateUser({
  email : "123@gmail.com",
  password : "12345678"
});



// email : string
 //=> email format


 //error handling
// const express = require("express");

const express = require('express');
const app = express();

app.get('/', (req, res) {
  console.log(next);
  res.json({
    message: 'done!'
  })

})

app.use(function(err, req, res, next){
  res.send({
    msg:"internal server error"
  })
})
app.listen(3000);
