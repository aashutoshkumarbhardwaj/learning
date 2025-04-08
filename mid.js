const express = require('express');
const app = express();

// Health check route
app.get("/health", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.headers.kidneyid; // Note: headers are case-insensitive, but conventionally lowercase

    if (username !== "aashutosh" || password !== "pass") {
        res.status(400).json({ msg: "Invalid credentials" });
        return;
    }

    res.json({
        msg: "fine",
        kidneyId: kidneyId // Optional: echo back the kidneyId if needed
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
