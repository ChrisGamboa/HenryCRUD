import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class BranchData extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                branchNum: this.props.branchNum,
                branchName: this.props.branchName,
                branchLocation: this.props.branchLocation
            }
        }
    }
    


    render() {
        return(
        <div className="authorData">
        &emsp;
            <TextField 
              variant="outlined" 
              type="number"
              label="Branch Number"
              name="branchNum" 
              value={this.state.branchNum}
            />&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Branch Name"
              name="branchName"
              value={this.state.branchName}
            />&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Branch Location"
              name="branchLocation"
              value={this.state.branchLocation}
              />&emsp;
           <br /> <br /><br /><br />
        </div>
        )}
}

export default BranchData;