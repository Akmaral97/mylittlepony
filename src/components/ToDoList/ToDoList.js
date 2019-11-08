import React, { Component } from 'react'
import ToDoListItem from '../ToDoListItem'
import './ToDoList.css'

export default class ToDoList extends Component {
    render() {
        const { todos } = this.props;
        const ToDoElements = todos.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <li key={item.id} className="list-group-item"><ToDoListItem {...itemProps} /></li>
            );
        });
        return (
            <ul className="list-group todo-list">
                {ToDoElements}
            </ul>
        )
    }
}