// Create - POST
const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: 'New Title',
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

// Ошибку можно отлавливать во внешнем коде, т.е. catch привязывать к вызывающей промис функции
addBook(newBook).catch(error => console.log(error));
