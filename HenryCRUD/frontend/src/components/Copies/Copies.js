import React, { Component } from 'react';
import CopyData from './CopyData';
import AddCopy from'./AddCopy';
const axios = require('axios');

class Copies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/copies')
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
            <AddCopy />
        </div>
        <br />
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <ol>
            {this.state.data.map((d, index) =>
                <CopyData key={index}
                index = {index}
                bookCode = {d.bookCode}
                branchNum = {d.branchNum}
                copyNum = {d.copyNum}
                quality = {d.quality}
                price = {d.price}
                 />
                )
            }
        </ol></div></>
        )
    }
}

export default Copies;
