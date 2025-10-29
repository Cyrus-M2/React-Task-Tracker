// Displays individual tasks.

function TaskItem({ task, onToggle, onDelete}) {
    return (
        <div
        className={`flex justify-between items-start p-3 rounded border shadow-sm ${
            task.completed ? "bg-green-100" : "bg-white"
            }`}
            >
                <div>
                    <h3 className={`font-semibold ${
                        task.completed ? "line-through text-gray-500" : ""
                    }`}
                    >
                        {task.title}
                    </h3>
                    <p className="text-sm text-gray-600">{task.description}</p>
                </div>
                <div className="flex gap-2">
                    <button
                    onClick={() => onToggle(task.id)}
                    className="text-sm bg-green-500 text-white px-2 py-1 rounded">
                        {task.completed ? "Undo" : "Done"}
                    </button>
                    <button
                    onClick={() => onDelete(task.id)}
                    className="text-sm bg-red-500 text-white px-2 py-2 rounded">
                        Delete
                    </button>
                </div>
                </div>
    );
}

export default TaskItem;