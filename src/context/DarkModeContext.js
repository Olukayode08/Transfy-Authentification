import React, { createContext, useState } from 'react'

const ThemeContext = createContext(null)

const DarkModeContext = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))
  }
  return (
    <>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export { DarkModeContext, ThemeContext }
