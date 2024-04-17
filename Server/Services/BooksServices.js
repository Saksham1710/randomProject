import express from "express";
import { StatusCodes } from "http-status-codes";
import { Book } from "../ModelSchema/BookModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title, author, description } = req.body;
  const newBook = new Book({
    title,
    author,
    description,
  });

  try {
    const savedBook = await newBook.save();
    res.status(StatusCodes.CREATED).json({ BookAdded: savedBook });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { title, author, description } = req.body;
  console.log("title:", title);
  console.log("author:", author);
  console.log("description:", description);

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, description },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Book not found" });
    }
    res.json({ BookUpdated: updatedBook });
    console.log("Book updated successfully");
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
});

export default router;
