import mongoose from 'mongoose';


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const Book = mongoose.model('books', bookSchema);

export { Book};