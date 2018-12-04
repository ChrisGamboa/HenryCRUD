import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class BookForm extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                bookCode: this.props.bookCode,
                paperback: this.props.paperback,
                publisherCode: this.props.publisherCode,
                title: this.props.title,
                type: this.props.type
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
          url: 'http://localhost:4000/books/insert',
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
              label="Title"
              name="title"
              onChange={this.commonChange}
              value={this.state.title}
            /><br /><br />&emsp;&emsp;&emsp;&emsp;
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
              label="Paperback"
              name="paperback"
              onChange={this.commonChange}
              value={this.state.paperback}
            /><br /><br />&emsp;&emsp;&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Type"
              name="type"
              onChange={this.commonChange}
              value={this.state.type}
            />&emsp;&emsp;&emsp;&emsp;
            <Button variant="contained" color="primary" size ="large" name="submit" value="Submit" onClick={this.handleInsert}>
              Insert
            </Button>&emsp;
            
        </div>
        )}
}

export default BookForm;