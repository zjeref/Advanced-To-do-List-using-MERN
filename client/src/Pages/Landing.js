import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import image from './assets/image.png'



const Landing = () => {
    return (
        <div className="lg:h-screen md:w-screen flex justify-center items-center p-10">
            <div className="flex justify-center items-center p-10">
                <div className="max-w-4xl container px-[7%] py-[3%] bg-white h-full flex md:flex-row flex-col justify-between w-full flex-wrap shadow-xl shadow-slate-400">
                    <div className="md:w-1/3 flex flex-col justify-between">
                        <div className="font-bold text-3xl md:text-5xl mb-10">
                            <span className="text-indigo-700">Take</span><span>Outs</span>
                        </div>
                        <div className="mb-10">
                            <h3 className="md:text-3xl text-xl font-bold">Meet your modern</h3>
                            <h3 className="md:text-3xl text-xl font-bold text-indigo-700 mb-3">Note Taking App</h3>
                            <p className="md:text-xl font-medium">Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</p>
                        </div>
                        <div className='flex flex-col'>
                            <Link to="/signup">
                                <button className="bg-indigo-700 w-32 py-2 text-white mb-3 text-lg shadow-lg shadow-slate-400">Join Now</button>
                            </Link>
                            <Link to="/login">
                                <span className="text-blue-600 cursor-pointer">Already have an account?</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 overflow-hidden flex justify-end sr-only md:not-sr-only">
                        <img src={image} alt="" className='md:w-[25vh]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
