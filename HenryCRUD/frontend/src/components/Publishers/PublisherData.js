import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class PublisherData extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                publisherCode: this.props.publisherCode,
                publisherName: this.props.publisherName,
                city: this.props.city
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
          url: 'http://localhost:4000/publishers/delete',
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
          url: 'http://localhost:4000/publishers',
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
        <div className="publisherData">
        &emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Publisher Code"
              name="publisherCode" 
              onChange={this.commonChange}
              value={this.state.publisherCode}
            />&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Publisher Name"
              name="publisherName"
              onChange={this.commonChange}
              value={this.state.publisherName}
            />&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="City"
              name="city"
              onChange={this.commonChange}
              value={this.state.city}
              />&emsp;
            <Button variant="contained" size ="medium" name="submit" value="Submit" onClick={this.handleUpdate}>
              Update
            </Button>&emsp;
            <Button variant="contained" size="medium" name="delete" value="Delete" color="secondary" onClick={this.handleDelete}>
            Delete</Button><br /> <br /><br /><br />
        </div>
        )}
}

export default PublisherData;