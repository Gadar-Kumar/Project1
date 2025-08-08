import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login'

function Header() {
  return (
   
      <header className='bg-gray-600 p-4 w-screen  rounded-t-2xl'>
        <div className='container mx-auto flex justify-between items-center w-100vw'>
          
          <nav>
            <ul className='flex space-x-4'>
                <li>
                    <Link to='/' 
                    className='text-gray-200 hover:text-orange-400'>
                        Home
                    </Link>
                </li>
              <li>
                <Link to='/login' 
                className='text-gray-200 hover:text-orange-400'>
                 login
                </Link>
              </li>
               <li>
                <Link to='/about' 
                className='text-gray-200 hover:text-orange-400'>
                 About
                </Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>
   
  )
}



export default Header
