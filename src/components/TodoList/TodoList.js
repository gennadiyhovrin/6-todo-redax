import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";
import { useSelector } from "react-redux";


export default function TodoList() {
    const { todoItems } = useSelector((state) => ({
        todoItems: state.todoItems,
    }));
   
  return (
    <div className="container">
    <ul className="list-group">
      {todoItems.map((item) => (
        <TodoItem key={item.id} items={item} />
      ))}

      <TodoForm />
    </ul>
    </div>
  );
}
