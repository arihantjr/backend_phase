const express = require('express');
const app = express();

app.use((req, res) => {
    res.send({"name" : "arihant" , "age" : 20 , "city" : "chennai" , "state" : "tamilnadu"});
});


app.listen(4000 , ()=>{
    console.log("server is running on port 4000")
})