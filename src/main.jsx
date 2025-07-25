import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*We exported App.js with "export default App" 
  and now we are calling it here with IMPORT 
  and then we are actually call it with  <App /> 
*/

/*We call this file in index.html 
  Here, we then call app.jsx 
  So think of it as linked index.html --> main.jsx --> app.jsx
*/

/*
  index.css is NOT called in index.html but here aka we did not use the link rel that we typically do
*/