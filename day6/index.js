const express = require('express')
const app = express()

app.use("/about/:id", (req, res) => {
    res.send("this is about page")
})

app.use("/detail/:id", (req, res) => {
    res.send("this is detail page")
})

app.use("/home/:id", (req, res) => {
    res.send("this is home page")
})

app.listen(4000 ,()=>{
    console.log("server is running on port 4000")
});