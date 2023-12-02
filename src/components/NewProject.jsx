import { useRef } from 'react';
import Input from './Input.jsx';
import Model from './Model.jsx';
export default function NewProject({ onAddProject }) {
    const model = useRef();
    const entertitle = useRef();
    const enterdescription = useRef();
    const enterduedate = useRef();

    function handleAddProject() {
        if (
            entertitle.current.value.trim() === '' ||
            enterdescription.current.value.trim() === '' ||
            enterduedate.current.value.trim() === ''
        ) {
            model.current.open();
            return;
        }
        onAddProject({
            title: entertitle.current.value,
            description: enterdescription.current.value,
            duedate: enterduedate.current.value
        });
    }
    return <>
        <Model ref={model} buttonCaption='close'>
            <h2>Inavild Input</h2>
            <p>oops... looks like you forget to enter a value.</p>
            <p>Please make sure you provide a vaild value for every input.</p>
        </Model>
        <div className="w-[35rem] m-16">
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
    </>
}