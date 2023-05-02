import React from 'react'
import "./nav.css"

function Navbar() {
  return (
    <div>

<nav class="navbar  border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className='btn'>
    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://whww.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
    </div>
    <div className='prizes flex flex-wrap  bg-white py-2 px-2 rounded-xl justify-center text-white '>
      <p className='day mx-1 my-4 text-black'>Last 30 days:</p>
      <div className='prize-bx-1 mx-1 px-4 py-2'>
        <p className='text-1'>PAID</p>
      <h1>£24.000</h1>
      </div>
      <div className='prize-bx-2 mx-1 px-4 py-2'>
      <p className='text-2 '>PENDING</p>
      <h1>£24.000</h1>
      </div>
      <div className='prize-bx-3 mx-1 px-4 py-2'>
      <p className='text-3'>OVERDUE</p>
      <h1>£24.000</h1>
      </div>
    </div>
    <div className='profile-tab bg-white flex rounded-xl'>
      <img className='profile-image mx-1 my-1' src="public/Ellipse 1.svg" alt="profile" />
      <p className=' mx-2 my-4'>mayur patil</p>
    </div>
  </div> 
</nav>

    </div>
  )
}

export default Navbar