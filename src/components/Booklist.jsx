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