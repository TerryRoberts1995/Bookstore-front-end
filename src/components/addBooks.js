import React from 'react';

export default class AddBook extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            author: '',
            review: '',
            user_id: 1,
        }

        this.addNewBook = this.addNewBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearMe = this.clearMe.bind(this);
    }

    addNewBook(e) {

        e.preventDefault();

        fetch('http://localhost:5000/book/add',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                review: this.state.review,
                user_id: this.state.user_id
            })
        });
        console.log('new book submitted');
    }

    clearMe() {
        this.setState({
            title: '',
            author: '',
            review: ''
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
    return (
        <form className='add-book-form' onSubmit={this.addNewBook}>

            <div className="input-container">
                <div className="inputs">
                    <input type='text' placeholder='Title' name='title' onChange={this.handleChange}/>
                    <input type='text' placeholder='Author' name='author' onChange={this.handleChange}/>
                    <input type='text' placeholder='Review' name='review' onChange={this.handleChange}/>
                </div>

                <div className="add-button">
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </form>
    )
    }
}