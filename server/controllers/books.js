// define the book model
import booksModel from '../models/books.js';

/* GET books List page. READ */
export function displayBookList(req, res, next) {
    // find all books in the books collection
    booksModel.find((err, booksCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Book List', page: 'books/list', books: booksCollection });
    });
}

//  GET the Book Details page in order to add a new Book
export function displayAddPage(req, res, next) {
// This will render the book details page with a blank form and passes the apporiate values for names an propert and blank values property 
    router.get('/add', (req, res) => {
        res.render('book-details', {
          name: 'Add Book',
          books: {}
        });
      });
}

// POST process the Book Details page and create a new Book - CREATE
// Uses values from the name attirbutes from each field in the book detail page , the user also gets redirected back to the booklist page when done.
export function processAddPage(req, res, next) {

    router.post('/add', (req, res) => {
        let book = new Book({
          name: req.body.name,
          author: req.body.author,
          published: req.body.published,
          description: req.body. description,
          price: req.body.price
        });
        book.save((err) => {
          if (err) {
            console.log(err);
          } else {
            res.redirect('/books');
          }
        });
      });
}

// GET the Book Details page in order to edit an existing Book
//uses the id from the URL to select the book to be updated
export function displayEditPage(req, res, next) {

    router.get('/:id', (req, res) => {
        let id = req.params.id;
        Book.findById(id, (err, book) => {
          res.render('book-details', {
            title: 'Edit Book',
            books: book
          });
        });
      });
}

// POST - process the information passed from the details form and update the document
//to edit an existing book in the database. The user will then be redirected back to the BookList page
export function processEditPage(req, res, next) {
    router.post('/:id', (req, res) => {
        let id = req.params.id;
        let book = {};
        book.title = req.body.title;
        book.author = req.body.author;
        book.published = req.body.published;
        book.description = req.body.description;
        book.price = req.body.price;
      
        let query = {_id: id};
        Book.update(query, book, (err) => {
          if (err) {
            console.log(err);
          } else {
            res.redirect('/books');
          }
        });
      });
}

// GET - process the delete by user id 
//and pass the id to the book model's remove method to delete the book from the database. 
export function processDelete(req, res, next) {
    router.get('/delete/:id', (req, res) => {
        let id = req.params.id;
        Book.remove({_id: id}, (err) => {
          if (err) {
            console.log(err);
          } else {
            res.redirect('/books');
          }
        });
      });
}