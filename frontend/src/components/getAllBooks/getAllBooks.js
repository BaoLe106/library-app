import React, {  useEffect, useContext } from 'react';
import {Link} from 'react-router-dom'
import { GlobalContext } from '../../globalContext';


function GetAllBooks() {
    const {books, getAllBooks, deleteBook} = useContext(GlobalContext);
    useEffect(() => {
        getAllBooks();
    }, []);
    return (
        <div className='container'>
            <div className='table-container'>

                <table>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            
                        </tr>
                        {books.map((book) => {
                            return (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className='link-container'>
                <Link to='/booklist'>
                    <button>Go to book list</button>
                </Link>
                <Link to='/add'>
                    <button>Add more book</button>
                </Link>
            </div>
        </div>
    );
}
export default GetAllBooks;