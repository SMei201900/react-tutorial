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