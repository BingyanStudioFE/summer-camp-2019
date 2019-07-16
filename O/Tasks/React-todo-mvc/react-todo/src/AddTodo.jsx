import React from "react";
import css from "./AddTodo.module.css";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return <div>
            <input id="whatToDo" ref="newTodo" type="text" placeholder="  What needs to be done?" onKeyDown={this.enterAddNewTodo} className={css.whattodo}/>
            {/* <button onClick={() => { this.addNewTodo() }}>add</button> */}
        </div>
    }

    addNewTodo() {
        this.props.add(this.refs.newTodo.value);
        // console.log("我现在点击了button，我想知道现在this.refs.newTodo的值", this.refs.newTodo);
    }

    enterAddNewTodo = (event) => {
        if (event.keyCode === 13) {
            this.addNewTodo();
        }
    }
}

export default AddTodo;