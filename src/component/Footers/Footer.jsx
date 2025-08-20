import React from 'react'

function Footer() {
  return (
    <div className='sticky z-40 bottom-0'>
      <footer className='bg-gray-600  flex items-center justify-between max-w-screen-xl rounded-b-2xl bottom-0 h-10'>
        <div className='container mx-auto text-center'>
          <p className='text-gray-300'>© 2023 Your Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
