import React from 'react'

const BookList = ({ list = [] }) => {
  return (
    <div>
        {list.map((item, index) => {
            return (
                <section className={`book ${index % 2 === 0 ? 'primary' : 'secondary'}`}>
                    <p>{item.title}</p>
                    <p>{item.author}</p>
                </section>
            )
        })}
    </div>
  )
}

export default BookList

/*<section className={`book ${index % 2 === 0 ? 'primary' : 'secondary'}`}>
  we are saying if the index divided by 2 and the remainder is 0 therefore an even number, 
  we change the className to "primary", 
  else (as indicated by the colo ":") we change the className to "secondary"
*/