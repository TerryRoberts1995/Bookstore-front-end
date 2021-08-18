import React from 'react';
import Book from './book';

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            allBooks: []
        }

        this.getAllBooks = this.getAllBooks.bind(this);
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
    
    componentWillMount() {
        this.getAllBooks();
    }

    render() {
        return (
            <div className='home-book-container'>
                {this.state.allBooks.map(book => {
                    return <div key={book.id}>
                        <Book book={book}/>
                    </div>
                })}
            </div>
        )
    }
}