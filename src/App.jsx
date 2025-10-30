import { useState, useEffect } from 'react';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList"
// import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed} : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">📝 Task Tracker</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleComplete} onDelete={deleteTask} />

      <p className="text-center mt-4 font-semibold">
        Total Tasks: {tasks.length} | Completed:{" "}
        {tasks.filter((t) => t.completed).length}
      </p>
    </div>
  );
}

export default App;
