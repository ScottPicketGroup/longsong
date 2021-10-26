import React, { createContext, useContext, useState } from "react"

const ActivePageContext = createContext()

export const ActivePageProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePage, setActivePage] = useState(2)

  const handleOpenMenuClick = activePage => {
    setMenuOpen(true)
    setActivePage(activePage)
  }

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
