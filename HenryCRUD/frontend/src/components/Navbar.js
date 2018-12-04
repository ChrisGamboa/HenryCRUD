import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Search from './Search';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.goHome = this.goHome.bind(this);
        this.goBooks = this.goBooks.bind(this);
        this.goAuthors = this.goAuthors.bind(this);
        this.goPublishers = this.goPublishers.bind(this);
        this.goCopies = this.goCopies.bind(this);
        this.goBranches = this.goBranches.bind(this);
        this.goInventory = this.goInventory.bind(this);
        this.goWrote = this.goWrote.bind(this);
        this.goSearch = this.goSearch.bind(this);
    }

    goHome() {
        this.props.history.push('/home');
    }

    goBooks() {
        this.props.history.push('/books');
    }

    goAuthors() {
        this.props.history.push('/authors');
    }

    goPublishers() {
        this.props.history.push('/publishers');
    }

    goCopies() {
        this.props.history.push('/copies');
    }

    goBranches() {
        this.props.history.push('/branches');
    }

    goInventory() {
        this.props.history.push('/inventory');
    }

    goWrote() {
        this.props.history.push('/wrote');
    }

    goSearch() {
        this.props.history.push('/search');
    }

    render() {
        return (
        <div id="navbar">
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <h3>Henry Books Database</h3>&emsp;&emsp;
                    <Button color="inherit" name="home" value="home" onClick={this.goHome}>Home</Button>&emsp;&emsp;
                    <Button color="inherit" name="books" value="books" onClick={this.goBooks}>Books</Button>&emsp;&emsp;
                    <Button color="inherit" name="authors" value="authors" onClick={this.goAuthors}>Authors</Button>&emsp;&emsp;
                    <Button color="inherit" name="publishers" value="publishers" onClick={this.goPublishers}>Publishers</Button>&emsp;&emsp;
                    <Button color="inherit" name="copies" value="copies" onClick={this.goCopies}>Copies</Button>&emsp;&emsp;
                    <Button color="inherit" name="branches" value="branches" onClick={this.goBranches}>Branches</Button>&emsp;&emsp;
                    <Button color="inherit" name="inventory" value="inventory" onClick={this.goInventory}>Inventory</Button>&emsp;&emsp;
                    <Button color="inherit" name="wrote" value="wrote" onClick={this.goWrote}>Wrote</Button>&emsp;&emsp;
                    <Button color="inherit" name="Search" value="search" onClick={this.goSearch}>Search</Button>&emsp;&emsp;

                </Toolbar>
            </AppBar><br /><br /><br /><br />
        </div>
        )
    }
}

export default withRouter(NavBar);