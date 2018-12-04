import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class PublisherForm extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                publisherCode: this.props.publisherCode,
                publisherName: this.props.publisherName,
                city: this.props.city,
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
          url: 'http://localhost:4000/publishers/insert',
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
        <div className="publisherForm">
            &emsp;&emsp;&emsp;&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Publisher Code"
              name="publisherCode" 
              onChange={this.commonChange}
              value={this.state.publisherCode}
            />&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Publisher Name"
              name="publisherName"
              onChange={this.commonChange}
              value={this.state.publisherName}
            /><br /><br />&emsp;&emsp;&emsp;&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="City"
              name="city"
              onChange={this.commonChange}
              value={this.state.city}
              />&emsp;&emsp;
            <Button variant="contained" color="primary" size ="large" name="submit" value="Submit" onClick={this.handleInsert}>
              Insert
            </Button>&emsp;
            
        </div>
        )}
}

export default PublisherForm;