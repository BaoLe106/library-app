import React, { useContext } from 'react';
import {Link, useLocation} from 'react-router-dom'

import { GlobalContext } from '../../globalContext';


function BookDetail() {
    const {books, getAllBooks, deleteBook} = useContext(GlobalContext);
    const location = useLocation();
    
    const book = location.state.data;
    const {id, title, author, link} = book;
    return (
        <div className='container'>
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>{title}</th>
                        
                    </tr>
                    <tr>
                        <th>Author</th>
                        <th>{author}</th>
                    </tr>
                    <tr>
                        
                        <th>Where To Buy</th>
                        <th>
                            <Link to={link} > Book's Link</Link>
                            </th>
                    </tr>
                    <tr>
                        <th>Settings</th>
                        <th>
                            <Link to='/edit' state={{data: book}} >
                                <button>Edit</button>
                            </Link>
                        </th>
                    </tr>
                </tbody>
            </table>
            <div className='link-container'>
                <Link to='/'>
                    <button>Go to homepage</button>
                </Link>
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
export default BookDetail;