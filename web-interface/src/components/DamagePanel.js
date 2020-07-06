import React, { Component } from 'react'
import './damage-panel.css';
export default class DamagePanel extends Component {
    render() {
        return (
            <div className="damage-panel">
                <div className="title">Damage Report</div>
                <div className="field-wrap">
                    <label for="fname">Steering </label>
                    <input className="field-wrap" id="fname"/>
                </div>
                <div className="field-wrap">
                    <label for="fname">Top speed </label>
                    <input className="field-wrap" id="fname"/>
                </div>
                <div className="field-wrap">
                    <label for="fname">Cornering </label>
                    <input className="field-wrap" id="fname"/>
                </div>
                <div className="field-wrap">
                    <label for="fname">Other </label>
                    <input className="field-wrap" id="fname"/>
                </div>
            </div>
        )
    }
}
