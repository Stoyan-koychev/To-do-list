import React from 'react';
import './ToDoList.css';

class ToDoList extends React.Component {
    state = {query: ''};

    onInputChange = (event) => {
        event.preventDefault();
        this.setState({ query: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        let task = {};
        task.item = this.state.query
        task.notCompleted = true;

        this.props.onFormSubmit(task);
    }

    renderIcon = (currItem, index) => {
        if(!this.props.currState[index].notCompleted){
            return (
                <div>
                    <i onClick={() => this.props.onCompleteItem(currItem)} className="completed-icon material-icons">check_box</i>
                    <p className="completed">{currItem.item}</p>
                </div>
            )
        } else {
            return (
                <div>
                    <i onClick={() => this.props.onCompleteItem(currItem)} className="material-icons">check_box_outline_blank</i>
                    <p>{currItem.item}</p>
                </div>
            )};
    }

    isEmpty() {
        console.log(this.state.currState.lenth);
    }

    render() {
        return(
            <div className="to-do-component">
                <div className="to-do-header">
                    <h3>To-do list</h3>
                    <form onSubmit={this.onFormSubmit}>
                        <input onChange={this.onInputChange} type="text" value={this.state.query} placeholder="Add to do"/>
                        <button>Add</button>
                    </form>
                </div>
                <div className="to-do-list">
                    <ul> 
                        {this.props.currState.map( (currItem, index) => {
                            if (!this.props.currState) {return <p>loading</p>};
                            return(
                                <li key={index}>
                                    {this.renderIcon(currItem, index)}
                                    <i onClick={() => this.props.deleteListItem(currItem)} className="delete material-icons">delete</i>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }



}


export default ToDoList;


