import React, { useContext } from 'react'
import { RegisterForm } from '../context/FormContext'
import styled from 'styled-components'
import logo from '../assets/logo-white.png'
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Login = () => {
  const { toggleVisibility, visible, handleClick, formData, handleChange, signIn } =
    useContext(RegisterForm)

  return (
    <>
      <LoginW>
        <main>
          <Logo className='logo'>
            <section>
              <img src={logo} alt='Transfy' />
            </section>
          </Logo>
          <form onSubmit={signIn}>
            <div>
              <ToastContainer stacked toastClassName='dark-toast' />
            </div>
            <h3>Login to your account</h3>
            {/* <p className='error'>{error}</p> */}
            <input
              type='email'
              name='email'
              autoComplete='off'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              required
            />
            <Password className='password-field'>
              <input
                type={visible ? 'text' : 'password'}
                name='password'
                className='no-padding'
                value={formData.password}
                onChange={handleChange}
                autoComplete='off'
                placeholder='Your Password'
                required
              />
              <div onClick={toggleVisibility}>
                {visible ? (
                  <FiEye className='eye' />
                ) : (
                  <FiEyeOff className='eye' />
                )}
              </div>
            </Password>
            <button type='submit' className='button'>
              Login
            </button>
            <Link onClick={handleClick} to='/forgot-password' className='link'>
              Can’t login? Forget password
            </Link>
            <Link onClick={handleClick} to='/sign-up' className='link'>
              Don't have an account yet? Register
            </Link>
          </form>
        </main>
      </LoginW>
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
const Password = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 14px;
    flex-shrink: 0;
    cursor: pointer;
    color: #0062ff;
  }
  .no-padding {
    padding: 0;
  }
`

const LoginW = styled.section`
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
  .error {
    color: red;
    text-align: center;
  }

  .password-field,
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

  @media screen and (max-width: 320px) {
    main {
      height: 100%;
    }
  }

  @media screen and (max-width: 340px) {
    form {
      width: 300px;
    }
  }
`

export default Login
