// Read - GET
const BASE_URL = 'http://localhost:3000';

// буквально принеси книги
function fetchBooks() {
  return fetch(`${BASE_URL}/books`)
    .then(response => response.json());
}

// буквально принеси книгу по id
function fetchBooksById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`)
    .then(response => response.json());
}


fetchBooks();
fetchBooksById(4);
