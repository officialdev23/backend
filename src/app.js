const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const port = process.env.PORT || 3000;
const Register = require('./models/registers')

const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(staticPath))
app.set("view engine", "hbs");
app.set("views", viewsPath)
hbs.registerPartials(partialsPath);

app.get("/",(req,res) =>{
    res.render("index");
});

app.post("/register", async(req,res) =>{
    try {
        const regEmp = new Register({
            fullname : req.body.fullname,
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        })
        const registered = await regEmp.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(400).send(error)
    }
});

app.get("/register",(req,res) =>{
    res.render("register");
});

app.listen(port, () =>{
    console.log(`server is running at port ${port}`)
})