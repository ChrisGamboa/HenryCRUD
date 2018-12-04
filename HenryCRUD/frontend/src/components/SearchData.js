import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

class SearchData extends Component {
    constructor(props) {
        super(props);
        if(props){
            this.state = {
                key: this.props.index,
                bookCode: this.props.bookCode,
                title: this.props.title,
                authorLast: this.props.authorLast,
                authorFirst: this.props.authorFirst,
                branchName: this.props.branchName,
                branchLocation: this.props.branchLocation,
                publisherName: this.props.publisherName,
                OnHand: this.props.OnHand
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
                key: nextProps.index,
                bookCode: nextProps.bookCode,
                title: nextProps.title,
                authorLast: nextProps.authorLast,
                authorFirst: nextProps.authorFirst,
                branchName: nextProps.branchName,
                branchLocation: nextProps.branchLocation,
                publisherName: nextProps.publisherName,
                OnHand: nextProps.OnHand
        });
    }

    render() {
        console.log(this.state);
        return(
        <div className="searchData">
            &emsp;&emsp;&emsp;&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Book Code"
              name="bookCode" 
              value={this.state.bookCode}
            />&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Title"
              name="title"
              value={this.state.title}
            /><br /><br />&emsp;&emsp;&emsp;&emsp;
            <TextField
              variant="outlined" 
              type="text"
              label="Author Last"
              name="authorLast"
              value={this.state.authorLast}
              />&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Author First"
              name="authorFirst"
              value={this.state.authorFirst}
            /><br /><br />&emsp;&emsp;&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Branch Name"
              name="branchName"
              value={this.state.branchName}
            />&emsp;&emsp;&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Branch Location"
              name="branchLocation"
              value={this.state.branchLocation}
            />&emsp;&emsp;&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="Publisher Name"
              name="publisherName"
              value={this.state.publisherName}
            />&emsp;&emsp;&emsp;&emsp;
            <TextField 
              variant="outlined" 
              type="text"
              label="On Hand"
              name="OnHand"
              value={this.state.OnHand}
            />&emsp;&emsp;&emsp;&emsp;
        </div>
        )}
}

export default SearchData;