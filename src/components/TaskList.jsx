// Renders all tasks.
import TaskItem from "./TaskItem"

function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
        return <p className="text-center text-gray-500">No tasks yet.</p>
    }

    return (
        <div className="max-w-md mx-auto flex flex-col gap-2">
            {tasks.map((task) => (
                <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TaskList;