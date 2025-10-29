// Handles input and passes new tasks to the parent

import { useState } from "react";

function TaskForm ({ onAdd }) {
    const [title, setTitle] = useState(" ");
    const [description, setDescription] = useState(" ");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title, description);
        setTitle(" ");
        setDescription(" ");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6 max-w-md mx-auto">
            <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded -2"
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border rounded p-2"
            ></textarea>
            <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Task</button>
        </form>
    );
}