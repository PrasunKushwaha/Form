import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [mailError, setMailError] = useState('')

  function callLoginApi(event) {
    event.preventDefault()
    if (password.length < 8) {
      setPasswordError('Password too short')
      return
    }
    console.log('calling api')
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
  }

  function handlePassChange(event) {
    setPassword(event.target.value)
    if (password.length >= 8) {
      setPasswordError('')
    }
  }

  function handlePassBlurChange() {
    if (password.length < 8) {
      setPasswordError('Password Invaild!')
    } else {
      setPasswordError('')
    }
  }

  
  function handleMailBlurChange() {
    if (email.length == 0) {
      setMailError('Email is required')
    } else {
      setMailError('')
    }
  }

  function handleReset() {
    setEmail('')
    setPassword('')
  }

  return (
    <div className="h-screen p-12 bg-gray-200">
      <form
        className="h-auto py-2 my-5 mt-16 mb-2 bg-white sm:flex"
        onSubmit={callLoginApi}
      >
        <Link to={'/'}>
          <IoIosArrowBack className="text-3xl" />
        </Link>

        <div className="flex flex-col items-center w-screen m-3">
          <h1 className="mb-2 text-3xl">Log In</h1>
          <div className="flex flex-col">
            <label>Email Address</label>
            <input
              className="self-center h-8 border-2 border-blue-500 rounded-md"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
              onBlur={handleMailBlurChange}
            />
             {mailError && (
              <div className="text-red-500">{mailError}</div>
            )}
            <label>Password</label>
            <input
              className="self-center h-8 border-2 border-blue-500 rounded-md"
              type="password"
              required
              value={password}
              onChange={handlePassChange}
              onBlur={handlePassBlurChange}
            />
            {passwordError && (
              <div className="text-red-500">{passwordError}</div>
            )}
          </div>
          <div>
            <button
              className="px-5 py-2 mt-4 ml-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              type="button"
              onClick={handleReset}
            >
              RESET
            </button>
            <button
              className="px-5 py-2 mt-4 ml-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
          {/* <Link to={'/forgotPass'}>
            <p className="text-amber-500 hover:text-amber-600">
              forgot password?
            </p>
          </Link> */}
        </div>
      </form>
    </div>
  )
}
export default Login
