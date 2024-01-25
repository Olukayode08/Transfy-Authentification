import React, { useContext } from 'react'
import { RegisterForm } from '../context/FormContext'
import styled from 'styled-components'
import logo from '../assets/logo-white.png'
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Login = () => {
  const { toggleVisibility, visible, formData, handleChange, signIn, error } =
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
          <form onSubmit={signIn}>
            <h3>Login to your account</h3>
            <h3>{error}</h3>

            <input
              type='email'
              name='email'
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
            <Link to='/forgot-password' className='link'>
              Can’t login? Forget password
            </Link>
            <Link to='/sign-up' className='link'>
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
  .password-field,
  select,
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

export default Login
