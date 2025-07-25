import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//.jsx allows developers to write in HTML-LIKE code within JS File 

/*StrictMode allows React to run extra checks and provide warnings aka for debugging.
  createRoot allows us to essentially display things; it creates our React Project
*/

/*we find the element in our HTML file that contains the ID of "root" 
    Look at index.html for that ID
*/

/*
  index.css is NOT called in index.html but here meaning we did not use LINK REL in HTML file 
*/

/*We exported App.js with "export default App" 
  and now we are calling it here with IMPORT 
  and then we are actually call it with <App /> 
*/

/*We call this file (main.jsx) in index.html 
  Here, we then call app.jsx 
  Meaning they are linked like so: 
    index.html --> main.jsx --> app.jsx
*/
