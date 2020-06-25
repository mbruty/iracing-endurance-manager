import React, { Component } from 'react';
import './splash-screen.css';

export default class SplashScreen extends Component {
    constructor(props){
        super(props);
        this.callback = props.callback;
    }

    render() {
        return (
            <div className ="background">
                <div className="cover">
                    <h1 className="splash-title">Race endurance manager</h1>
                    <form  className="flex-form">
                        <input type="session" placeholder="Session ID" id="sessionTxtBox"/>
                        <input type="submit" value="Submit" onClick={(e) => {this.callback(e, document.getElementById('sessionTxtBox').value)}}/>
                    </form>
                    <div className="btn-container-splash">
                        <div className="discord">
                            <i className='fab fa-discord'></i>
                            <span className="hover-text">Invite Bot</span>
                        </div>
                        <div className="download">
                            <span className="hover-text">Client</span>
                            <i class="material-icons">get_app</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
