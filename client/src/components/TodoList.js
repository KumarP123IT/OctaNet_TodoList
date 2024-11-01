import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, markComplete, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} markComplete={markComplete} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TodoList;
