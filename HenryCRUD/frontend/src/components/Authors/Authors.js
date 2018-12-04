import React, { Component } from 'react';
import AuthorData from './AuthorData';
import AddAuthor from './AddAuthor';
const axios = require('axios');

class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/authors')
        .then(res => {
          this.setState(res);
        })
        console.log(this.state);
    }

    render() {
        console.log(this.state);
        return(
        <><br />
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <AddAuthor />
        </div>
        <br />
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <ul>
            {this.state.data.map((d, index) =>
                <AuthorData key={index}
                index = {index}
                authorNum = {d.authorNum}
                authorFirst = {d.authorFirst}
                authorLast = {d.authorLast}
                 />
                )
            }
        </ul></div></>
        )
    }
}

export default Authors;
