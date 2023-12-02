import NewTask from "./NewTask"
export default function Task({ tasks, onAdd, onDelete , projectId}) {
    const projectTasks = tasks.filter((task) => task.projectId === projectId);
    console.log(projectTasks);
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAdd} />
        {projectTasks.length === 0 && <p className="text-stone-800 mb-4">This Project does not have any task yet.</p>}
        {projectTasks.length > 0 && <ul>
            {projectTasks.map(task => {
                return <li key={task.id} className="flex justify-between my-4">
                    <span>{task.text}</span>
                    <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
                </li>
            }
            )}
        </ul>}
    </section>
}