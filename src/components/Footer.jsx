import React from 'react'

//learning props 
function hello ({name}) {
  return name; 
}
hello({name: "John"});  


const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer


