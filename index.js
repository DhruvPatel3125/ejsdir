const express = require("express")
const app = express()
const path = require("path")
const port = 3000;


app.get("/",(req,res)=>{
    res.render("home.ejs")
});


app.get("/hello",(req,res)=>{
    res.send("hello.")
});

app.get("/ig/:username",(req,res) => {
    const followers = ["dhruv","janu"]
    let { username} = req.params;
    res.render("instagram.ejs",{username},{followers})
})

app.get("/rolldic",(req,res)=>{
    let dicval = Math.floor(Math.random()*6)+1;
    res.render("rolldic.ejs",{ num:dicval });
});


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))