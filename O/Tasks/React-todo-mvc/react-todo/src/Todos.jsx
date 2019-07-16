import React from "react";
//命名问题！纯数字，巨大的坑……
import css from "./Todos.module.css";

export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render = () => {
        if(this.props.choose === 0){
            return <ul className={css.todolist}>
            {
                this.props.todos.map(function (item, index) {
                    return (
                        <div key={index} className={css.items}>
                            <input className={css.inputBox} type="checkbox" checked={this.props.checked[index] === 0 ? false : true} onClick={this.doneTodo} />
                            <li className={this.props.checked[index] === 0 ? "listundone" : "listdone"}>
                                <label className={css.labels}>{item}</label>
                                <button className={css.buttons}onClick={this.delTodo} index={index}>
                                    ×
                                    {/* <img width="10px" src={require("./assets/del.png")} alt="" /> */}
                                </button>
                            </li>
                        </div>
                    );
                }.bind(this))
                
            }
        </ul>
        }
        else if(this.props.choose === 1) {
            return <ul className={css.todolist}>
                {
                    this.props.undone.map(function (item, index) {
                        return <div key={index} className={css.items}>
                            <input className={css.inputBox} type="checkbox"/>
                            <li className="listundone">
                                <label>{item}</label>
                            </li>
                        </div>
                    })
                }
            </ul>
        }
        else if(this.props.choose === 2) {
            return <ul className={css.todolist}>
                {
                    this.props.done.map(function (item, index) {
                        return <div key={index} className={css.items}>
                            <input className={css.inputBox} checked type="checkbox"/>
                            <li className="listdone">
                                <label>{item}</label>
                            </li>
                        </div>
                    })
                }
            </ul>
        }
        // else {
        //     console.log("clear!!");
        //     // this.props.choose = 0;
        // //     this.props.clear();
        // //     return <ul className={css.todolist}>
        // //     {
        // //         this.props.todos.map(function (item, index) {
        // //             return (
        // //                 <div key={index} className={css.items}>
        // //                     <input className={css.inputBox} type="checkbox" checked={this.props.checked[index] === 0 ? false : true} onClick={this.doneTodo} />
        // //                     <li className={this.props.checked[index] === 0 ? "listundone" : "listdone"}>
        // //                         <label className={css.labels}>{item}</label>
        // //                         <button className={css.buttons}onClick={this.delTodo} index={index}>
        // //                             ×
        // //                             {/* <img width="10px" src={require("./assets/del.png")} alt="" /> */}
        // //                         </button>
        // //                     </li>
        // //                 </div>
        // //             );
        // //         }.bind(this))
                
        // //     }
        // // </ul>
            
        // }
    }
        
    doneTodo = (event) => {
        let listDone = event.target.nextSibling;
        let tobeComplete = listDone.children[0].innerHTML;
        let id = listDone.children[1].getAttribute("index");
        // console.log(id);
        if (event.target.checked === true) {
            // listDone.style.textDecoration = "line-through";
            // listDone.style.color = "grey";
            listDone.className = "listdone";
            this.props.complete(tobeComplete, true, id);
        }
        else {
            // listDone.style.textDecoration = "none";
            // listDone.style.color = "black";
            listDone.className = "listundone";
            this.props.complete(tobeComplete, false, id);
        }
        // console.log(listDone.style);
    }

    delTodo = (event) => {
        let tobeDel = event.target.previousSibling.innerHTML;
        let ifdone = event.target.parentNode.previousSibling.checked;
        // console.log(event.target.parentNode.previousSibling.checked);
        let id = event.target.getAttribute("index");
        if(ifdone) {
            this.props.deldone(tobeDel, id);
        }
        else {
            console.log("this is delundone", tobeDel)
            this.props.delundone(tobeDel, id);
        }
        
    }

}