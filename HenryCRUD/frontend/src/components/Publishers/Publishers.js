import React, { Component } from 'react';
import PublisherData from './PublisherData'
import AddPublisher from './AddPublisher';
const axios = require('axios');

class Publishers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/publishers')
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
            <AddPublisher />
        </div>
        <br />
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <ul>
            {this.state.data.map((d, index) =>
                <PublisherData key={index}
                index = {index}
                publisherCode = {d.publisherCode}
                publisherName = {d.publisherName}
                city = {d.city}
                 /> 
                )
            }
        </ul></div></>
        )
    }
}

export default Publishers;
