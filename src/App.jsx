import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import axios from "axios"
import { ToastContainer } from "react-toastify";

const list = [
  {
    id: 1,
    title: 'hi',
    author: 'bye'
  },
  {
    id: 2,
    title: 'joe',
    author: 'mama'
  },
    {
    id: 3,
    title: 'autobiography of eugene krabs',
    author: 'mr.krabs'
  },
];

function App() {
  const [bookList, setBookList] = useState([...list]); 
  //setting searchtitle to item of searchTitle from localStorage if it exists. If not we have a fallback value of "hi"
  const [searchTitle, setSearchTitle] = useState(localStorage.getItem("searchItem") || "hi");
  const filteredBooks = bookList.filter((book) => book.title.toLowerCase().includes(searchTitle.toLowerCase())
    || book.author.toLowerCase().includes(searchTitle.toLowerCase()));
  
    useEffect(() => {
      //this function updates the searchTitle value in localStorage everytime the searchTitle variable is updated in the application
      localStorage.setItem("searchTitle", searchTitle); 
    }, {searchTitle}); 
    //by adding searchTitle in the dependency array everytime the seachTitle variable gets changed, we call the useEffect function 

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

//The ... in   useState([...list]);   means we made a copy of the "list" 

