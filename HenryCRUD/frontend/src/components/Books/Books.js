import React, { Component } from 'react';
import BookData from './BookData';
import AddBook from './AddBook';
const axios = require('axios');

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/books')
        .then(res => {
          this.setState(res);
        })
        console.log(this.state);
    }

    render() {
        console.log(this.state);
        return(
        <>
        <br />
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <AddBook />
        </div>
        <br />
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <ul>
            {this.state.data.map((d, index) =>
                <BookData key={index}
                index = {index}
                bookCode = {d.bookCode}
                paperback = {d.paperback}
                publisherCode = {d.publisherCode}
                title = {d.title}
                type = {d.type}
                 />
                )
            }
        </ul></div></>
        )
    }
}

export default Books;