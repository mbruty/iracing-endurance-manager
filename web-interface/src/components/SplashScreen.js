import React, { Component } from 'react';
import './splash-screen.css';

export default class SplashScreen extends Component {
    constructor(props){
        super(props);
        this.sessionID = null;
        this.state = {
            loggedIn: false,
        }
    }

    handleSumbit(e){
        this.sessionID = document.getElementById('sessionTxtBox').innerText;
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
                        <input type="session" placeholder="Session ID" id="sessionTxtBox"/>
                        <input type="submit" value="Submit"/>
                    </form>
                    <div class="btn-container">
                        <div class="discord">
                            <i class='fab fa-discord'></i>
                            <span class="hover-text">Invite Bot</span>
                        </div>
                        <div class="download">
                            <span class="hover-text">Client</span>
                            <i class="material-icons">get_app</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
