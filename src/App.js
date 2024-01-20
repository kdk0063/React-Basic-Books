import { useEffect, useContext } from 'react';

import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList'
import BooksContext from './context/books';

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(()=>{
    fetchBooks();
  }, []);

  return(
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;