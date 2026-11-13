const express = require('express');
const app = express();
app.use(express.json());


const bookstore = [
    {id : 1 , name: "goat" , author: "john doe"},
    {id : 2 , name: "lion" , author: "jane smith"},
    {id : 3 , name: "elephant" , author: "alice johnson"},
    {id :4 , name: "tiger" , author: "bob brown"},
]

app.get('/bookstore', (req, res) =>{
    res.send(bookstore);
})

app.get('/bookstore/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const book = bookstore.find(b => b.id === id);
    if (!book) {
        return res.status(404).send('Book not found');
    }
    res.send(book);
});

app.post('/bookstore', (req, res) => {

    if (!req.body || !req.body.name || !req.body.author) {
        return res.status(400).send("Book details are required");
    }

    bookstore.push(req.body);

    console.log(bookstore);

    res.send("Book added successfully");
});

app.delete('/bookstore/:id' , (req,res) => {
    const id = parseInt(req.params.id);
    const bookIndex = bookstore.findIndex(b => b.id === id);
    if (bookIndex === -1) {
        return res.status(404).send('Book not found');
    }
    bookstore.splice(bookIndex, 1);
    res.send("Book deleted successfully");
})





















// app.use(express.json());

// app.get('/user', (req, res) => {
//     res.send({ name: "arihant" });
// });

// app.post('/user', (req , res) => {
//     console.log("post request is working");
//     res.send("post request is wonderful working");

//     console.log(req.body);

//     console.log("data saved successfully");
// })

app.listen(3000, () => {
    console.log('server is running on port 3000');
});