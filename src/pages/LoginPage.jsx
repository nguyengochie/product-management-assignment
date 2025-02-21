import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { AuthCtx } from '../context/AuthContext';
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const [formLogin, setformLogin] = useState({ username: "", password: "" });
    const { onLogin } = useContext(AuthCtx);
    const [errorLogin, setErrorLogin] = useState("");
    const navigate = useNavigate();

    const onInputChange = (field, value) => {
        setformLogin((prev) => ({ ...prev, [field]: value }));
    }

    const onClickLogin = () => {
        const isLogin = onLogin(formLogin.username, formLogin.password);
        if (isLogin) {
            navigate("/admin")
            setErrorLogin("");
        } else {
            setErrorLogin("Vui long nhap dung username va password")
        }
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1>Login</h1>
            <input onChange={(e) => onInputChange("username", e.target.value)} placeholder='username' />
            <input type='password' onChange={(e) => onInputChange("password", e.target.value)} placeholder='password' />
            {errorLogin && <p style={{ color: "red" }}>{errorLogin}</p>}
            <button
                disabled={!formLogin.username || !formLogin.password}
                onClick={onClickLogin}>Login</button>
        </div>
    )
}

export default LoginPage