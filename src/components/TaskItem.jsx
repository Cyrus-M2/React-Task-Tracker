// Displays individual tasks.
import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
    const [isEditing, SetIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDesc, setEditedDesc] = useState(task.description)

    const handleSave = () => {
        onEdit(task.id, editedTitle, editedDesc);
        SetIsEditing(false);
    }
    return (
        <div
        className={`flex flex-col sm:flex-row justify-between gap-3 items-start p-3 rounded border shadow-sm ${
            task.completed ? "bg-green-100" : "bg-white"
            }`}
            >
                <div className="flex-1">
                    {isEditing ? (
                        <>
                        <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        className="border p-1 w-full rounded mb-2"
                        />
                        <textarea
                        value={editedDesc}
                        onChange={(e) => setEditedDesc(e.target.value)}
                        className="border p-1 w-full rounded"
                        />
                        </>
                    ) : (
                        <>
                        <h3
                        className={`font-semibold $ {
                            task.completed ? "line-through text-gray-500" : ""
                            }`}
                            >
                                {task.title}
                            </h3>
                            <p className="text-sm text-gray-600">{task.description}</p>
                        </>
                    )}
                </div>
                {/* <div>
                    <h3 className={`font-semibold ${
                        task.completed ? "line-through text-gray-500" : ""
                    }`}
                    >
                        {task.title}
                    </h3>
                    <p className="text-sm text-gray-600">{task.description}</p>
                </div> */}
                <div className="flex gap-2">
                    {isEditing ? (
                        <>
                        <button
                        onClick={handleSave}
                        className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
                        >
                            Save
                        </button>
                        <button
                        onClick={() => SetIsEditing(false)}
                        className="text-sm bg-gray-400 text-white px-2 py-1 rounded"
                        >
                            Cancel
                        </button>
                        </>
                    ) : (
                        <>
                    <button
                    onClick={() => onToggle(task.id)}
                    className="text-sm bg-green-500 text-white px-2 py-1 rounded">
                        {task.completed ? "Undo" : "Done"}
                    </button>
                    <button
                    onClick={() => SetIsEditing(true)}
                    className="text-sm bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                        Edit
                    </button>
                    <button
                    onClick={() => onDelete(task.id)}
                    className="text-sm bg-red-500 text-white px-2 py-2 rounded">
                        Delete
                    </button>
                        </>
                    )}

                </div>
                </div>
    );
}

export default TaskItem;