import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login'

function Header() {
  return (
   
      <header className='shadow sticky z-50 top-0 '>
          <nav className='bg-gray-100 border-gray-400 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
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
