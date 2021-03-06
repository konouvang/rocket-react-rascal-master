import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';

class RocketStatus extends Component {
    // *** added semi Colon and Render - KV Did you lose something? The whole car? Nah... just a little render bender
    render() {
    return (
        <div className='container'>
            <h2>Rocket Status</h2>
            <div className='sweet-loading'>
                <BarLoader
                    color={'#123abc'}
                    loading={true}
                    width={1000}
                />
            </div>
        </div>
    );
}
}

export default RocketStatus;
