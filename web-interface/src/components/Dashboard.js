import React, { Component } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import { reorder } from "./ReorderStints";
import SplashScreen from './SplashScreen';
import TopBar from './TopBar';
import StintList from './StintList';

export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.handleSessionSubmit = this.handleSessionSubmit.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.state = {
            sessionID: "asdf",
            stintOrder : ['stint-1', 'stint-2', 'stint-3', 'stint-4', 'stint-5', 'stint-6', ],
            stints : {
                'stint-1': { name: 'Mike', duration: '35'},
                'stint-2': { name: 'Mike', duration: '35'},
                'stint-3': { name: 'Mike', duration: '35'},
                'stint-4': { name: 'Mike', duration: '35'},
                'stint-5': { name: 'Teun', duration: '35'},
                'stint-6': { name: 'Teun', duration: '35'},
            }
        }
    }

    handleSessionSubmit(e, sessionID){
        e.preventDefault();
        this.setState({sessionID: sessionID});
    }

    onDragEnd(e) {
        const { destination, source } = e;
        // // dropped outside the list
        if (!destination) {
            return;
        }

        if( destination.droppableId === source.droppableId &&
            destination.index === source.index){
                return;
        }
        this.setState((state) => {
            return { sessionID: state.sessionID, stintOrder: state.stintOrder, 
                stintOrder: reorder(state.stintOrder, source, destination)}
        });
    }
    render() {
        if(this.state.sessionID !== undefined){
            console.log(this.state.sessionID)
            return (
                <div>
                    <TopBar></TopBar>
                    <DragDropContext
                    onDragEnd={this.onDragEnd}
                    >
                    <div>
                    <StintList
                            internalScroll
                            key="stint-dnd"
                            listId="stint-dnd"
                            listType="CARD"
                            data={this.state.stints}
                            order={this.state.stintOrder}
                        />
                    </div>
                    </DragDropContext>
                </div>
            );
        }
        return (
            <div>
                <SplashScreen callback={this.handleSessionSubmit}></SplashScreen>
            </div>
        );
    }
}
