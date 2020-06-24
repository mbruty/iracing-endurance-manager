import React, { Component } from 'react';
import './splash-screen.css';

export default class SplashScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false;
        }
    }
    render() {
        if(this.loggedIn) {
            return null;
        }
        return (
            <div class ="background">
                <div class="cover">
                    <h1>Race endurance manager</h1>
                    <form  class="flex-form">
                        <label for="from">
                        <i class="ion-location"></i>
                        </label>
                        <input type="session" placeholder="Session ID"/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}
