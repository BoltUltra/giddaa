import React from 'react'

const Portfolio = () => {
  return (
    <section className='flex md:flex-row flex-col md:space-y-0 space-y-5 items-center justify-between font-red-hat text-center md:px-20 py-10 bg-[#f7fbf6]'>
      <div className='flex flex-col items-center md:w-full'>
        <h3 className="milik text-primary font-bold md:5xl text-4xl">180</h3>
        <p className='md:text-sm text-xs'>NO OF PROPERTIES</p>
      </div>
      <div className='flex flex-col items-center md:w-full'>
        <h3 className="milik text-primary font-bold md:5xl text-4xl">1,800</h3>
        <p className='md:text-sm text-xs'>NO OF UNITS</p>
      </div>
      <div className='flex flex-col items-center md:w-full'>
        <h3 className="milik text-primary font-bold md:5xl text-4xl">32</h3>
        <p className='md:text-sm text-xs'>PLANS/METHODS YOU CAN PURCHASE YOUR HOME</p>
      </div>

    </section>
  )
}

export default Portfolio