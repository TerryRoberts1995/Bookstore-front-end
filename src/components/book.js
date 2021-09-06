import React from 'react';

const Book = (props) => {
    const {id, author, title, review} = props.book;
    
    return(
        <div className="book-container" key= {id}>
            <div className='book-information'>
                <div className ="book-field">
                    Title: {title}
                </div>
                <div className ="book-field">
                    Author: {author} 
                </div>
                <div className ="book-field">
                    Review: {review}
                </div>
                <button onClick={() => props.deleteBook()}className="delete-button">Delete</button>
            </div>
        </div>
    )
}

export default Book;