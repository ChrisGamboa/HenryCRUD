import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class AuthorForm extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                authorNum: this.props.authorNum,
                authorLast: this.props.authorLast,
                authorFirst: this.props.authorFirst,
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
          url: 'http://localhost:4000/authors/insert',
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
        <div className="authorForm">
            &emsp;&emsp;&emsp;&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Author Number"
              name="authorNum" 
              onChange={this.commonChange}
              value={this.state.authorNum}
            />&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Last Name"
              name="authorLast"
              onChange={this.commonChange}
              value={this.state.authorLast}
            /><br /><br />&emsp;&emsp;&emsp;&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="First Name"
              name="authorFirst"
              onChange={this.commonChange}
              value={this.state.authorFirst}
              />&emsp;&emsp;
            <Button variant="contained" color="primary" size ="large" name="submit" value="Submit" onClick={this.handleInsert}>
              Insert
            </Button>&emsp;
            
        </div>
        )}
}

export default AuthorForm;