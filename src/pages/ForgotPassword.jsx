import React, { useContext } from 'react'
import { RegisterForm } from '../context/FormContext'
import styled from 'styled-components'
import logo from '../assets/logo-white.png'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const ForgotPassword = () => {
  const { formData, handleChange, resetPassword, handleClick } =
    useContext(RegisterForm)

  return (
    <>
      <Wrapper>
        <main>
          <Logo className='logo'>
            <section>
              <img src={logo} alt='Transfy' />
            </section>
          </Logo>
          <form onSubmit={resetPassword}>
            <div>
              <ToastContainer
                stacked
                toastClassName='dark-toast'
              />
            </div>
            <h3>Forgot Password</h3>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              required
            />
            <button type='submit' className='button'>
              Reset Password
            </button>
            <Link onClick={handleClick} to='/' className='link'>
              Login
            </Link>
            <Link onClick={handleClick} to='/sign-up' className='link'>
              Don't have an account yet? Register
            </Link>
          </form>
        </main>
      </Wrapper>
    </>
  )
}

const Logo = styled.section`
  display: flex;
  img {
    width: 80%;
    height: 60px;
  }
`

const Wrapper = styled.section`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    width: 350px;
    border-radius: 20px;
    padding: 25px 15px;
  }
  h3 {
    margin: 15px 0;
    text-align: center;
  }
  input {
    width: 90%;
    height: 32px;
    border-radius: 10px;
    padding: 0 15px;
    margin: 10px 0;
    background: #fafafb;
    border: 1px solid #f1f1f5;
    font-size: 14px;
    letter-spacing: 0.1px;
    outline: none;
  }
  .button {
    margin: 15px 0;
    color: #fff;
    background: #0062ff;
    width: 85%;
    padding: 8px 0;
    border-radius: 10px;
    border: none;
    text-align: center;
    text-decoration: none;
  }
  .link {
    text-decoration: none;
    color: #0062ff;
    font-size: 12px;
    margin: 15px 0;
  }
`

export default ForgotPassword
