import { createContext } from "react";
import React, { useEffect, useState } from "react";

export const LoginContext = createContext();

function LoginProvider({ children }) {
    const [showLogBtn, setShowLogBtn] = useState(true);
    useEffect(() => {
        (window.location.pathname == '/login' || window.location.pathname == '/profile') && (setShowLogBtn(false))
    }, [])
    return <LoginContext.Provider value={{showLogBtn}}>
        {children}
    </LoginContext.Provider>
}
export default LoginProvider