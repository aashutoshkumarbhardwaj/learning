const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";
const PORT = 3000;

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "ashutopsh@gmail.com",
        password: "123456",
        name: "Ashutosh Prasad",
    },
    {
        username: "raman@gmail.com",
        password: "1234563",
        name: "Raman Kumar",
    },
    {
        username: "prya@gmail.com",
        password: "123456734",
        name: "Priya Kumari",
    },
];

function userExist(username, password) {
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
            return true;
        }
    }
    return false;
}

app.post("/login", function(req, res) {   
    let username = req.body.username;
    let password = req.body.password;

    if (!userExist(username, password)) {
        return res.status(401).json({
            msg: "Invalid username or password"
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({ token });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        return res.json({
            users: ALL_USERS.filter(user => user.username !== username),
        });
    } catch(err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
});
