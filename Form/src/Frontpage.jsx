import React from 'react'
import { Link } from 'react-router-dom'

function Frontpage(){
return(
    <>

     <div className="h-screen p-12 bg-gray-200">
      <div
        className="h-auto py-2 my-5 mt-16 mb-2 bg-white sm:flex"
        
      >
        {/* <Link to={'/'}>
          <IoIosArrowBack className="text-3xl" />
        </Link> */}

        <div className="flex flex-col items-center w-screen m-3">
          <h1 className="mb-2 text-6xl font-bold">Student Report</h1>
          <div className="flex flex-col items-center">


             <Link to={'/signup'}>

                   <button
              className="px-5 py-2 mt-4 ml-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              type="button"
             
            >
              Sign Up
            </button>
            </Link>

              <Link to={'/login'}>

                   <button
              className="px-5 py-2 mt-4 ml-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              type="submit"
            >
              Log In
            </button>
             
            </Link>
           
           
           
          </div>
          {/* <Link to={'/forgotPass'}>
            <p className="text-amber-500 hover:text-amber-600">
              forgot password?
            </p>
          </Link> */}
        </div>
      </div>
    </div>

    </>
)
}

export default Frontpage