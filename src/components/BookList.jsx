import BookShow from "./BookShow.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AlertCircle } from "lucide-react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Loading from "../assets/loading.lottie";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const BookList = ({ books, setBooks }) => {
  const [loading, setLoading] = useState(false);
  const getBooks = async () => {
    setLoading(true);
    try {
      const response = await axios("http://localhost:3004/books");
      if (response?.status === 200) {
        setBooks(response.data);
      } else {
        toast.error("something went wrong");
      }
    } catch (e) {
      toast.error("something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    getBooks();
  }, []);
  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <DotLottiePlayer src={Loading} autoplay loop></DotLottiePlayer>
      </div>
    );
  } else {
    return (
      <div className="p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {books?.length === 0 ? (
          <Alert variant="destructive" className="md:col-span-3 mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>No Books Found</AlertTitle>
            <AlertDescription>Add some books to see them here</AlertDescription>
          </Alert>
        ) : (
          books?.map((book) => {
            return <BookShow key={book.id} book={book} />;
          })
        )}
      </div>
    );
  }
};

export default BookList;
