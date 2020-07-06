import React, { Component } from 'react';

export default class StintTile extends Component {

    render() {
        return (
            <div className="stint-entry">
                <a className="stint-time">{this.props.data.time + "    |    " +  "15:35"}</a>
                <input placeholder="Driver Name" id="sessionTxtBox" className="driver-name-box" defaultValue={this.props.data.name}/>
                <select name="stint-type" id="stint-type" className="select-stint">
                    <option value="fuel">Fuel</option>
                    <option value="fuel-tyres">Fuel + Tyres</option>
                </select>
                <i className="material-icons">drag_indicator</i>
            </div>
        );
    }
}
