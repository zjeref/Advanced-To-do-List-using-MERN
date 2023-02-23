import React, { useState } from 'react'
import axios from 'axios';

const CreateTask = ({ toggleModal, userId, newTaskAdded }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);

    const manageTags = (e) => {
        const tag = e.target.value;
        const isChecked = e.target.checked;
        if (isChecked) {
            setTags([...tags, tag])
        } else {
            setTags(tags.filter(tg => tg !== tag))
        }
    }

    const createTask = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4000/api/addTask`, {
            title: title,
            description: description,
            tags: tags,
            user: userId
        })
            .then(res => {
                if (res.status === 200) {
                    toggleModal();
                    newTaskAdded();
                }
            })
            .catch(err => console.error(err))
    }


    return (
        <div className='bg-white  py-2 px-4 fixed top-1/5 md:left-1/2 md:-translate-x-1/2 shadow-slate-500 shadow-2xl z-20'>
            <form className='py-4' onSubmit={createTask}>
                <div>
                    <h1 className='text-3xl text-center font-semibold underline'>Create your Task</h1>
                </div>
                <div>
                    <div className='flex flex-col my-2 space-y-2'>
                        <label htmlFor="taskTitle" className="text-2xl">Title</label>
                        <input type="text" id="taskTitle" placeholder="Whats need to be done?" className='login-input text-xl' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='flex flex-col my-2 space-y-2'>
                        <label htmlFor="descTitle" className="text-2xl">Description</label>
                        <textarea type="text" id="descTitle" rows="5" placeholder="Optional Description of works" className='login-input text-xl' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='my-4 text-xl grid grid-cols-3 gap-2'>
                        <div className='space-x-2 flex items-center'>
                            <input id="work" type="checkbox" className='h-5 w-5' value='Work' onChange={(e) => manageTags(e)} />
                            <label htmlFor="Work">Work</label>
                        </div>
                        <div className='space-x-2 flex items-center'>
                            <input id="Exercise" type="checkbox" className='h-5 w-5' value='Exercise' onChange={(e) => manageTags(e)} />
                            <label htmlFor="Exercise">Exercise</label>
                        </div>
                        <div className='space-x-2 flex items-center'>
                            <input id="Social" type="checkbox" className='h-5 w-5' value='Social' onChange={(e) => manageTags(e)} />
                            <label htmlFor="Social">Social</label>
                        </div>
                        <div className='space-x-2 flex items-center'>
                            <input id="Heath" type="checkbox" className='h-5 w-5' value='Heath + Wellness' onChange={(e) => manageTags(e)} />
                            <label htmlFor="Heath">Heath + Wellness</label>
                        </div>
                        <div className='space-x-2 flex items-center'>
                            <input id="Chores" type="checkbox" className='h-5 w-5' value='Chores' onChange={(e) => manageTags(e)} />
                            <label htmlFor="Chores">Chores</label>
                        </div>
                        <div className='space-x-2 flex items-center'>
                            <input id="Academics" type="checkbox" className='h-5 w-5' value='Academics' onChange={(e) => manageTags(e)} />
                            <label htmlFor="Academics">Academics</label>
                        </div>
                    </div>
                </div>
                <div className='space-x-2 w-full flex justify-end'>
                    <button className="createBtn bg-red-500 active:bg-red-900 border-red-900" onClick={toggleModal}>Cancel</button>
                    <button type='submit' className="createBtn bg-indigo-500 active:bg-indigo-900 border-indigo-900" onClick={createTask}>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
