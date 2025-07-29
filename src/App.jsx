import Footer from "./components/Footer";

const numbers =[1,2,3,4,5]
const totalSum = numbers.reduce((accumulatedSum, currentNumber) => accumulatedSum + currentNumber, 0); 

function App() {
  const sum = 2 + 2;
  return (
	<section>
  	<h1>Here is the sum: {sum}</h1>
  	<p className="cool">Hello there</p>
    //
  	{numbers.map((number) => {
    	return (
      	<p>{number}</p>
    	)
  	} ) }
  	<p> Total sum: {totalSum}</p>
	</section>
  )
}

export default App



/*
import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

/*export default is you putting ONE main tool into a tool box with NO special labeling.
  When someone asks for "the tool," you know its just that one thing inside the box.*/

/*useState is a function provided by react, we are calling it.
  It is used to keep track and manage functional components. 
  Here it is used to change the counter when I click the button. 
*/