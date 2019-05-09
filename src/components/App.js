import React from 'react';
import ToDoList from './ToDoList';

class App extends React.Component {
    state = {
        toDoList: [
            {
                item:'Inital to-do',
                notCompleted: true
            }
        ]
    }

    deleteListItem = (item) => {
        console.log(`I will delete - ${item.item}`);
        let newToDo = this.state.toDoList.filter( element => element.item !== item.item);
        this.setState({ toDoList: newToDo });
    }

    onCompleteItem = (clickedItem) => {
        const clicked = this.state.toDoList.map(task => task.item === clickedItem.item);
        const indexOfClicked = clicked.indexOf(true);

        const newArr = this.state.toDoList;

        newArr[indexOfClicked].notCompleted = this.checkValue(clickedItem);
        this.setState({toDoList: newArr});
    }

    checkValue = (item) => {
        if(item.notCompleted){
            return false;
        } else {return  true;}
    }

    onFormSubmit = (newTask) => {
        const newToDo = [...this.state.toDoList, newTask];
        this.setState({toDoList: newToDo});
    }


    render() {
        return(
            <div className="app">
                <ToDoList 
                    currState={this.state.toDoList}
                    deleteListItem={this.deleteListItem}
                    onFormSubmit={this.onFormSubmit}
                    onCompleteItem={this.onCompleteItem}
                />
            </div>
        );
    }
};

export default App;