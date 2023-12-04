import React, { useState } from "react";
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'



function Signup(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [mailError, setMailError] = useState('')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [rollno, setRollno] = useState('')
  const [noError, setNoError] = useState('')
  const [marks, setMarks] = useState()
  const [marksError, setMarksError] = useState('')
  const [percent, setPercent] = useState()

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

    function handleNameChange(event) {
    setName(event.target.value)
  }
  
    function handleNoChange(event) {
    setRollno(event.target.value)
  }

     function handleMarksChange(event) {
    setMarks(event.target.value)
  }
  
  function handlePassChange(event) {
    setPassword(event.target.value)
    if (password.length >= 8) {
      setPasswordError('')
    }
  }

  function handlePassBlurChange() {
    if (password.length < 8) {
      setPasswordError('Password too short!')
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

    function handleNameBlurChange() {
    if (name.length == 0) {
      setNameError('Name is required')
    } else {
      setNameError('')
    }
  }

   function handleNoBlurChange() {
    if (rollno.length == 0) {
      setNoError('Roll No is required')
    } else {
      setNoError('')
    }
  }

  
   function handleMarksBlurChange() {
    if (marks == 0) {
      setMarksError('Marks Invalid')
    } else {
      setMarksError('')
      setPercent((marks*100)/100)
    }
  }

  function handleReset() {
    setEmail('')
    setPassword('')
    setRollno('')
    setMarks()
  }


    
    return(
        <>
         <div className="h-screen p-12 bg-gray-200">
      <form
        className="h-auto py-2 my-5 mt-16 mb-2 bg-white sm:flex"
        onSubmit={callLoginApi}
      >
        <Link to={'/'}>
          <IoIosArrowBack className="text-3xl" />
        </Link>

        <div className="flex flex-col items-center w-screen m-3">
          <h1 className="mb-2 text-3xl">Sign Up</h1>
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
             <label>Student Name</label>
            <input
              className="self-center h-8 border-2 border-blue-500 rounded-md"
              type="email"
              required
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlurChange}
            />
             {nameError && (
              <div className="text-red-500">{nameError}</div>
            )}
             <label>Roll No.</label>
            <input
              className="self-center h-8 border-2 border-blue-500 rounded-md"
              type="email"
              required
              value={rollno}
              onChange={handleNoChange}
              onBlur={handleNoBlurChange}
            />
             {noError && (
              <div className="text-red-500">{noError}</div>
            )}
             <label>Marks Obtained</label>
            <input
              className="self-center h-8 border-2 border-blue-500 rounded-md"
              type="email"
              required
              value={marks}
              onChange={handleMarksChange}
              onBlur={handleMarksBlurChange}
            />
             {marksError && (
              <div className="text-red-500">{marksError}</div>
            )}

             <label>Current Percentile</label>
            <input
              className="self-center h-8 border-2 border-blue-500 rounded-md"
              type="email"
              required
              value={percent}
            />
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
        </>
    )
}

export default Signup;