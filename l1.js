// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// // Middleware to parse JSON body
// app.use(bodyParser.json());

// // POST route
// app.post('/backend-api/conversation', (req, res) => {
//   const message = req.body.message;
//   res.json({
//     output: "2++2=4"
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
const express = require('express');
function calculate(n){
    let ans=0;
    for ( let i=0;i<n;i++){
        ans+=i+1;
    }
    return ans;
}
const app = express();
app.get("/", function(req, res){
    const n=req.query.n;
    const result=calculate(n);
    res.send(ans);
})
app.listen(2000);
