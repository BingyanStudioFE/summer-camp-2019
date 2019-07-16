import React from "react";
import css from "./Choose.module.css"

class Choose extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render = () => {
        return <div className={css.choose}>
            <span onClick={this.chooseAll}>All</span>
            <span onClick={this.chooseActive}>Active</span>
            <span onClick={this.chooseCompleted}>Completed</span>
            <span onClick={this.clearCompleted}>Clear-Completed</span>
        </div>
    }
    chooseAll = () => {
        this.props.confirm(0);
    }
    chooseActive = () => {
        this.props.confirm(1);
    }
    chooseCompleted = () => {
        this.props.confirm(2);
    }
    clearCompleted = () => {
        this.props.clear();
    }
}

export default Choose;