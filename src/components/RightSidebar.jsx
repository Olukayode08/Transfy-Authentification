import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Squash as Hamburger } from 'hamburger-react'
import { LiaTimesSolid } from 'react-icons/lia'
import { CiBellOn } from 'react-icons/ci'
import { FcBusinesswoman } from 'react-icons/fc'
import { IoIosArrowDown } from 'react-icons/io'
import { FaTiktok } from 'react-icons/fa6'
import { FcBusinessman } from 'react-icons/fc'
import { MdVerified } from 'react-icons/md'
import { RegisterForm } from '../context/FormContext'

const RightSidebar = () => {
  const {currentUser} = useContext(RegisterForm)
  const [active, setActive] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined)

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
                <div className='right-sidebar'>
                  <div className='links'>
                    <CiBellOn size={25} />
                    <div className='user'>
                      <FcBusinesswoman size={50} />
                      <div className='user-details'>
                        <h3>{currentUser.email}</h3>
                        <p>PM</p>
                      </div>
                    </div>
                    <IoIosArrowDown size={25} />
                  </div>
                  <div className='links'>
                    <h3>Activities</h3>
                    <LiaTimesSolid />
                  </div>
                  <div className='links'>
                    <div className='user'>
                      <FaTiktok size={25} />
                      <div className='user-details'>
                        <h3>Tiktok Music</h3>
                        <p>2 Hours Ago</p>
                      </div>
                    </div>
                    <h5>Get</h5>
                  </div>
                  <div className='links collabo'>
                    <div className='user'>
                      <FcBusinessman size={50} />
                      <div className='user-details'>
                        <h3>Andrew Johnson</h3>
                        <p>5 Hours Ago</p>
                      </div>
                    </div>
                    <h2>"Hey Can you create a Collabo with my family?"</h2>
                    <div className='user price'>
                      <h4>
                        $45 <span>discount</span>
                      </h4>
                      <h5>Accept</h5>
                    </div>
                  </div>
                  <div className='links'>
                    <div className='user'>
                      <FaTiktok size={25} />
                      <div className='user-details'>
                        <h3>
                          Tiktok UK Group <MdVerified />
                        </h3>
                        <p>2 Hours Ago</p>
                      </div>
                    </div>
                    <h5>Get</h5>
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
    right: 0;
    color: yellow;
    z-index: 10;
  }
  .sidebar {
    position: absolute;
    top: 10%;
    right: 0;
    margin: 20px 0;
    width: 280px;
    padding: 25px;
    cursor: pointer;
    background-color: #fff;
    z-index: 10;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .right-sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 260px;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0;
    width: 100%;
    color: #000;
  }
  .collabo {
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  p {
    text-align: center;
  }
  .user-details,
  .user {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .price {
    background-color: #000;
    margin: 0;
    padding: 4px 10px;
    border-radius: 10px;
    margin: 20px 0;
  }
  h4 {
    color: #fff;
    margin-right: 15px;
  }
  .user-details {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  }
  p {
    opacity: 0.5;
  }
  h2 {
    text-align: center;
    font-size: 15px;
  }
  h5,
  h3,
  p {
    margin: 0;
  }
  h3 {
    font-size: 14px;
  }
  h5 {
    padding: 10px 20px;
    background-color: yellow;
    cursor: pointer;
    border-radius: 10px;
  }

  @media screen and (max-width: 900px) {
    .sidebar {
      top: 15%;
    }
  }
`
export default RightSidebar
