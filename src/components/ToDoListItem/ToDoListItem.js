import React, { Component } from 'react'
import "./ToDoListItem.css"

export default class ToDoListItem extends Component {
    render() {

       const  { label, important = false } = this.props 
        const spanStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }
        return (
            <span className="todo-list-item" >
                <span
                    className="todo-list-item-label"
                    style={spanStyle}>
                    {label}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    };
}
