import React, { createContext, useState } from 'react'

const ThemeContext = createContext(null)

const DarkModeContext = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
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
