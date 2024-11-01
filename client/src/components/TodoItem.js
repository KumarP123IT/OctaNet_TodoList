import React from 'react';

const TodoItem = ({ task, markComplete, deleteTask }) => {
    return (
        <div className="todo-item">
            <span className={task.completed ? 'completed' : ''}>
                {task.text}
            </span>
            <div>
                <button onClick={() => markComplete(task.id)}>Complete</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;
