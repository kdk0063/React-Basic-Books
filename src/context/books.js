import { createContext, useState } from 'react';

import axios from 'axios'

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        console.log(' is this being called')

        const response = await axios.get('http://localhost:3001/books');
            
            console.log('books here', response)

        setBooks(response.data)
    };

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

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id
        });

        setBooks(updatedBooks);
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle })
        
        const updatedBooks = books.map((book) => {
            return book.id === id ? {...book, ...response.data} : book 
        });

        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        createBook,
        deleteBookById,
        editBookById,
        fetchBooks,
    }

    return (
        <BooksContext.Provider value={ valueToShare }>
            {children}
        </BooksContext.Provider>
    )
};

export { Provider };
export default BooksContext;

//import BooksContext, { Provider } from './a/abc'