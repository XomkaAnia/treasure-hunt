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
}) 

app.post("/form", (req, res) =>{
    let code = req.body.code || "";
    let correctCode = "12345"
    
    if (code === correctCode) {
        res.redirect("/treasure");
    } else{
        res.send(`<div>wrong</div>
        <a href="/form">Here</a>`)
    };
});


app.get('/treasure', (req, res) =>{
    res.sendFile(path.join(__dirname, "views", "treasure.html"));
}) 

app.listen(PORT, () => {
    console.log(`Сервер працює на http://localhost:${PORT}`);
})