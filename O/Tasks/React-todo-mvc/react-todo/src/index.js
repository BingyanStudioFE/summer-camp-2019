import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos:          ["吃饭","睡觉","打豆豆"]
        }
    }

    add(newTodo) {
        this.setState(
            {
                todos: this.state.todos.push(newTodo)
            }
        )
    }

    render() {
        return <div>
            <h1>todos</h1>
            <AddTodo add={ this.state.add}></AddTodo>
            <Todos todos={ this.state.todos }></Todos>
        </div>
    }
}

class AddTodo extends React.Component {
    constructor() {
        super();

        this.state = {
            
        }
    }

    render() {
        return <div>
            <input ref="newTodo" value={this.state.todos} type="text" />
            <button onClick={ () => { this.addNewTodo() } }>add</button>
        </div>
    }

    addNewTodo() {
        console.log(this);
        this.props.add(this.refs.newTodo.value);
    }
}

class Todos extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <div>
            {this.props.todos.map((item, index) => <li key={ index }>{item}</li>) }
        </div>
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'));
