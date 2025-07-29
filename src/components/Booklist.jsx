import React  from "react";

const BookList = ({list=[]}) => {
    return(
        <div>
            {list.map((item) => {
                return(
                    <section key={item.id}>
                        <p>{item.title}</p>
                        <p>{item.author}</p>
                    </section>
                )
            }
            )}
        </div>
    )
}

