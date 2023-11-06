import AddBook from "./components/AddBook.jsx";
import BookList from "./components/BookList.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useState} from "react";

const App = () => {
    const [books, setBooks] = useState([]);
    return (
    <div className="mx-auto pt-12 h-screen">
      <AddBook books={books} setBooks={setBooks} />
      <BookList books={books} setBooks={setBooks} />
      <ToastContainer
        role="alert"
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        closeOnClick
        draggable
      />
    </div>
  );
};

export default App;
