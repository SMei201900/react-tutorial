import axios from "axios";
export async function getBooks(){ // async function to get books from the bookstore API
    const response = await axios.get("https://bookstore-api-six.vercel.app/api/books");
    return response.data;
}
export async function createBook(){}
export async function updateBook(){}
export async function deleteBook(){}