import React from 'react'

function Hero() {
  return (
    <div>
    <div className='mt-6 flex flex-wrap md:flex-nowrap'>
       <div className='p-4 md:p-0 transition ease-in-out duration-500 hover:scale-110 '>
        <img src="https://www.dior.com/couture/var/dior/storage/images/folder-media/folder-videos/folder-news-events/folder-fall-2023-women/dior_women_fall23_campaign_longform/40462917-3-fre-FR/dior_women_fall23_campaign_longform.jpg" alt="Fashion" />
        <h3 className='font-bold text-sm'>FASHION & ACCESSORIES</h3>
        <a className='text-xs font-medium underline' href="#">Discover</a>
       </div>
       <div className='p-4 md:p-0 transition ease-in-out duration-500 hover:scale-110 '>
        <img src="https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dwc33b4777/images/beauty/02-MAKEUP/2025/Backstage-25/launchpage/Backstage25_Model_Jenna_Stick_3200x1800.jpg?sw=2048" alt="Fragnance" />
        <h3 className='font-bold text-sm'>FRAGNANCE & BEAUTY</h3>
        <a className='text-xs font-medium underline' href="#">Discover</a>
       </div>
    </div>
     <div className='mt-4 p-2 bg-gray-100'>
       <p className=' text-sm font-medium'>Individuality will always be one of the conditions for real elegance.</p>
       <p className='p-1 font-semibold'>Dive into the world of Fashion with Christian Dior!</p>
       <button className='transition ease-in-out duration-300 bg-black text-white p-2 px-6 mt-2 rounded-lg font-medium hover:drop-shadow-xl hover:scale-110'>Dive in!</button>
     </div>
    </div>
  )
}

export default Hero
