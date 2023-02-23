import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { MdOutlineColorLens, MdLabelOutline, MdOutlineArchive, MdDeleteOutline } from 'react-icons/md'
import { BsPinFill, BsPinAngle } from 'react-icons/bs'



const TaskCard = ({ task, refreshTasks }) => {
    const date = new Date(task.createdAt)
    const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });


    const managePin = async () => {

        await axios.put(`http://localhost:4000/api/updateTask`, { id: task._id, updateFields: { isPinned: !task.isPinned } })
            .then(res => res.status === 200 ? console.log("updated") : "")
            .catch(err => console.error(err))

        refreshTasks()
    }

    const deleteTask = async () => {
        console.log(task._id)
        await axios.post(`http://localhost:4000/api/deleteTask`, { id: task._id })
            .then(refreshTasks())
            .catch(err => console.error(err));
    }

    return (
        <div className="card max-w-xl  my-6 bg-white rounded-md shadow-xl ">
            <div className='relative'>
                <div className='absolute bottom right-3 top-1 p-4 taskbtn' onClick={managePin}>
                    {task.isPinned ?
                        <BsPinFill /> :
                        <BsPinAngle />
                    }
                </div>
            </div>
            <div className="p-2">
                <div className="text-2xl font-semibold my-2">
                    <p>{task.title}</p>
                </div>
                <div className='my-2'>
                    <p>{task.description}</p>
                </div>
                <div className='flex justify-between text-lg mt-6 '>
                    <div className="text-slate-500 flex items-end">
                        <p>Created on {formattedDate}</p>
                    </div>
                    <div className='flex space-x-2 ml-10 items-end'>
                        <div className='taskbtn'><MdOutlineColorLens /></div>
                        <div className='taskbtn'><MdLabelOutline /></div>
                        <div className='taskbtn'><MdOutlineArchive /></div>
                        <div className='taskbtn' onClick={deleteTask}><MdDeleteOutline /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TaskCard
