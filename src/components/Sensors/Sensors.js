import React, { Component } from 'react';
import GyroscopicSensor from '../GyroscopicSensor/GyroscopicSensor';
import IonDriveSensor from '../IonDriveSensor/IonDriveSensor';
import FlameSensor from '../FlameSensor/FlameSensor'; // Added - kv Your flames don't look very... flamey
import './Sensors.css';
// This used to look so pretty! What's the problem? Did you lose your sense of style?

class Sensors extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Sensors</h2>
                <div className='sensor-container'>
                    <GyroscopicSensor />
                    <IonDriveSensor />
                    {/* Added IonDriveSensor - KV Oooops! Did someone steal your ion drive? Ion so sorry! */}
                    <FlameSensor />
                </div>
            </div>
        );
    }
}

export default Sensors;
