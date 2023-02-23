import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({manageDashboard}) => {
    return (
        <div className="container-lg bg-white p-5 shadow-xl flex items-center">
            <div className='text-3xl px-3 mx-3 flex items-center cursor-pointer md:sr-only not-sr-only' onClick={manageDashboard}>
                <AiOutlineMenu />
            </div>
            <div className="text-4xl font-bold ">
                <span className="text-indigo-700">Take</span><span >Outs</span>
            </div>
        </div>
    )
}

export default Header
