import React, { createContext, useContext, useState, useEffect } from "react"
import { useLocation } from "@reach/router"
const ActivePageContext = createContext()

export const ActivePageProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState()
  const location = useLocation();

  console.log(location.hash)
  const handleOpenMenuClick = activePage => {
    setMenuOpen(true)
    setActivePage(activePage)
  }
useEffect(() => {
 
  
  if(location.hash === "#whats-on") {
    setActivePage(6)
     setMenuOpen(true)
   } else if (location.hash === "#bar") {
    setActivePage(2)
     setMenuOpen(true)
   } else if (location.hash === "#private-events") {
    setActivePage(3)
     setMenuOpen(true)
   }else if (location.hash === "gift-vouchers") {
    setActivePage(4)
     setMenuOpen(true)
   }
   else if (location.hash === "##contact") {
    setActivePage(5)
     setMenuOpen(true)
   } else {
    setActivePage(2)
   }
}
, [location]);
  return (
    <ActivePageContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        activePage,
        setActivePage,
        handleOpenMenuClick
      }}
    >
      {children}
    </ActivePageContext.Provider>
  )
}

const useActivePage = () => {
  const context = useContext(ActivePageContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export default useActivePage
