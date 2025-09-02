import { createContext, useState } from "react";

export const SidebarMenuContext = createContext();

function SidebarMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarMenuContext.Provider>
  );
}

export default SidebarMenuProvider;
