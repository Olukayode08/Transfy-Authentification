import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo-white.png'
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import { RegisterForm } from '../context/FormContext'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Signup = () => {
  const {
    toggleVisibility,
    toggleVisibilityConfirm,
    visible,
    confirmVisible,
    handleChange,
    formData,
    signUp,
    handleClick,
  } = useContext(RegisterForm)

  return (
    <>
      <Wrapper>
        <main>
          <Logo className='logo'>
            <section>
              <img src={logo} alt='Transfy' />
            </section>
          </Logo>
          <form onSubmit={signUp}>
            <div>
              <ToastContainer stacked toastClassName='dark-toast' />
            </div>
            <h3>Register for an account</h3>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='Your name'
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              required
            />
            <select name='country' id='country'>
              <option value={formData.country}>Benin</option>
              <option value={formData.country}>Cameroon</option>
              <option value={formData.country}>Cote d'Ivoire</option>
              <option value={formData.country}>Ghana</option>
              <option value={formData.country}>Kenya</option>
              <option value={formData.country}>Nigeria</option>
              <option value={formData.country}>Rwanda</option>
              <option value={formData.country}>Senegal</option>
              <option value={formData.country}>South Africa</option>
              <option value={formData.country}>Uganda</option>
              <option value={formData.country}>United Kingdom</option>
              <option value={formData.country}>United States</option>
            </select>
            <input
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Your Phone Number'
              required
            />

            <Password className='password-field'>
              <input
                type={visible ? 'text' : 'password'}
                name='password'
                className='no-padding'
                value={formData.password}
                onChange={handleChange}
                placeholder='Create Password'
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
            <Password className='password-field'>
              <input
                type={confirmVisible ? 'text' : 'password'}
                name='confirmPassword'
                className='no-padding'
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='Confirm Password'
                required
              />
              <div onClick={toggleVisibilityConfirm}>
                {confirmVisible ? (
                  <FiEye className='eye' />
                ) : (
                  <FiEyeOff className='eye' />
                )}
              </div>
            </Password>
            <p>
              By signing up, you confirm that you’ve read and accepted our Term
              of use and Privacy Policy.
            </p>
            <button type='submit' className='button'>
              Register
            </button>
            <Link to='/' onClick={handleClick} className='link'>
              Already have an account? Log in
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
    width: 400px;
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
    font-family: inherit;
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
  p {
    font-size: 12px;
    text-align: center;
    width: 80%;
    margin: 10px 0;
  }
  .link {
    text-decoration: none;
    color: #0062ff;
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    main {
      height: 100%;
    }
  }

  @media screen and (max-width: 450px) {
    form {
      width: 370px;
    }
  }
  @media screen and (max-width: 370px) {
    form {
      width: 300px;
    }
  }
`
export default Signup
