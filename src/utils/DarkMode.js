import React, { useContext } from 'react'
import ReactSwitch from 'react-switch'
import styled from 'styled-components'
import { ThemeContext } from '../context/DarkModeContext'

const DarkMode = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <>
      <Wrapper>
        <main>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
        </main>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  position: relative;
  main {
    position: absolute;
    top: 15px;
    right: 50%;
    z-index: 20;
  }
  @media screen and (max-width: 600px) {
    main {
      right: 15px;
    }
  }
`
export default DarkMode
