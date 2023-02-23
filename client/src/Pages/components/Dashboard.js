import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import CreateTask from './CreateTask';

import { FaHome, FaArchive, FaTrash, FaUserAlt } from 'react-icons/fa'
import { MdLabel } from 'react-icons/md'
import { AiOutlineLogout } from "react-icons/ai";



const Dashboard = ({ userData, newTaskAdded, isDashboardOpen }) => {
    //Logout and navigate
    const navigate = useNavigate();
    const logout = () => {
        Cookies.remove("authToken")
        navigate('/')
    }

    //Toggle Modal
    const [isModalOpen, setModalOpen] = useState(false)
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    //Toggle Dashboard

    //absolute bg-white left-0

    return (
        <>
            {isModalOpen ?
                <CreateTask toggleModal={toggleModal} userId={userData.id} newTaskAdded={newTaskAdded} /> :
                ""
            }
            <div className={`${isDashboardOpen ? "absolute bg-white left-0" : "h-full w-1/3 flex flex-col justify-between border-r-2 sr-only md:not-sr-only"} z-10 border-black  shadow-2xl `}>
                <div className="p-10 ">
                    <div className="flex flex-col space-y-6 text-2xl mb-5">
                        <div className="nav-buttons">
                            <FaHome />
                            <p className="">Home</p>
                        </div>
                        <div className="nav-buttons">
                            <MdLabel />
                            <p>Labels</p>
                        </div>
                        <div className="nav-buttons">
                            <FaArchive />
                            <p>Archives</p>
                        </div>
                        <div className="nav-buttons">
                            <FaTrash />
                            <p>Trash</p>
                        </div>
                        <div className="nav-buttons">
                            <FaUserAlt />
                            <p>Profile</p>
                        </div>
                    </div>
                    <div className="">
                        <button className='createBtn bg-indigo-700 text-white active:bg-indigo-900' onClick={toggleModal}>Create New Note</button>
                    </div>
                </div>
                <div className="flex space-x-5 items-center flex-wrap space-y-2 p-10 justify-center">

                    <div className=" text-3xl border-r-2 border-black pr-4">{userData.name}</div>
                    <div className="cursor-pointer flex items-center space-x-3 text-2xl bg-indigo-500 px-2 py-1 rounded-lg text-white hover:bg-indigo-700 active:bg-indigo-900" onClick={logout}>Log Out<AiOutlineLogout /></div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
