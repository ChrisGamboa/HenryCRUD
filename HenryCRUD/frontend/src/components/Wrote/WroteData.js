import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class WroteData extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                bookCode: this.props.bookCode,
                authorNum: this.props.authorNum,
                sequence: this.props.sequence
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
              name="bookCode" 
              value={this.state.bookCode}
            />&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Author Number"
              name="authorNum"
              value={this.state.authorNum}
            />&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Sequence"
              name="sequence"
              value={this.state.sequence}
              />&emsp;
           <br /> <br /><br /><br />
        </div>
        )}
}

export default WroteData;