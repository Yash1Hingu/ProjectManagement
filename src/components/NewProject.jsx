import { useRef } from 'react';
import Input from './Input.jsx';
export default function NewProject({ onAddProject }) {
    const entertitle = useRef();
    const enterdescription = useRef();
    const enterduedate = useRef();

    function handleAddProject() {
        onAddProject({
            title: entertitle.current.value,
            description: enterdescription.current.value,
            duedate: enterduedate.current.value
        });
    }
    return <div className="w-[35rem] m-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button onClick={handleAddProject} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
        </menu>
        <div>
            <Input ref={entertitle} label='Title' />
            <Input ref={enterdescription} label='Description' textarea />
            <Input type='date' ref={enterduedate} label='Due Date' />
        </div>
    </div>
}