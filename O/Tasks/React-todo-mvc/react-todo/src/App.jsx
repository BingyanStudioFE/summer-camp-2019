import React from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import Choose from "./Choose";
import css from "./App.module.css";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos:  ["吃饭", "睡觉", "打豆豆"],
            checked:[0,0,0],
            done:   [],
            undone: ["吃饭", "睡觉", "打豆豆"],
            //表示item显示类型：0为全部显示，1为active，2为completed
            choose: 0
        }
        this.add = this.add.bind(this);                     //将this绑定到app组件上
    }

    render() {
        return <div id={css.everything}>
            <h1 id={css.caption}>react todos</h1>
            <AddTodo todos={this.state.todos} add={this.add} undone={this.undone}></AddTodo>            {/*父组件传函数给子组件*/}
            <Todos  choose={this.state.choose} done={this.state.done} undone={this.state.undone} todos={this.state.todos} deldone={this.deldone} delundone={this.delundone} checked={this.state.checked} complete={this.complete}></Todos>
            <Choose confirm={this.confirmChoose} clear={this.clear}></Choose>
        </div>
    }

    add(newTodo) {
        //这里记住:一定不能直接this.state.push()，否则会报错
        let newTodos = this.state.todos;
        let newUndone = this.state.undone;
        let newChecked = this.state.checked;
        newTodos.push(newTodo);
        newUndone.push(newTodo);
        newChecked.push(0);
        console.log(newTodos);
        this.setState(
            {
                todos: newTodos,
                undone:newUndone,
                checked:newChecked
            }
        )
        document.getElementById("whatToDo").value = "";
    }

    deldone = (tobeDel, id) => {
        let newTodos = this.state.todos;
        let newChecked = this.state.checked;
        newTodos.splice(id, 1);
        newChecked.splice(id, 1);
        let newDone = this.state.done;
        let BreakException = {};
        try {
            newDone.forEach((item, index) => {
                if(item === tobeDel) {
                    newDone.splice(index, 1);
                    throw BreakException;
                }
            });
        } 
        catch(e) {
            if (e !== BreakException) throw e;
        }

        //只要调用了setState，页面就会自动刷新
        this.setState(
            {
                todos: newTodos,
                done: newDone,
                checked:newChecked
            }
        )
    }
    delundone = (tobeDel, id) => {
        let newTodos = this.state.todos;
        let newChecked = this.state.checked;
        newTodos.splice(id, 1);
        newChecked.splice(id, 1);
        let newUndone = this.state.undone;
        let BreakException = {};
        try {
            newUndone.forEach((item, index) => {
                if(item === tobeDel) {
                    newUndone.splice(index, 1);
                    throw BreakException;
                }
            });
        } 
        catch(e) {
            if (e !== BreakException) throw e;
        }
        this.setState(
            {
                todos: newTodos,
                undone:  newUndone,
                checked: newChecked
            }
        )
    }
    complete = (tobeComplete, ifdone, id) => {
        if(ifdone) {
            let newDone = this.state.done;
            newDone.push(tobeComplete);
            let newChecked = this.state.checked;
            newChecked[id] = 1;
            let newUndone = this.state.undone;
            let BreakException = {};
            try {
                newUndone.forEach((item, index) => {
                    if(item === tobeComplete) {
                        newUndone.splice(index, 1);
                        throw BreakException;
                    }
                });
            } 
            catch(e) {
                if (e !== BreakException) throw e;
            }
            this.setState(
                {
                    done: newDone,
                    undone:newUndone,
                    checked:newChecked
                }
            )
        }

        else {
            let newUndone = this.state.undone;
            newUndone.push(tobeComplete);
            let newChecked = this.state.checked;
            newChecked[id] = 0;
            let newDone = this.state.done;
            let BreakException = {};
            try {
                newDone.forEach((item, index) => {
                    if(item === tobeComplete) {
                        newDone.splice(index, 1);
                        throw BreakException;
                    }
                });
            } 
            catch(e) {
                if (e !== BreakException) throw e;
            }
            this.setState(
                {
                    done: newDone,
                    undone:newUndone,
                    checked:newChecked
                }
            )
        }

    }

    clear = () => {
        let Todos = this.state.todos;
        let Done = this.state.done;
        let Checked = this.state.checked;
        let iArr = [];
        let flag = [];
        for(let i = 0; i < Done.length; i++){
            flag[i] = false;
        }
        console.log("preTodos:",Todos);
        console.log("predone",Done);
        for(let i = 0; i < Todos.length; i++) {
            for(let j = 0; j < Done.length; j++){
                if(Todos[i] === Done[j] && !flag[j]){
                    iArr.push(i);
                    flag[j] = true;
                }
            }
        }
        for(let i = 0; i < iArr.length; i++){
            let j = i;
            Todos.splice(iArr[i], 1);
            Checked.splice(iArr[i], 1);
            for(; j < iArr.length; j++){
                iArr[j]--;
            }
        }
        Done = [];
        console.log("todos:",Todos);
        console.log("done:",Done);
        this.setState(
            {
                todos:      Todos,
                done:       Done,
                checked:    Checked,
                choose:     0
            }
        ) 
    }

    confirmChoose = (num) => {
        this.setState(
            {
                choose:         num
            }
        ) 
    }

}
