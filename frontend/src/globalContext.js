import React, { createContext, useState } from "react"
import axios from 'axios';

const BASE_URL = "http://localhost:3500/";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    
    const addBook = async(book) => {
        const response = await axios.post(`${BASE_URL}add`, book)
        .catch((error) => {
            console.log(error);
        });
        // setBooks(response.data);
        getAllBooks();
    };

    const getAllBooks = async() => {
        const response = await axios.get(`${BASE_URL}getall`)
        .catch((error) => {
            console.log(error);
        });
        setBooks(response.data);
    };

    const editBook = async (edited) => {
        const response = await axios.put(`${BASE_URL}update`, edited)
        .catch((error) => {
            console.log(error);
        });
        getAllBooks();
    };

    const deleteBook = async (id) => {
        // console.log(id)
        const response = await axios.delete(`${BASE_URL}delete/${id}`)
        .catch((error) => {
            console.log(error);
        });
        getAllBooks();
    };
    return (
        <GlobalContext.Provider value={{
            books,
            getAllBooks,
            addBook,
            editBook,
            deleteBook,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    );
};