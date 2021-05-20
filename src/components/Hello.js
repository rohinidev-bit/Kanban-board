import React , { Component } from "react";
import EditableElement from "../Edit.js/EditableElement";
import Classes from './Classes';
class Hello extends Component {
    constructor() {
        super();
        this.state = {    
          currentDateTime: Date().toLocaleString()
        }   
      }
    render() {
        return (
            <div>
                    <div className="App">
                        <EditableElement>
                            <h1>Untitled</h1>
                        </EditableElement>
                        <p>
                            Use this template to track your personal tasks.
                            Click + New to create a new task directly on this board.
                            Click an existing task to add additional context or subtasks.
                        </p>
                            <p> Status</p>
                        <EditableElement>
                            <p>Doing</p>
                        </EditableElement>
                        <p>
                            Date Created :  { this.state.currentDateTime }
                        </p> 
                    </div>
            </div>
        )
    }

}
export default  Hello;