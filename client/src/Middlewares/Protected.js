import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Landing from '../Pages/Landing'

import Cookies from 'js-cookie'
import axios from 'axios'



const Protected = (props) => {
    const { Component } = props
    const authToken = Cookies.get('authToken') //get JWT token from cookies

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        if (!authToken) {
            navigate('/')
            return;
        }

        console.log(authToken)
        const headers = {
            'Authorization': `Bearer ${authToken}`
        };
        getUser(headers)

    }, [authToken])

    const getUser = async (headers) => {
        await axios.get("http://localhost:4000/api/me", { headers })
            .then(res => {
                const userData = res.data;
                setUser({
                    id: userData._id,
                    name: userData.name,
                    username: userData.username,
                    email: userData.email
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Component userData={user} />
    )
}

export default Protected
