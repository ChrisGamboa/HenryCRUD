import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class CopyData extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                bookCode: this.props.bookCode,
                branchNum: this.props.branchNum,
                copyNum: this.props.copyNum,
                quality: this.props.quality,
                price: this.props.price
            }
        }
        
        this.commonChange = this.commonChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    

    handleDelete = () => {
        let data = this.state;
        console.log(data);
        axios({
          method: 'post',
          url: 'http://localhost:4000/copies/delete',
          data
        })
        .then(res => {  
          console.log(res);
        })
        this.render();
    }
    
    handleUpdate = () => {
        let data = this.state;
        console.log(data);
        axios({
          method: 'post',
          url: 'http://localhost:4000/copies',
          data
        })
        .then(res => {
          
          console.log(res);
        })
        console.log('Handling the click!');
        this.render();
    }

    commonChange = (event) => {
        console.log('CHANGING ', event.target.value);
        let data = this.state;
        data[event.target.name] = event.target.value;
        this.setState(data);
        this.render();
    }

    render() {
        return(
        <div className="copyData">
          &emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Book Code"
              name="bookCode" 
              onChange={this.commonChange}
              value={this.state.bookCode}
            />&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Branch Number"
              name="branchNum"
              onChange={this.commonChange}
              value={this.state.branchNum}
            />&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Copy Number"
              name="copyNum"
              onChange={this.commonChange}
              value={this.state.copyNum}
              />&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Quality"
              name="quality"
              onChange={this.commonChange}
              value={this.state.quality}
            />&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Price"
              name="price"
              onChange={this.commonChange}
              value={this.state.price}
            />&emsp;
            <Button variant="contained" size ="medium" name="submit" value="Submit" onClick={this.handleUpdate}>
              Update
            </Button>&emsp;
            <Button variant="contained" size="medium" name="delete" value="Delete" color="secondary" onClick={this.handleDelete}>
            Delete</Button><br /> <br /><br /><br />
        </div>
        )}
}

export default CopyData;