require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());

// MODELS
const Author = require('./models/Author');
const Book = require('./models/Book');

const PORT = process.env.PORT || 3001;

// GET
app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
});
app.get('/books', async (req, res) => {
  const { author_id } = req.query;
  
  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAllBooks();

  return res.status(200).json(books);
});
app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Author not found' });

  return res.status(200).json(author);
});
app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  return res.status(200).json(book);
});

//POST
app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Não foi possível cadastrar um novo autor, dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  return res.status(200).json({ message: 'Autor cadastrado com sucesso' });
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if (!Book.isValid(title, author_id)) {
    return res.status(404).json({ message: 'Não foi possível cadastrar um novo livro, dados inválidos' });
  }

  await Book.create(title, author_id);

  return res.status(200).json({ message: 'Livro cadastrado com sucesso' });
});


app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`)
});