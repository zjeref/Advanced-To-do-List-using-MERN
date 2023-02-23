import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import axios from "axios";

import image from './assets/image.png'



const Signup = () => {
    const [f_name, setf_name] = useState({ fname: '', errorValidation: false })
    const [email, setemail] = useState({ email: '', errorValidation: false })
    const [username, setusername] = useState({ username: '', errorValidation: false })
    const [password, setpassword] = useState({ password: '', errorValidation: false })
    const navigate = useNavigate();
    const storeData = async (data) => {

        await axios.post(`http://localhost:4000/api/signup`, {
            name: data.name,
            username: data.username,
            email: data.email,
            password: data.password
        })
            .then(res => {
                console.log(res.data.token)
                Cookies.set('authToken', res.data.token, { expires: 30 });
                navigate('/user', { replace: true });
            })
            .catch(err => {
                console.log(err);
                alert(err)
            })
    }


    const validate = (e) => {
        if (e.target.id === 'fName') {
            const fname = e.target.value;
            if (fname.length < 3) {
                e.target.className = 'login-input error-validation';
                setf_name({ fname: "", errorValidation: true });
            } else {
                e.target.className = 'login-input';
                setf_name({ fname: e.target.value, errorValidation: false })
            }
        }

        if (e.target.id === 'username') {
            const username = e.target.value;
            if (username.length < 3) {
                e.target.className = 'login-input error-validation';
                setusername({ username: "", errorValidation: true });
            } else {
                e.target.className = 'login-input';
                setusername({ username: e.target.value, errorValidation: false })
            }
        }

        if (e.target.id === 'Email') {
            const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if (!e.target.value.match(pattern)) {
                e.target.className = 'login-input error-validation';
                setemail({ email: "", errorValidation: true });
            } else {
                e.target.className = 'login-input';
                setemail({ email: e.target.value, errorValidation: false })
            }
        }

        if (e.target.id === 'Password') {
            // const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            if (e.target.value.length === 8) {
                e.target.className = 'login-input error-validation';
                setpassword({ password: "", errorValidation: true });
            } else {
                e.target.className = 'login-input';
                setpassword({ password: e.target.value, errorValidation: false })
            }
        }
    }

    const submitData = (e) => {
        e.preventDefault();
        if (!f_name.fname || !username.username || !email.email || !password.password) {
            return alert("Please fill out correctly");
        }
        storeData({ name: f_name.fname, username: username.username, email: email.email, password: password.password });
    }

    return (
        <div className="lg:h-screen md:w-screen flex justify-center items-center p-10">
            <div className="flex justify-center items-center">
                <div className="max-w-4xl container px-[7%] py-[3%] bg-white h-full flex md:flex-row flex-col justify-between w-full flex-wrap shadow-slate-500 shadow-xl">
                    <div className="w-1/2 overflow-hidden flex justify-end sr-only md:not-sr-only">
                        <img src={image} alt="" className='w-[20vh] scale-x-[-1]' />
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center space-y-7">
                        <h3 className='text-3xl '>Create account</h3>
                        <form onSubmit={submitData} className="form-horizontal md:text-2xl">
                            <div className="space-y-3 mb-4">
                                <div>
                                    <label htmlFor="fName" className='ml-2'>Full Name</label>
                                    <input type="text" id='fName' placeholder="Full Name" className='login-input' onChange={validate} />
                                    {f_name.errorValidation ? <p className='ml-2 text-red-600 text-sm'>Name must be larger than 3 letters</p> : ""}
                                </div>
                                <div>
                                    <label htmlFor="username" className='ml-2'>User Name</label>
                                    <input type="text" id='username' placeholder="User Name" className='login-input' onChange={validate} />
                                    {username.errorValidation ? <p className='ml-2 text-red-600 text-sm'>User Name must be larger than 3 letters</p> : ""}
                                </div>
                                <div>
                                    <label htmlFor="Email" className='ml-2'>Email Address</label>
                                    <input type="text" id='Email' placeholder="Email" className='login-input' onChange={validate} />
                                    {email.errorValidation ? <p className='ml-2 text-red-600 text-sm'>Email is invalid</p> : ""}
                                </div>
                                <div>
                                    <label htmlFor="Password" className='ml-2'>Password</label>
                                    <input type="password" id='Password' placeholder="Password" className='login-input' onChange={validate} />
                                    {password.errorValidation ? <p className='ml-2 text-red-600 text-sm'>Password must be at least 2 characters long</p> : ""}
                                </div>
                            </div>
                            <div className="w-full flex flex-col mb-7">
                                <button type='submit' className='px-4 py-2 mt-4 mb-2 bg-indigo-500 text-white rounded-md w-3/5 shadow-lg shadow-slate-500 border-indigo-900 hover:border-2 active:bg-indigo-900'>Submit</button>
                                <Link to="/login">
                                    <span className="text-blue-600 cursor-pointer">Already have an account?</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
