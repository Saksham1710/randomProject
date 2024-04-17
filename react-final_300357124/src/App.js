import "./Components/styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BookList from './Components/FrontPage_BookList';
import CreateBook from "./Components/CreateBook";
import UpdateBook from "./Components/UpdateBook";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/create-book" element={<CreateBook />} />
            <Route path="/update-book/:id" element={<UpdateBook />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
