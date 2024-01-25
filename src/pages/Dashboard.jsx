import React, { useContext } from 'react'
import LeftSidebar from '../components/LeftSidebar'
import styled from 'styled-components'
import RightSidebar from '../components/RightSidebar'
import { MdDateRange } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import { FaApple } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import { FaSpotify } from 'react-icons/fa6'
import { RegisterForm } from '../context/FormContext'

const Dashboard = () => {
  const { currentUser, handleLogout } = useContext(RegisterForm)
  return (
    <>
      <Wrapper>
        <section>
          <LeftSidebar />
          <RightSidebar />

          <main>
            <article>
              <div className='user-profile'>
                <div className='profile details'>
                  <h3>Hi {currentUser.email}</h3>
                  <h1>Welcome {currentUser.email}</h1>
                </div>
                <button className='logout' onClick={handleLogout} to='/login'>
                  Logout
                </button>
              </div>
              <div className='user-profile'>
                <div className='profile details'>
                  <h3>Account Statistics</h3>
                  <h1>Statistics: YouTube, Instagram Facebook</h1>
                </div>
                <div className='search'>
                  <p>Last 3 Month</p>
                  <MdDateRange />
                </div>
              </div>

              <div className='user-stats'>
                <div className='users'>
                  <FaUser size={75} />
                  <div className='user-det'>
                    <p>Total Particulars</p>
                    <h1 className='total-pat'>1,98,808</h1>
                    <h6>7% growth last week</h6>
                  </div>
                </div>
                <div className='users yellow'>
                  <FaYoutube size={50} />
                  <div className='user-det'>
                    <p>Total Views</p>
                    <h1 className='total-views'>332,456</h1>
                    <h6 className='black'>7% growth last week</h6>
                  </div>
                </div>
              </div>
              <div className='user-profile'>
                <div className='profile details'>
                  <h3>Latest Transactions</h3>
                  <h1>Statistics: YouTube, Instagram Facebook</h1>
                </div>
                <div className='search'>
                  <p>Last 3 Month</p>
                  <MdDateRange />
                </div>
              </div>
              <h6 className='mm-yy'>August 2021</h6>
              <div className='user-profile date'>
                <div className='user'>
                  <FaApple size={30} />
                  <div className='user-det'>
                    <h3>Apple Pay</h3>
                    <p>Shopping</p>
                  </div>
                </div>
                <p>8 Aug, 4:32 PM</p>
                <h4>- $50</h4>
              </div>
              <div className='user-profile date'>
                <div className='user'>
                  <FaYoutube size={30} />
                  <div className='user-det'>
                    <h3>Youtube Ad</h3>
                    <p>Monthly Payment</p>
                  </div>
                </div>
                <p>5 Aug, 7:32 PM</p>
                <h4>+ $2500$</h4>
              </div>
              <div className='user-profile date'>
                <div className='user'>
                  <FaTiktok size={30} />
                  <div className='user-det'>
                    <h3>Tik tok</h3>
                    <p>Ads Payment</p>
                  </div>
                </div>
                <p>2 Aug, 7:32 PM</p>
                <h4>+ $900</h4>
              </div>
              <h6 className='mm-yy'>September 2021</h6>

              <div className='user-profile date'>
                <div className='user'>
                  <FaSpotify size={30} />
                  <div className='user-det'>
                    <h3>Spotify</h3>
                    <p>Song Purchase</p>
                  </div>
                </div>
                <p>8 Sep, 7:32 PM</p>
                <h4>+ $500</h4>
              </div>
            </article>
          </main>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 56%;
    height: 100%;
    margin: 30px;
  }
  .profile-details,
  .user-profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .user-profile {
    margin: 10px 0;
  }
  .profile-details {
    flex-direction: column;
  }
  .user-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user,
  .user-det,
  .users {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 20px 20px 0;
  }
  .users {
    background-color: #000;
    width: 400px;
    border-radius: 10px;
    color: #fff;
  }
  .logout,
  .black,
  .yellow {
    background-color: yellow;
    color: black;
    font-size: 15px;
  }
  .logout {
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
  }
  .user-det {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
  }
  h3,
  h1,
  p {
    font-size: 14px;
  }
  h1 {
    opacity: 0.6;
  }
  h6 {
    color: yellow;
  }
  .mm-yy {
    font-size: 18px;
  }
  h1,
  h3 {
    margin: 2px 0;
  }
  h3{
    margin: 15px 0 0 0;
  }
  p {
    margin: 2px 0;
  }
  .total-pat {
    color: #fff;
    font-size: 23px;
  }
  .total-views {
    color: #000;
    font-size: 23px;
  }

  @media screen and (max-width: 1400px) {
    .users {
      width: 270px;
    }
    article {
      width: 47%;
    }
  }
  @media screen and (max-width: 1200px) {
    article {
      width: 95%;
    }
  }

  @media screen and (max-width: 700px) {
    .user-stats {
      flex-direction: column;
    }
  }
`
export default Dashboard
