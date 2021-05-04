const BASE_URL = 'http://localhost:3000';

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const response = await fetch(`${BASE_URL}/books`, options);
  const newBook = await response.json();

  return newBook;
}

async function addBookAndUpdateUI() {
    try {
        const book = await addBook({});
        console.log(book);
  } catch (error) {
    console.log(error);
  }
}

addBookAndUpdateUI();

// //
// // перепишем функцию на async/await
// function fetchBooks () {
//   return fetch(`${BASE_URL}/books`).then(res => res.json());
// }
async function fetchBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  const books = await response.json();
  return books;
}

fetchBooks().then(console.log);

// //
// // перепишем функцию на async/await
// function fetchBookById (bookId) {
//   return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
// }
async function fetchBookById(bookId) {
  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  const book = await response.json();
  return book;
}
  
fetchBookById(4);

// 1:09:50