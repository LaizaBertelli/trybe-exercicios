const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

// Retorna apenas livros associados com um determinado autor
const getByAuthorId = async (authorId) => {
  const SQLQuery = 'SELECT * FROM model_example.books WHERE author_id=?';
  const [books] = await connection.execute(SQLQuery, [authorId]);

  return books.map(serialize);
};

// Retorna todos os livros do database
const getAllBooks = async () => {
  const SQLCommand = 'SELECT * FROM model_example.books';
  const [books] = await connection.execute(SQLCommand);

  return books.map(serialize);
};

const findById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?';
  const [books] = await connection.execute(query, [id]);

  return books.map(serialize);
};

const isValid = async (title, authorId) => {
  const [dbAuthors] = await connection.execute('SELECT DISTINCT(id) FROM model_example.authors');
  if (!title || title.length < 3) return false;
  if (typeof title !== 'string') return false;
  const idExists = dbAuthors.find((id) => id ===  authorId);
  if (!idExists) return false;

  return true;
};

const create = (title, authorId) => connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, authorId]);

module.exports = {
  getAllBooks,
  getByAuthorId,
  findById,
  isValid,
  create,
};