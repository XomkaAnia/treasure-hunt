const express = require("express");

const routes = express.Router();
const path = require("path");


routes.get('/login', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, ".." , "views", "login.html"));
});

routes.post("/login", (req, res) => {
    const { login, password } = req.body;
    const correctLogin = 'admin';
    const correctPassword = '12345';
    if (login === correctLogin && password === correctPassword) {
        res.json({ success: true, message: 'congrats u logged in' });
    } else {
        res.status(401).json({ success: false, message: "неправильний логін або пароль" });
    };
});

module.exports = routes;