
const express = require("express");
const app = express();
// function sum(n){
//     let ans=0;
//     for ( let i=0;i<n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }
// app.get("/", function(req, res){
//     const n =req.query.n;
//     const ans = sum(n);
//     res.send("Hii you ans is "+ans);
// })
// app.listen(1000);

// const express= require("express");
// const app=express();
//  app.get("/",function(req,res){
//      throw new Error("Error occured");
//  })


// const user = {
//     name: "john",
//     kidneys: [
//         { healthy: false }
//     ]
// };
// app.use(express.json());

// app.get("/", function (req, res) {
//     const johnKidneys = user.kidneys;
//     const numberOfKidneys = johnKidneys.length;

//     let healthyKidneys = 0;
//     for (let i = 0; i < johnKidneys.length; i++) {
//         if (johnKidneys[i].healthy) {
//             healthyKidneys++;
//         }
//     }

//     const numberOfUnhealthyKidneys = numberOfKidneys - healthyKidneys;

//     res.json({
//         numberOfKidneys,
//         healthyKidneys,
//         numberOfUnhealthyKidneys
//     });
// });

// app.post("/",function(req,res){
//     const isHealthy = req.body.isHealthy;
//     user.kidneys.push({healthy:isHealthy
//     });
//     res.send("Hii you ans is "+ans);
//     res.json({
//         message: "done!"
//     });
// });


// app.listen(1000, () => {
//     console.log("Server is running on port 1000");
// });




app.use(express.json()); // To parse JSON

const user = {
    name: "john",
    kidneys: [
        { healthy: false }
    ]
};

// GET route
app.get("/", function (req, res) {
    const johnKidneys = user.kidneys;
    const numberOfKidneys = johnKidneys.length;

    let healthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            healthyKidneys++;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - healthyKidneys;

    res.json({
        numberOfKidneys,
        healthyKidneys,
        numberOfUnhealthyKidneys
    });
});

// POST route to add a new kidney
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    user.kidneys.push({ healthy: isHealthy });

    res.json({
        message: "Kidney added successfully"
    });
});

// PUT route to mark all kidneys as healthy
app.put("/hit", function (req, res) {
    for (let i = 0; i < user.kidneys.length; i++) {
        user.kidneys[i].healthy = true;
    }

    res.json({
        message: "All kidneys marked as healthy"
    });
});
app.delete("/update", function (req, res) {
   const newkidneys=[];
   for(let i=0;i<user.kidneys.length;i++){
    if(user.kidneys[i].healthy){
        newkidneys.push({
            healthy:true
        });
    
   }
}
user.kidneys=newkidneys;
res.json({
    msg:"All unhealthy kidneys deleted"

});
});

app.listen(1000, () => {
    console.log("Server is running on port 1000");
});

