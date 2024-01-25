import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Squash as Hamburger } from 'hamburger-react'
import { VscArrowSwap } from 'react-icons/vsc'
import { FaHeadphones } from 'react-icons/fa'
import { ImStatsBars } from 'react-icons/im'
import { BsCashCoin } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { SiYoutubemusic } from 'react-icons/si'
import { Link, useLocation } from 'react-router-dom'

const LeftSidebar = () => {
  const [active, setActive] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)
  const location = useLocation()

  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleSize)
    handleSize()
    return () => window.removeEventListener('resize', handleSize)
  }, [])

  useEffect(() => {
    if (screenSize <= 1200) {
      setActive(false)
    } else {
      setActive(true)
    }
  }, [screenSize])

  return (
    <>
      <Wrapper>
        <section>
          <main className={active ? 'sidebar' : null}>
            <div className='sidebar-btn'>
              <Hamburger
                toggled={active}
                toggle={setActive}
                easing='ease-in'
                size={20}
                direction='left'
              />
            </div>
            <div>
              {active && (
                <div className='left-sidebar'>
                  <h1>Tract SEO</h1>
                  <Link className='links' to='/*'>
                    <VscArrowSwap />
                    <p className='desc'>Dashboard</p>
                  </Link>
                  <Link className='links' to='/*'>
                    <FaUser />
                    <p className='desc'>Overview</p>
                  </Link>
                  <h4>My Campaign</h4>
                  <Link className='links' to='/*'>
                    <BsCashCoin />
                    <p className='desc'>Earnings</p>
                  </Link>
                  <Link
                    className={
                      location.pathname === '/project-four'
                        ? 'links active'
                        : 'links active'
                    }
                  >
                    <ImStatsBars />
                    <p className='desc'>Social Stats</p>
                  </Link>
                  <Link className='links' to='/*'>
                    <FaHeadphones />
                    <p className='desc'>Audio/Music</p>
                  </Link>
                  <Link className='links' to='/*'>
                    <SiYoutubemusic />
                    <p className='desc'>Media</p>
                  </Link>
                  <div className='discount'>
                    <h3>40% Off</h3>
                    <p className='courses'>On every Courses</p>
                    <p className='courses'>Get yours now</p>
                    <Link className='links' to='/*'>
                      <h5>Get Pro Now</h5>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </main>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  main {
    position: relative;
  }
  .sidebar-btn {
    position: fixed;
    top: 15px;
    left: 0;
    color: yellow;
    z-index: 10;
  }
  .sidebar {
    position: absolute;
    top: 10%;
    left: 0;
    margin: 20px 0;
    width: 200px;
    background-color: #fff;
    padding: 15px;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    z-index: 10;
  }
  .discount,
  .left-sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .discount{
    color: #000;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 20px 10px;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }
  h1 {
    font-size: 22px;
  }
  h1,
  h4{
    color: #000;
  }

  .desc {
    margin-left: 10px;
  }
  .discount {
    align-items: center;
    margin: 100px 0 0 25px;
  }
  h3,
  .courses {
    margin: 5px 0;
    font-size: 14px;
  }
  h3 {
    font-size: 18px;
  }
  .active,
  h5 {
    padding: 15px;
    background-color: yellow;
    cursor: pointer;
    border-radius: 10px;
  }
  .active {
    padding: 10px 10px 10px 5px;
    width: 90%;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0 auto;
    font-weight: 500;
  }
  @media screen and (max-width: 900px) {
    .sidebar {
      top: 15%;
    }
  }
`
export default LeftSidebar
