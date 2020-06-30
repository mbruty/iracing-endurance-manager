import React, { Component } from 'react';
import { Droppable, Draggable, DroppableProvided } from 'react-beautiful-dnd';

export default class StintTile extends Component {

    render() {
        return (
            <div style={{borderStyle: "solid"}}>{this.props.data.name}</div>
        );
    }
}
