import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import BookCard from "./BookCard";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    try {
      const response = await axios.get('https://randomproject.onrender.com/');
      setBooks(response.data);
    } catch (error) {
      console.log('Error from BookList:', error);
    }
  }

  const deleteBook = async (id) => {
    try {
      await axios.delete('https://randomproject.onrender.com/' + id);
      getAllBooks();
    } catch (error) {
      console.log('Error from delete book:', error);
    }
  }


  //https://finalexam-300357124.onrender.com/

  // Function to handle showing the UpdateBook component


  const bookList = books.length === 0
  ? <p>There are no book records!</p>
  : books.map((book) => ( // Removed index from parameters
      <BookCard
        book={book}
        deleteBook={() => deleteBook(book._id)}
      />
  ));


  return (
    <div className='BookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-book'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
}

export default BookList;
