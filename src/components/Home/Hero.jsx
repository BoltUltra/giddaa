import React from 'react'

const Hero = () => {
  return (
    <>
      <section className='grid md:grid-cols-5 gap-6 md:pl-20 md:px-0 px-5 font-red-hat'>
        <div className='pt-10 m space-y-3 md:pt-16 md:col-span-2'>
          <div className="space-y-3">
            <h3 className='milik md:text-4xl text-3xl md:leading-snug'>
              Securely and Affordably Own a Home in Nigeria. <br />
              <span className="text-primary">We Serve Nigerians Across the Globe.</span>
            </h3>
            <p className='md:text-base text-sm'>Experience confidence when buying a home in Nigeria whether you’re in Nigeria or <span className="font-bold">Abroad!</span> Enjoy peace of mind with legitimate transactions, straightfoward processes, and a variety of flexible payment options directly from top developers and banks.</p>
          </div>
          <div className="flex md:flex-row flex-col items-center md:space-x-10 md:space-y-0 space-y-5">
            <button className="font-bold text-white bg-primary rounded-full px-5 py-2 md:w-auto w-full">Find a Home</button>
            <div className="border-2 border-primary text-primary md:rounded-md rounded-full md:py-5 py-2 md:max-w-xs w-full text-center">10,000 People Have Seen This</div>
          </div>
        </div>
        <div className='md:col-span-3'>
          <img src="/webp/hero-img.webp" alt="hero-img" />
        </div>
      </section>
    </>
  )
}

export default Hero