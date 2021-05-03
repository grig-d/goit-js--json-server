// Create - POST
const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: 'Тестовая книга по CSS',
  author: 'Я',
  genres: ['CSS'],
  rating: 9,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(response => response.json());
}

addBook(newBook);
