import React from 'react';
import axios from "axios";
import './AddBook.css';


const AddBook = () => {
    const handleclick = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const author = e.target.author.value;
        const date = e.target.date.value;
        const image = e.target.image.value;
        const book = { title, author, date, image };

        try {
            await axios.post('https://book-app-0pon.onrender.com/books', book);
            alert("Book added successfully!");
        } catch (error) {
            alert("Error adding the book: " + error.message);
        }
    };

    return (
        <div>
            <h1>Add Book Details</h1>
            <form onSubmit={handleclick}>
                Title: <input type='text' name="title" required />
                Author: <input type='text' name="author" required />
                Date: <input type='date' name="date" required />
                Image URL: <input type='text' name="image" required />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddBook;
