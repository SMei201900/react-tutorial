import { useState } from "react";
import Footer from "./components/Footer";
import BookList from "./components/BookList";

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
  const [searchTitle, setSearchTitle] = useState("hi");
  const filteredBooks = bookList.filter((book) => book.title.toLowerCase().includes(searchTitle.toLowerCase()));
  return (
    <section>
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
  It is used to keep track and manage functional components. 
  Here it is used to change the counter when I click the button. 
*/