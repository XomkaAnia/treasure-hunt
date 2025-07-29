let express = require("express");
let path = require("path");

let app = express();
const PORT = 3333;


// Middleware для форм
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "index.html"));
})

app.get('/form', (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "form.html"));
});

app.get('/login', (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.post("/form", (req, res) => {
    let code = req.body.code || "";
    let correctCode = "12345"
    if (code.length < 3){
        let error = {
            error: "code must be longer than 3 symbols"
        };
        res.json(error)
    };
    if (code === correctCode) {
        res.redirect("/treasure");
    } else{
        res.send(`<div>wrong</div>
        <a href="/form">Here</a>`)
    };
});

app.post("/login", (req, res) => {
    const { login, password} = req.body;
    
    if (login === "admin" && password === "1234") {
        res.send("congrats u logged in");
    } else{
        res.status(401).send("incorrect");
    };
});

app.get('/crash', (req, res) =>{
    throw new Error('smth went wrong');
});

app.use((err, req, res, next) => {
    console.error('Помилка:', err.message);
    res.status(500).send(`
        <h1>500 — Внутрішня помилка сервера</h1>
        <p>Наша команда вже працює над цим!</p>
        <a href="/">Назад</a>
    `);
});

app.get('/treasure', (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "treasure.html"));
}) 

app.use((req, res) =>{
    res.status(404).send(`
    <h1>Wrong path...</h1>
    <p>No treasure here</p>
    <a href="/">🔙 return?</a>`);
});


app.listen(PORT, () => {
    console.log(`Сервер працює на http://localhost:${PORT}`);
})