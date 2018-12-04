import  React, {Component } from 'react';
import NavBar from './Navbar';
import Home from './Home/Home';
class Root extends Component {
    render() {
        return(
            <NavBar>
                {this.props.children}
            </NavBar>
            
        )
    }
}

export default Root;