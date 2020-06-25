import React, { Component } from 'react'
import SplashScreen from './SplashScreen'
import TopBar from './TopBar';

export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            sessionID: "asdf"
        };
        this.handleSessionSubmit = this.handleSessionSubmit.bind(this);
    }

    handleSessionSubmit(e, sessionID){
        e.preventDefault();
        this.setState({sessionID: sessionID});
    }

    render() {
        if(this.state.sessionID !== undefined){
            console.log(this.state.sessionID)
            return (
                <div>
                    <TopBar></TopBar>
                </div>
            );
        }
        return (
            <div>
                <SplashScreen callback={this.handleSessionSubmit}></SplashScreen>
            </div>
        );
    }
}
