import React from 'react'

function Nav() {
  return (
    <div className='flex flex-wrap '>
      <div className='flex flex-wrap w-[30%]'>
        <div className='w-[2rem] h-[2rem]'>
          <img src="data:image/png;base64,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" alt="logo" />
        </div>
        <div className='ml-3 text-3xl font-serif font-medium'>
          DIOR
        </div>
      </div>
      <ul className='w-[70%] hidden md:flex flex-wrap justify-end'>
        <li className='px-4 pt-1 font-normal hover:font-medium'>FASHION & ACCESSORIES</li>
        <li className='px-4 pt-1 font-normal hover:font-medium'>FRAGNANCE & BEAUTY</li>
      </ul>
      <div className='w-[70%] md:hidden flex justify-end'>
        <a className='text-4xl font-semibold' href="#">&#8801;</a>
      </div>
    </div>
  )
}

export default Nav