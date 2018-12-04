import React, { Component } from 'react';
import WroteData from './WroteData';
const axios = require('axios');

class Wrote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/wrote')
        .then(res => {
          this.setState(res);
        })
        console.log(this.state);
    }

    render() {
        console.log(this.state);
        return(
        <><br />
        <br />
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <ul>
            {this.state.data.map((d, index) =>
                <WroteData key={index}
                index = {index}
                bookCode = {d.bookCode}
                authorNum = {d.authorNum}
                sequence = {d.sequence}
                 />
                )
            }
        </ul></div></>
        )
    }
}

export default Wrote;
