import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

// make sure to adjust your BookForm to accept the addBookToList function as a prop
const BookForm = ({ addBookToList }) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
    });
    // function to handle user updates in input
    const handleChange = (event) => {
        // destructure evemt.target to grab the name and value properties from event object
        const {name, value} = event.target;
        setFormData({
            ...formData, // use the spread operator ensure that existing values are included when we update the object
            [name]: value, // this line updates specific key:value pairs in the object based on the input being typed in to
        });
    }
    // Place this under handleChange
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const payload = {
                title: formData.title,
                author: formData.author,
            }
            const response = await axios.post("https://bookstore-api-six.vercel.app/api/books", payload);
            console.log(response)
            const newBook = {
                id: response.data.id, // response.data to fix
                title: response.data.title, // response.data to fix
                author: response.data.author, // response.data to fix
            }
            addBookToList(newBook);
            toast.success("Book succesfully created!");
        } catch (error) {
            console.log(error.message);
            toast.error("Error creating new book");
        }
    }
    // place above the return statement
  return (
    <form onSubmit={handleSubmit}>
        <h2>Add a new book</h2>
        <label htmlFor="title">
            <p>Book Title</p>
            <input type="text" name="title" id="title" placeholder="Ex: The Song of Achilles" className="form-input" value={formData.title} onChange={handleChange} />
        </label>
        <label htmlFor="author">
            <p>Book Author</p>
            <input type="text" name="author" id="author" placeholder="Ex: Madeline Miller" className="form-input" value={formData.author} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Create Book</button>
    </form>
  )
}

export default BookForm