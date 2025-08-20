import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login'

function Header() {
  return (
   
      <header className='shadow sticky z-50 top-0 '>
          <nav className='bg-gray-100 border-gray-400 py-1'>
        <div className='flex flex-wrap justify-between items-center '>
          <div className='flex justify-end w-100 h-8 text-center'>
              <input
              type="text"
              placeholder='search'
              className='bg-gray-400 w-100 h-8 ml-0 rounded-md text-center'
              />
               <span className='absolute  flex items-center pointer-events-none m-1 mr-2'>
          {/* Search icon (Heroicons) */}
          <svg className='h-5 w-5 text-gray-500' xmlns='http://www.w3.org/2000/svg' fill='none'
               viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                  d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z'/>
          </svg>
        </span>
          </div>
            <ul className='flex space-x-4'>
                <li>
                    <Link to='/' 
                    className='text-gray-900 hover:text-orange-400'>
                        Home
                    </Link>
                </li>
              <li>
                <Link to='/login' 
                className='text-gray-900 hover:text-orange-400'>
                 login
                </Link>
              </li>
               <li>
                <Link to='/about' 
                className='text-gray-900 hover:text-orange-400'>
                 About
                </Link>
              </li>
              
            </ul>
            </div>
          </nav>
        
      </header>
   
  )
}



export default Header
