const connection = require('./connection');

const serialize = (userData) => ({
  id: userData.id,
  firstName: userData.first_name,
  lastName: userData.last_name,
  email: userData.email,
  password: userData.password,
});

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT first_name, last_name, email FROM model_example.users',
  );
  if (!users) return [];

  return users.map(serialize);
};

const getById = async (id) => {
  const query = 'SELECT first_name, last_name, email FROM model_example.users WHERE id = ?';
  const [users] = await connection.execute(query, [id]);
  if (users.length === 0) return null;
  return users.map(serialize);
};

const isValid = (firstName, lastName, email, password) => {
  if (!firstName) return {error: true, message: 'O campo "first_name" é obrigatório' };
  if (!lastName) return {error: true, message: 'O campo "last_name" é obrigatório' };
  if (!email) return {error: true, message: 'O campo "email" é obrigatório' };
  // Validação da senha
  if (!password) return {error: true, message: 'O campo "password" é obrigatório' };
  if (typeof password !== 'string') return {error: true, message: 'O campo "password" deve ser uma string' };
  if (password.lenght < 6) return {error: true, message: 'O campo "password" deve ter mais que 6 caracteres' };

  return {error: false}
};
const create = async (firstName, lastName, email, password ) => {
  await connection.execute(
    'INSERT INTO model_example.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]);

  return {
    id,
    firstName,
    lastName,

  };
};

module.exports = {
  getAll,
  getById,
  isValid,
  create,
};