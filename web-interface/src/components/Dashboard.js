import React, { Component } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import { reorder } from "./ReorderStints";
import SplashScreen from './SplashScreen';
import TopBar from './TopBar';
import StintList from './StintList';
import SettingPanel from './SettingPanel';
import DamagePanel from './DamagePanel'

export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.handleSessionSubmit = this.handleSessionSubmit.bind(this);
        this.addNewStint = this.addNewStint.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.state = {
            sessionID: "asdf",
            stintOrder : [],
            stints : [],
            duration: '35'
        }
    }

    addNewStint(){
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        let stintName = `stint-${this.state.stintOrder.length + 1}`;
        stateCopy.stintOrder.push(stintName);
        stateCopy.stints.push({stintName: `${stintName}`, name: '', startTime: '13:35'});

        this.setState(stateCopy);
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
            return { sessionID: state.sessionID, stints: state.stints, 
                stintOrder: reorder(state.stintOrder, source, destination)}
        });
    }
    render() {
        if(this.state.sessionID !== undefined){
            return (
                <div>
                    <TopBar/>
                    <DragDropContext
                    onDragEnd={this.onDragEnd}
                    >
                    <div className="stint-manager">
                        <StintList
                                internalScroll
                                key="stint-dnd"
                                listId="stint-dnd"
                                listType="CARD"
                                data={this.state.stints}
                                order={this.state.stintOrder}
                                newStint={this.addNewStint}
                            />
                    </div>
                    </DragDropContext>
                    <SettingPanel/>
                    <DamagePanel/>
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
