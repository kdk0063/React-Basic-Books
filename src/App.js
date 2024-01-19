import { useState, useEffect } from 'react';

import axios from 'axios';

import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList'

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data)
  }

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title
    });

    const createdBooks = [ 
      ...books,
      response.data
    ]

    setBooks(createdBooks)
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

  useEffect(()=>{
    fetchBooks();
  },[])

  return(
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;