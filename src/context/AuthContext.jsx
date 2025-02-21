import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const LOGIN_PARAM = "isauth";

const getAuthFromLocal = () => {
    return !!localStorage.getItem(LOGIN_PARAM)
}

export const AuthCtx = createContext();

const AuthProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(getAuthFromLocal());

    const onLogin = (username, password) => {
        if (username === "admin" && password === "1234") {
            setIsAuth(true);
            localStorage.setItem(LOGIN_PARAM, true);
            return true;
        } else {
            localStorage.removeItem(LOGIN_PARAM);
            setIsAuth(false);
            return false;
        }
    }

    return (
        <AuthCtx.Provider value={{ isAuth, onLogin }}>
            {children}
        </AuthCtx.Provider>
    )
}

export default AuthProvider