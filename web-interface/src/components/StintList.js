import React, { Component } from 'react'
import './stint-manager.css';
import { Droppable, Draggable } from "react-beautiful-dnd";
import StintTile from './StintTile';
import { reorder } from './ReorderStints';
export default class StintList extends Component {

    onDragEnd(destination, source) {
        if(!destination){
            return;
        }

        this.stintOrder = reorder(this.stintOrder, source, destination);
    }

    render() {
        console.log(this.props.data);
        return (
            <div>
                <div className="title">Stint Sheet</div>
                <Droppable
                droppableId={this.props.listId}
                type={this.props.listType}
                direction="vertical"
                isCombineEnabled={false}
                >
                {dropProvided => (
                    <div {...dropProvided.droppableProps} ref={dropProvided.innerRef}>
                        {this.props.order.map((name, index) => (
                            <Draggable key={name} draggableId={name} index={index}>
                            {dragProvided => (
                                <div
                                {...dragProvided.dragHandleProps}
                                {...dragProvided.draggableProps}
                                ref={dragProvided.innerRef}
                                >
                                <StintTile data={this.props.data[index]}/>
                                </div>
                            )}
                            </Draggable>
                        ))}
                        {dropProvided.placeholder}
                        <div className="stint-add">
                            <i className="material-icons" onClick={this.props.newStint}>add_circle</i>
                        </div>
                    </div>
                )}
                </Droppable>
            </div>
          );
    }
}
