const express = require("express");
const app = express();

let numberofRequest = 0;
function calculateRequests(req, res, next) {
  numberofRequest++;
  console.log(numberofRequest);
  next();
}
app.use(calculateRequests);
//work after a function
app.use(express.json());

app.post("/health_checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidneylength = kidneys.length;
  

  res.send("you have " + kidneylength + " kidneys");
});

app.listen(3000);
