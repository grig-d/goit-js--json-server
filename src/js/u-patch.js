// Create - POST
const BASE_URL = 'http://localhost:3000';

// дженерик функция
function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(update),
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options)
    .then(response => response.json())
    .then(console.log);
}

updateBookById({ title: 'Книга по Node.js' }, 10);
updateBookById({ rating: 1 }, 8);
updateBookById({ rating: 4, author: 'Mango' }, 12);
