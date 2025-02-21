import React from 'react'
import { LOGIN_PARAM } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const AdminPge = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem(LOGIN_PARAM);
        navigate("/login")
    }
    return (
        <div>
            <h1>AdminPge</h1>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}

export default AdminPge