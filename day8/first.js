const express = require('express');
const app = express();


app.use('/middleware', (req,res,next) =>{
    console.log(`${Date.now()} , ${req.method} , ${req.url}`);
    next();
})

app.get('/middleware',(req, res) =>{
    res.send("get middleware executed successfully");
})

app.post('/middleware',(req, res) =>{
    res.send("post middleware executed successfully");
})

app.delete('/middleware',(req, res) =>{
    res.send("delete middleware executed successfully");
})
app.patch('/middleware',(req, res) =>{
    res.send("patch middleware executed successfully");
})


























// app.use('/middleware',
//     (req, res, next) => {
//         console.log("I'm first middleware");
//         next();
//     },
//     (req, res, next) => {
//         console.log("I'm second middleware");
//         next();
//     },
//     (req, res, next) => {
//         console.log("I'm third middleware");

//         res.send("All middleware executed successfully");
//     }
// );

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
















app.listen(3000, () => {
    console.log('server is running on port 3000');
});