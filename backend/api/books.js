const { getAllBooks, getBook, addNewBook, updateBook, deleteBook } = require('../controllers/booksController');
const router = require('express').Router();

router.get('/getall', getAllBooks);
router.get('/:id', getBook);
router.post('/add', addNewBook);
router.put('/update', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;
