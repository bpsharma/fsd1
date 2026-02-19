const express = require('express');
const app = express();
app.use(express.json());

// In-memory storage for books
let books = [];

// Add a new book
app.post('/addBook', (req, res) => {
    const { bookno, title, price } = req.body;
    const book = {
        bookno: bookno,
        title: title,
        price: price
    };
    books.push(book);
    res.send({
        message: "Book added successfully",
    });
});

// Show all books
app.get('/showAllBooks', (req, res) => {
    res.json(books);
});

// Search for a book by book number
app.get('/searchBook/:bookno', (req, res) => {
    const bookno = req.params.bookno;
    const book = books.find(b => b.bookno == bookno);
    if (book) {
        res.json(book);
    } 
    else {
        res.status(404).send({
            message: "Book not found"
        });
    }
});


// Update book details
app.put('/updateBook', (req, res) => {
    const {bookno, title, price } = req.body;
    const index = books.findIndex(b => b.bookno == bookno);
    if (index !== -1) {
        books[index].title = title;
        books[index].price = price;
        res.send({
            message: "Book updated successfully",
        });
    } 
    else {
        res.status(404).send({
            message: "Book not found"
        });
    }
});

// Delete a book by book number
app.delete('/deleteBook/:bookno', (req, res) => {
    const bookno = req.params.bookno;
    const index = books.findIndex(b => b.bookno == bookno);
    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        res.send({
            message: "Book deleted successfully",
        });
    } else {
        res.status(404).send({
            message: "Book not found"
        });
    }
});

app.listen(9999, () => {
    console.log("Server running on http://localhost:9999");
});
