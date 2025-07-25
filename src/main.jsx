import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*StrictMode allows React to run extra checks and provide warnings aka for debugging.
  createRoot allows us to essentially display things  
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
