import { useState } from 'react';

import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList'

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, books])
  };

  return(
    <div>
      <BookCreate onCreate={createBook} />
      <BookList books={books}/>
    </div>
  );
}

export default App;