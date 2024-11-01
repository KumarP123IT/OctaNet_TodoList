import React, { useState, useEffect } from 'react';
import './styles/App.css';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('/api/tasks')
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, []);

    const addTask = (taskText) => {
        const newTask = { id: Date.now(), text: taskText, completed: false };
        setTasks([...tasks, newTask]);
        fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask),
        });
    };

    const markComplete = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <AddTask addTask={addTask} />
            <TodoList tasks={tasks} markComplete={markComplete} deleteTask={deleteTask} />
        </div>
    );
};

export default App;
