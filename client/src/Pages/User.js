import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TaskCard from './components/TaskCard';
import SearchBar from './components/SearchBar';





const User = ({ userData }) => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetchData();
    }, [userData]);

    async function fetchData() {
        try {
            const res = await axios.post(`http://localhost:4000/api/userTask`, { id: userData.id }); //63f61cec492d4ea671694876
            const data = res.data;
            if (data) {
                data.reverse();
                const pinnedTasks = data.filter((task) => task.isPinned);
                const unpinnedTasks = data.filter((task) => task.isPinned === false);
                setTasks(pinnedTasks.concat(unpinnedTasks));
            }
            else {
                setTasks([])

            }
        } catch (err) {
            console.error("Failed to retrieve tasks:", err);
            setTasks([]);
        }
    }


    //Toggling dashboard
    const [isDashboardOpen, setDashboardOpen] = useState(false)
    const manageDashboard = () => {
        setDashboardOpen(!isDashboardOpen)
    }

    const refreshTasks = () => {
        fetchData();
    }
    return (
        <div className="w-screen h-[92vh] min-h-[50vh] select-none">
            <Header manageDashboard={manageDashboard} />
            <div className="h-full w-full flex justify-center ">
                <div className="h-full w-full md:max-w-7xl flex md:justify-between justify-center shadow-2xl">
                    <Dashboard userData={userData} newTaskAdded={refreshTasks} isDashboardOpen={isDashboardOpen}/>
                    <div className="md:w-2/3 w-full flex flex-col items-center mt-2 ">
                        <SearchBar />
                        <div className="overflow-y-auto">

                            {tasks.map((task) => {
                                return <TaskCard key={task._id} task={task} refreshTasks={refreshTasks} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default User
