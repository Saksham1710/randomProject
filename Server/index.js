import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bookRoute from "./Services/BooksServices.js";
import connectDb from "./Db.js";

const port = 5000;

const app = express();
connectDb();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(bookRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
