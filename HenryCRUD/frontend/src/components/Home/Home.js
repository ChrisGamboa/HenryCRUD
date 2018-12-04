import React, { Component } from 'react';
import Title from './Title';
import InstructionsHeader from './InstructionsHeader';
import Instructions from './Instructions';
import 'typeface-roboto';

class Home extends Component {
    render() {
        return(
            <>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Title />
                </div>
                <br />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <InstructionsHeader /><br />
                </div>
                <br />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Instructions /><br />
                </div>
            </>
        )
    }
}

export default Home;