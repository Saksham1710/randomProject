import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function UpdateBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();
    console.log('id:', id);

    useEffect(() => {
        const fetchBook = async () => {
            if (!id) return;
            try {
                const response = await axios.get(`https://randomproject.onrender.com/${id}`);
                const { title, author, description } = response.data;
                setTitle(title);
                setAuthor(author);
                setDescription(description);
                
            } catch (error) {
                console.log('Error fetching book:', error);
            }
        };
        fetchBook();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updateData = { title, author, description };
            const response = await axios.put(`https://randomproject.onrender.com/${id}`, updateData);
            console.log("Book updated:", response.data);
            alert('Book updated successfully!');
            navigate("/");
        } catch (err) {
            console.error('Error updating book:', err);
            alert('Failed to update book.');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Update Book</h1>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} /><br/>
            <input type='text' value={author} onChange={e => setAuthor(e.target.value)} /><br/>
            <input type='text' value={description} onChange={e => setDescription(e.target.value)} /><br/>
            <button type='submit'>Update Book</button>
        </form>
    );
}

export default UpdateBook;
