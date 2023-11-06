import { Input } from "./ui/input.jsx";
import { Button } from "./ui/button.jsx";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const AddBook = ({ books, setBooks }) => {
  const [bookName, setBookName] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(loading, "!!!");

  const addBook = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:3004/books", {
        id: Math.floor(Math.random() * 200) + 1,
        title: bookName,
      });
      toast.success("Book added successfully");
      setBookName("");
      setBooks([
        ...books,
        { id: Math.floor(Math.random() * 200) + 1, title: bookName },
      ]);
    } catch (e) {
      toast.error("something went wrong");
    }
    setLoading(false);
  };
  return (
    <div className="flex w-full max-w-sm mx-auto items-center space-x-2 px-12">
      <Input
        value={bookName}
        onChange={(e) => {
          setBookName(e.target.value);
        }}
        type="text"
        placeholder="Enter book name here..."
      />
      <Button
        disabled={loading || bookName.length === 0}
        onClick={addBook}
        type="submit"
      >
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : ""}
        ADD
      </Button>
    </div>
  );
};

export default AddBook;
