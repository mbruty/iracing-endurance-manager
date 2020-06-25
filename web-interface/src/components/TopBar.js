import React, { Component } from 'react';
import './top-bar.css';

export default class TopBar extends Component {
    render() {
        return (
            <div className="top-bg">
                <img className="logo" src="https://cdn.discordapp.com/attachments/336242422461890560/725682882705621104/Mikebruty-Transparent.png"/>
                <a className="top-bar">Endurance Manager</a>
                <form  className="flex-form">
                    <input type="session" placeholder="Session ID" id="sessionTxtBox"/>
                    <input type="submit" value="Update" onClick={(e) => {this.callback(e, document.getElementById('sessionTxtBox').value)}}/>
                    <div className="btn-container-nav">
                        <div className="discord-btn">
                            <i className='fab fa-discord'></i>
                        </div>
                        <div className="download-btn">
                            <i class="material-icons">get_app</i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
