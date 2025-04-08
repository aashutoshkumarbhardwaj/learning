// method 1 of using express middleware to count the number of 
// 
// 
// requests
// const express = require('express');
// const app = express();


// let numberofRequest =0;
// function calculateRequests(req,res,next){
//   numberofRequest++;
//   console.log(numberofRequest);
//   next();
// }
// app.get("/health_checkup",calculateRequests ,function(req,res){

// });


// app.get("/health_checkup",calculateRequests ,function(req,res){
 
// });

// app.listen(3000);

// method 2 of using express middleware to count the number of req.

// const express = require('express');
// const app = express();



// let numberofRequest =0;
// function calculateRequests(req,res,next){
//   numberofRequest++;
//   console.log(numberofRequest);
//   next();
// }
// app.use(calculateRequests)
// //work after a function 
// app.post("/health_checkup", function(req,res){
//  res.json({
//    msg: "hii bbayy"
//  })
// });


// app.get("/health_checkup", function(req,res){
 
// });

// app.listen(3000);