import React, { useEffect, useContext } from 'react';
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../globalContext';


function BookList() {
    const {books, getAllBooks, deleteBook} = useContext(GlobalContext);
    useEffect(() => {
        getAllBooks();
    }, []);

    const handleDeleteBook = async (bookId) => {
        // Assuming deleteBook returns a Promise
        await deleteBook(bookId);
        // Fetch the updated list of books after deletion
        getAllBooks();
      };
    return (
            <div className='container'>
                <div className='table-container'>

                    
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Where To Buy</th>
                                <th>Settings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => {
                                return (
                                    <tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>
                                            {book.link !== "" ? (
                                                <Link to={book.link}>Book's Link</Link>                                
                                            ):(
                                                <div>No information yet</div>
                                            )}
                                            
                                        </td>
                                        <td>
                                            <Link to='/detail' state={{data: book}} >
                                                <button>Detail</button>
                                            </Link>
                                            <Link to='/edit' state={{data: book}} >
                                                <button>Edit</button>
                                            </Link>
                                            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='link-container'>
                    <Link to='/'>
                        <button>Go to homepage</button>
                    </Link>
                    <Link to='/add'>
                        <button>Add more book</button>
                    </Link>
                </div>
            </div>
            
        
    );
}
export default BookList;