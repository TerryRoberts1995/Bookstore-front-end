import React from 'react';
import axios from 'axios';
import Book from './book';

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            allBooks: [],
            user_id: 1,
        }

        this.getAllBooks = this.getAllBooks.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    getAllBooks() {
        fetch('http://127.0.0.1:5000/book/get')
        .then(response => response.json())
        .then(response => {
            console.log(response);

            this.setState({
                allBooks: response
            })
        }).catch(error => console.log(error));
    }
    
    deleteBook(id) {
        axios.delete(`http://127.0.0.1:5000/book/delete/${id}`,
        {
            headers: {
                content: "application/JSON"
            }
        })
        .then(res => {
            this.setState({
                allBooks: this.state.allBooks.filter(book => {
                    return book.id !== id
                })
            })

            console.log(this.state.allBooks)
        }).catch(err => err);
    }

    editBook() {
        console.log('Edit Book. "TEST"');
    }

    componentWillMount() {
        this.getAllBooks();
    }

    render() {
        return (
            <div className='home-book-container'>
                <h1>Books</h1>
                {this.state.allBooks.map(book => {
                    return <div className="book-listing" key={book.id}>
                        <Book book={book} deleteBook={() => this.deleteBook(book.id)}/>
                    </div>
                })}
            </div>
        )
    }
}