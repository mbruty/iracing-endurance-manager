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
                        {this.props.order.map((color, index) => (
                            <Draggable key={color} draggableId={color} index={index}>
                            {dragProvided => (
                                <div
                                {...dragProvided.dragHandleProps}
                                {...dragProvided.draggableProps}
                                ref={dragProvided.innerRef}
                                >
                                <StintTile data={this.props.data[color]}/>
                                </div>
                            )}
                            </Draggable>
                        ))}
                        {dropProvided.placeholder}
                    </div>
                )}
                </Droppable>
            </div>
          );
    }
}
