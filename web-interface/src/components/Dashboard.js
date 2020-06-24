import React, { Component } from 'react'
import SplashScreen from './SplashScreen'

export default class Dashboard extends Component {

    handleSessionSubmit(e, sessionID){
        e.preventDefault();
        console.log(sessionID);
    }
    render() {
        return (
            <div>
                <SplashScreen callback={this.handleSessionSubmit}></SplashScreen>
            </div>
        )
    }
}
