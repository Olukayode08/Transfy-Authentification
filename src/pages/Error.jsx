import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo-white.png'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <Wrapper>
        <main>
          <Logo className='logo'>
            <section>
              <img src={logo} alt='Transfy' />
            </section>
          </Logo>
          <div className='form'>
            <h3>404!</h3>
            <h3>Page not found</h3>
            <Link to='/' className='link'>
              Back to Login
            </Link>
            <Link to='/sign-up' className='link'>
              Don't have an account yet? Register
            </Link>
          </div>
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

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    border-radius: 20px;
    padding: 25px;
  }
  h3 {
    font-size: 25px;
    margin: 5px 0;
    text-align: center;
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
`

export default Error
