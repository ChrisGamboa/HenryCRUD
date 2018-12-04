import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class CopyForm extends Component {
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
        this.handleInsert = this.handleInsert.bind(this);
    }
    
    handleInsert = () => {
        let data = this.state;
        console.log(data);
        axios({
          method: 'post',
          url: 'http://localhost:4000/copies/insert',
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
        <div className="bookForm">
            &emsp;&emsp;&emsp;&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Book Code"
              name="bookCode" 
              onChange={this.commonChange}
              value={this.state.bookCode}
            />&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Branch Number"
              name="branchNum"
              onChange={this.commonChange}
              value={this.state.branchNum}
            /><br /><br />&emsp;&emsp;&emsp;&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Copy Number"
              name="copyNum"
              onChange={this.commonChange}
              value={this.state.copyNum}
              />&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Quality"
              name="quality"
              onChange={this.commonChange}
              value={this.state.quality}
            /><br /><br />&emsp;&emsp;&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Price"
              name="price"
              onChange={this.commonChange}
              value={this.state.price}
            />&emsp;&emsp;&emsp;&emsp;
            <Button variant="contained" color="primary" size ="large" name="submit" value="Submit" onClick={this.handleInsert}>
              Insert
            </Button>&emsp;
            
        </div>
        )}
}

export default CopyForm;