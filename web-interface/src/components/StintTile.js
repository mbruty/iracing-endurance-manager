import React, { Component } from 'react';

export default class StintTile extends Component {

    render() {
        return (
            <div className="stint-entry">
                <input placeholder="Driver Name" id="sessionTxtBox" className="driver-name-box"/>
                <a>{this.props.data.name}</a>
            </div>
        );
    }
}
