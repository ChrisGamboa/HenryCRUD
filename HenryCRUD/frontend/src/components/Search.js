import React, {Component} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchData from './SearchData';
const axios = require('axios');

class Search extends Component {
    constructor(props){
        super(props);
        if(props){
            this.state = {
                data: [],
                search: ""
            }
        }
        this.commonChange = this.commonChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch = () => {
        let data = this.state;
        console.log(data);
        axios({
          method: 'post',
          url: 'http://localhost:4000/search',
          data
        })
        .then(res => {
          
          console.log(res);
        })
        console.log('Handling the click!');
    }

    commonChange = (event) => {
        console.log('CHANGING ', event.target.value);
        let data = this.state;
        data[event.target.name] = event.target.value;
        this.setState(data);
        this.handleSearch();
        this.render();
    }

    componentDidMount() {
        let data = this.state;
        console.log(data);
        axios({
          method: 'post',
          url: 'http://localhost:4000/search',
          data
        })
        console.log(this.state);
        this.render();
    }

    render() {
        console.log(this.state);
        return(
            <>
            <TextField
                variant="outlined" 
                type="text"
                name="search" 
                placeholder="Search"
                onChange={this.commonChange}
                value={this.state.search}
            />
            <IconButton onClick={this.handleSearch}>
                <SearchIcon />
            </IconButton><br />
            
                <ul>
                    {this.state.data.map((d, index) =>
                        <SearchData 
                        key={index}
                        bookCode = {d.bookCode}
                        title = {d.title}
                        authorLast = {d.authorLast}
                        authorFirst = {d.authorFirst}
                        branchName = {d.branchName}
                        branchLocation = {d.branchLocation}
                        publisherName = {d.publisherName}
                        OnHand = {d.OnHand}
                        />
                        )
                    }
                </ul>
            </>
        )
    }
}

export default Search;