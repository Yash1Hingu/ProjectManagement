export default function SelectedProject({project}) {
    const formatedDate = new Date(project.duedate).toLocaleString('en-US',{
        year: '2-digit',
        month: 'short',
        day: 'numeric'
    })

    return <div className="ml-8">
        <header className="w-[35rem] mt-16">
            <div className="flex justify-between pb-4 mb-4 border-b-2 border-stone-300">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <button className="text-stone-600 hover:text-stone-950">Delete</button>
            </div>
            <p className="mb-4 text-stone-400">{formatedDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
        </header>
    </div>
}