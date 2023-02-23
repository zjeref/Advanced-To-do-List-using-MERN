import React from 'react'
import {useNavigate} from "react-router-dom";
import { useState } from 'react'
import axios from "axios";
import Cookies from 'js-cookie'
import image from './assets/image.png'

const Signin = () => {
    const navigate = useNavigate();
    
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const checkPassword = async (data) => {
        await axios.post(`http://localhost:4000/api/login`, {
            email: data.email,
            password: data.password
        })
            .then((res) => {
                Cookies.set('authToken', res.data.token);
                console.log(res.data)
                navigate('/user', {replace:true})
            })
            .catch(err => alert(err))
    }

    const submitData = (e) => {
        e.preventDefault()
        checkPassword({
            email: email,
            password: password
        })
    }
    return (
        <div className="lg:h-screen md:w-screen flex justify-center items-center p-10">
            <div className="flex justify-center items-center">
                <div className="max-w-4xl container px-[7%] py-[3%] bg-white h-full flex md:flex-row flex-col justify-between w-full flex-wrap shadow-slate-500 shadow-xl">
                    <div className="w-1/2 overflow-hidden flex justify-end sr-only md:not-sr-only">
                        <img src={image} alt="" className='md:w-[25vh] scale-x-[-1]' />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center space-y-7">
                        <h3 className='md:text-3xl text-2xl'>Sign in</h3>
                        <form onSubmit={submitData} className="form-horizontal md:text-2xl">
                            <div className="space-y-3 mb-4">
                                <div>
                                    <label htmlFor="Email" className='ml-2'>Email Address</label>
                                    <input type="text" id='Email' placeholder="Email" className='login-input' onChange={(e) => setemail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="Password" className='ml-2'>Password</label>
                                    <input type="password" id='Password' placeholder="Password" className='login-input' onChange={(e) => setpassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="w-full flex flex-col mb-7">
                                <button type='submit' className='px-4 py-2 mt-4  bg-indigo-700 text-white rounded-md w-3/5 shadow-xl'>Submit</button>
                                <span className='mt-2 text-blue-600 cursor-pointer'>Forgot your password?</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
