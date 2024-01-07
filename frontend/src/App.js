import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import GetAllBooks from './components/getAllBooks/getAllBooks';
import BookList from './components/bookList/bookList';
import BookDetail from "./components/bookDetail/bookDetail";
import AddBook from "./components/addBook/addBook";
import EditBook from "./components/editBook/editBook";
import Header from "./components/header/header";
import { GlobalProvider } from "./globalContext";
function App() {
  return (
    <div className="App">
      <Header/>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetAllBooks/>}/>
            <Route path="/booklist" element={<BookList/>}/>
            <Route path="/detail" element={<BookDetail/>}/>
            <Route path="/add" element={<AddBook/>}/>
            <Route path="/edit" element={<EditBook/>}/>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
