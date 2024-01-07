import React, { useState, useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { GlobalContext } from '../../globalContext';

function AddBook() {

    const { addBook } = useContext(GlobalContext);
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const [input, setInput] = useState({
        title: '',
        author: '',
        link: '',
    })

    // const { title, author, link } = input;

    const handleInput = name => e => {
        setInput({...input, [name]: e.target.value})
        setError(null)
    }
    // addIncome(inputState);
    const handleSubmit = e => {
        e.preventDefault();
        addBook(input);
        setInput({
            title: '',
            author: '',
            link: '',
        });
        navigate('/booklist');
    }
    return (
        <div className='add-container'>
            <form className="bookForm" onSubmit={handleSubmit}>
                <label htmlFor="bookName">Book Title</label>
                <input
                    id="bookName"
                    value={input.title}
                    type="text"
                    placeholder="Book Title"
                    maxLength="50"
                    onChange={handleInput('title')}
                    required
                ></input>
                <label htmlFor="bookAuthor">Author</label>
                <input
                    id="bookAuthor"
                    value={input.author}
                    type="text"
                    placeholder="Book Author"
                    maxLength="30"
                    onChange={handleInput('author')}
                    required
                ></input>
                <label htmlFor="link">Where to buy</label>
                <input
                    id="link"
                    value={input.link}
                    type="text"
                    placeholder="Book Author"
                    maxLength="30"
                    onChange={handleInput('link')}
                ></input>
                <input type="submit" value="Add new book"></input>
            </form>
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


export default AddBook;