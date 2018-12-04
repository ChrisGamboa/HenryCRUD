import React, { Component } from 'react';
import BranchData from './BranchData';
const axios = require('axios');

class Branches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/branches')
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
                <BranchData key={index}
                index = {index}
                branchNum = {d.branchNum}
                branchName = {d.branchName}
                branchLocation = {d.branchLocation}
                 />
                )
            }
        </ul></div></>
        )
    }
}

export default Branches;
