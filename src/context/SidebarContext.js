import { createContext, useState } from "react";

export const SidebarContext = createContext();

function SidebarProvider({ children }) {
    const [sidebarFull, setSidebarFull] = useState(true);
    const changeSidebar=(value)=>{
        setSidebarFull(!value);
    }
    return <SidebarContext.Provider value={{sidebarFull, setSidebarFull,changeSidebar}}>
        {children}
    </SidebarContext.Provider>
}
export default SidebarProvider