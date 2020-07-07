import React, { Component } from 'react';
import './setting-pannel.css';

export default class SettingPanel extends Component {
    render() {
        return (
            <div className="settings-pannel">
                <div className="title">Session</div>
                <div className="field-wrap">
                    <label for="sTime">Start time </label>
                    <input className="field-wrap" id="sTime" type="time"/>
                </div>
                <div className="field-wrap">
                    <label for="fTime">Finish Time </label>
                    <input className="field-wrap" id="fTime" type="time"/>
                </div>
                <div className="field-wrap">
                    <label for="pitDuration">Pit Duration (s)</label>
                    <input className="field-wrap" id="pitDuration" type="number"/>
                </div>
            </div>
        )
    }
}
