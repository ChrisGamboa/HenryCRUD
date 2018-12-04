import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class InventoryData extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                BookCode: this.props.BookCode,
                BranchNum: this.props.BranchNum,
                OnHand: this.props.OnHand
            }
        }
    }

    render() {
        return(
        <div className="InventoryData">
        &emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Book Code"
              name="BookCode" 
              value={this.state.BookCode}
            />&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Branch Number"
              name="BranchNum"
              value={this.state.BranchNum}
            />&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="On Hand"
              name="OnHand"
              value={this.state.OnHand}
              />&emsp;
           <br /> <br /><br /><br />
        </div>
        )}
}

export default InventoryData;