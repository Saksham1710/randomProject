import { Link } from 'react-router-dom';
import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage('');
  }, []);

  const createBook = async () => {
    try {
      const createBookRequest = { 
        "title" : title,
        "author": author,
        "description": description
      };

      const res = await axios.post('https://randomproject.onrender.com', createBookRequest);
      const book = res.data.BookAdded;
      console.log(book);
      setMessage('Book Created Successfully');
    } catch (err) {
      setMessage("Error");
      console.log('Error from add book', err);
    }
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-info float-left">
              Show Book List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form noValidate>
              <div className="form-group">
                <input
                  id='bookTitle'
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  spellCheck={false}
                  data-ms-editor="true"
                />
              </div>
              <div className="form-group">
                <input
                  id='bookAuthor'
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  spellCheck={false}
                  data-ms-editor="true"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id='bookDescription'
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  spellCheck={false}
                  data-ms-editor="true"
                />
              </div>
              <div className="form-group">
                 <h3 id='InformMessage'>{message}</h3>
              </div>
              <input
                type="button"
                value="Submit"
                className="btn btn-info btn-block mt-4"
                onClick={() => createBook()}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
