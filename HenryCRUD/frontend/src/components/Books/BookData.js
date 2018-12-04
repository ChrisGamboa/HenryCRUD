import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class BookData extends Component {
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
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    

    handleDelete = () => {
        let data = this.state;
        console.log(data);
        axios({
          method: 'post',
          url: 'http://localhost:4000/books/delete',
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
          url: 'http://localhost:4000/books',
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

    componentDidMount() {

    }

    render() {
        return(
        <div className="bookData">
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
              label="Paperback"
              name="paperback"
              onChange={this.commonChange}
              value={this.state.paperback}
            />&emsp;
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
              label="Title"
              name="title"
              onChange={this.commonChange}
              value={this.state.title}
            />&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Type"
              name="type"
              onChange={this.commonChange}
              value={this.state.type}
            />&emsp;
            <Button variant="contained" size ="medium" name="submit" value="Submit" onClick={this.handleUpdate}>
              Update
            </Button>&emsp;
            <Button variant="contained" size="medium" name="delete" value="Delete" color="secondary" onClick={this.handleDelete}>
            Delete</Button><br /> <br /><br /><br />
        </div>
        )}
}

export default BookData;