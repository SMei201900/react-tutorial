import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [bookList, setBookList] = useState([]); 
  //setting searchtitle to item of searchTitle from localStorage if it exists. If not we have a fallback value of "hi"
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  // isLoading and isError should go under bookList state
  const [searchTitle, setSearchTitle] = useState(localStorage.getItem("searchItem") || "hi");
  const filteredBooks = bookList.filter(
    (book) => book.title.toLowerCase().includes(searchTitle.toLowerCase())
    || book.author.toLowerCase().includes(searchTitle.toLowerCase()));
  
  useEffect(() => {
    //this function updates the searchTitle value in localStorage everytime the searchTitle variable is updated in the application
    localStorage.setItem("searchTitle", searchTitle); 
    }, {searchTitle}); 
    //by adding searchTitle in the dependency array everytime the seachTitle variable gets changed, we call the useEffect function 
  
  useEffect(() => {
    async function getBooks() { //async function to get books from bookstore API 
      try { 
        setIsLoading(true);
        //put this at the beginning of function to track the isLoading state through the function 
        const response = await axios.get("https://bookstore-api-six.vercel.app/api/books")
        /*using axios to send HTTP GET request to the endppoint and storing it in a variable called "response"*/
        setBookList(response.data); 
        //using setBookList function to update bookList to response.data from API
        toast.success("Success fetching books");
        //using toast.success to let the UI know this request was successful 
        setIsLoading(false);
        //if this block of code was successful, we MUST set isLoading to "false" for the UI to know the data is loaded 
      } catch (error) {
        setIsLoading(false);
        setIsLoading(error.message); //if an error occurs then set isError to the error.msg 
        toast.error("Error fetching books"); 
        //using toast.error to let the UI know if the request was a failure 
      } 
    }
    getBooks(); //we need to call getBooks() after we have defined it in our function 
  }, [] );  

  return (
    <section>
      <ToastContainer />
      <SearchBar searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      <BookList list={filteredBooks} />
      <Footer />
    </section>
  )
}

export default App



/*export default App
  export default is you putting ONE main tool into a tool box with NO special labeling.
  When someone asks for "the tool," you know its just that one thing inside the box.*/

/*useState is a function provided by react.
  We are calling it with    import { useState } from 'react' 
  It is used to keep track and manage functional components 
    AKA it tells the program what to remember and potentially display 
  Here it is used to change the counter when I click the button. 
*/

/*const [bookList, setBookList] = useState([...list]);  
    "const" here meaning we created a variable 
    The variable is "bookList"
    "setBookList" is a function which we also created with "const"
      It is created so that if I want to CHANGE the value of the variable, 
      I can use this function to do so. 
*/

//The ... in  useState([...list]);   means we made a copy of the "list" 

/* <ToastContainer /> under return() is required to use react-toastify. 
It shows a pop-up with a delete button that has a green (or red) loading bar that will eventually disappear*/
