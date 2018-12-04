import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class AuthorData extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                authorNum: this.props.authorNum,
                authorLast: this.props.authorLast,
                authorFirst: this.props.authorFirst
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
          url: 'http://localhost:4000/authors/delete',
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
          url: 'http://localhost:4000/authors',
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
        <div className="authorData">
        &emsp;
            <TextField
              variant="outlined" 
              type="number"
              label="Author Number"
              name="authorNum" 
              onChange={this.commonChange}
              value={this.state.authorNum}
            />&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="First Name"
              name="authorFirst"
              onChange={this.commonChange}
              value={this.state.authorFirst}
            />&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Last Name"
              name="authorLast"
              onChange={this.commonChange}
              value={this.state.authorLast}
              />&emsp;
            <Button variant="contained" size ="medium" name="submit" value="Submit" onClick={this.handleUpdate}>
              Update
            </Button>&emsp;
            <Button variant="contained" size="medium" name="delete" value="Delete" color="secondary" onClick={this.handleDelete}>
            Delete</Button><br /> <br /><br /><br />
        </div>
        )}
}

export default AuthorData;