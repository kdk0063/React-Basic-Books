import { useState } from 'react';

import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList'

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const createdBooks = [ 
      ...books,
      {
        id: Math.round(Math.random() *  9999), //not the best way to generate id... 
        title
      }
    ];  

    setBooks(createdBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    });

    setBooks(updatedBooks);
  }

  const editBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      return book.id === id ? {...book, title} : book 
    });

    setBooks(updatedBooks);
  }

  return(
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;