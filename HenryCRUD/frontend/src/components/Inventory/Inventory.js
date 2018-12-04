import React, { Component } from 'react';
import InventoryData from './InventoryData';
const axios = require('axios');

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/inventory')
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
                <InventoryData key={index}
                index = {index}
                BookCode = {d.BookCode}
                BranchNum = {d.BranchNum}
                OnHand = {d.OnHand}
                 />
                )
            }
        </ul></div></>
        )
    }
}

export default Inventory;
