const {writeFile} = require('jsonfile');

const data = {
    books: require('../model/books.json'),
    setBooks: function (data) { 
        this.books = data;
        const file = '../backend/model/books.json';
        writeFile(file, data, (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
}

const getAllBooks = (req, res) => {
    res.json(data.books);
}

const getBook = (req, res) => {
    const book = data.books.find(book => book.id === parseInt(req.params.id));
    if (!book) {
        return res.status(400).json({ "message": `book ID ${req.params.id} not found` });
    }
    res.json(book);
}

const addNewBook = (req, res) => {
    console.log(req.body);
    const newBook = {
        id: data.books?.length ? data.books[data.books.length - 1].id + 1 : 1,
        title: req.body.title,
        author: req.body.author,
        link: req.body.link
    }

    if (!newBook.title) {
        return res.status(400).json({ 'message': "Book's title is required." });
    }

    data.setBooks([...data.books, newBook]);
    res.status(201).json(data.books);
}

const updateBook = (req, res) => {
    console.log(req.body)
    const book = data.books.find(book => book.id === parseInt(req.body.id));
    console.log(book)
    if (!book) {
        return res.status(400).json({ "message": `book ID ${req.body.id} not found` });
    }
    if (req.body.title) book.title = req.body.title;
    if (req.body.author) book.author = req.body.author;
    book.link = req.body.link;
    const filteredArray = data.books.filter(book => book.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, book];
    data.setBooks(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.books);
}

const deleteBook = (req, res) => {
    console.log(req.params);
    const book = data.books.find(book => book.id === parseInt(req.params.id));
    if (!book) {
        return res.status(400).json({ "message": `book ID ${req.params.id} not found` });
    }
    const filteredArray = data.books.filter(book => book.id !== parseInt(req.params.id));
    data.setBooks([...filteredArray]);
    res.json(data.books);
}

module.exports = {
    getAllBooks,
    getBook,
    addNewBook,
    updateBook,
    deleteBook
}