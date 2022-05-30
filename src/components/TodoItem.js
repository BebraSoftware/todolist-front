import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from "react";

//Single todo item component
const TodoItem = (props) => {
    //Get todoList from todoReducer
    const todoList = useSelector(state => state.todos.todoList)
    //Use for all the dispatch actions
    const dispatch = useDispatch();

    //Local state for checkbox - Task is Done or not
    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
        setActive(!isActive);
    };

    const [isImp, setImp] = useState("false");

    const ToggleStar = () => {
        setImp(!isImp);
        console.log("work bitch");
    };

    //Remove single todo in the list
    const removeTodoItem = (todoId) => {
        //filter to get the todoId which need to be remove
        let newTodoList = todoList.filter(item => item.id !== todoId);
        dispatch({type: 'REMOVE_TODO', payload: newTodoList})

    }

    return (

        <li className="collection-item animate__animated animate__fadeInDown" key={props.item.id}>

            <span className={isImp ? "star_off" : "star_on"}>
                <span className="star_off behind" onClick={ToggleStar}></span>
                <button className="star first" onClick={ToggleStar}></button>
            </span>

            <span className={isActive ? "inactive" : "active"}>
                <span className="task_name">{props.item.content}</span>
                <span className="done_butt" onClick={ToggleClass}></span>
            </span>
            <span onClick={() => {removeTodoItem(props.item.id)}} className="secondary-content biner"> </span>
        </li>
    );
}

export default TodoItem;
