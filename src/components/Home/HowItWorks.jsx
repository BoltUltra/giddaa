import React from 'react'

const HowItWorks = () => {
  return (
    <section className='md:px-20 px-5 py-10 font-red-hat mt-20 mb-40'>
      <div className='flex flex-col max-w-md text-center md:-ml-24 -ml-32'>
        <h3 className='milik text-primary font-bold text-2xl md:text-4xl'>How It Works</h3>
        <img src="/svg/line.svg" alt="" className='md:w-2/4 w-1/4 mx-auto' />
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-10 font-red-hat">
        <div className='group flex items-start space-x-2 cursor-pointer'>
          <div className="wwd-number">1</div>
          <div>
            <div className='p-5 group-hover:bg-[#f3faf2] rounded-xl space-y-4 transition-all duration-500 ease-in-out'>
              <h4 className='milik text-primary text-xl'>Find Your Dream Home.</h4>
              <p>Choose from the variety of properties available on the platform. You have various options to select from. From completed properties, off-plan properties, and properties in-construction</p>

              <div className=''>
                <button className="flex items-center space-x-3 w-[90%] mx-auto border-2 border-primary bg-white rounded-full p-3">
                  <img src="/svg/play.svg" alt="" />
                  <p className='text-xs'>Watch the Video to Learn More</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='group flex items-start space-x-2 cursor-pointer'>
          <div className="wwd-number">2</div>
          <div>
            <div className='p-5 group-hover:bg-[#f3faf2] rounded-xl space-y-4 transition-all duration-500 ease-in-out'>
              <h4 className='milik text-primary text-xl'>Select A Plan.</h4>
              <p>Choose the best way YOU want to buy your dream home. We do most of the hardwork by automatically calculating which properties you are able to afford, as long as you put in your correct age and income.</p>

              <div className=''>
                <button className="flex items-center space-x-3 w-[90%] mx-auto border-2 border-primary bg-white rounded-full p-3">
                  <img src="/svg/play.svg" alt="" />
                  <p className='text-xs'>Watch the Video to Learn More</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='group flex items-start space-x-2 cursor-pointer'>
          <div className="wwd-number">3</div>
          <div>
            <div className='p-5 group-hover:bg-[#f3faf2] rounded-xl space-y-4 transition-all duration-500 ease-in-out'>
              <h4 className='milik text-primary text-xl'>Book A Viewing</h4>
              <p>We give you several options to book a viewing for the property. You can view it yourself, with our agent (for a small fee), or use someone you trust, maybe a family member or close friend. Choose a date and time and book your viewing.</p>

              <div className=''>
                <button className="flex items-center space-x-3 w-[90%] mx-auto border-2 border-primary bg-white rounded-full p-3">
                  <img src="/svg/play.svg" alt="" />
                  <p className='text-xs'>Watch the Video to Learn More</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='group flex items-start space-x-2 cursor-pointer'>
          <div className="wwd-number">4</div>
          <div>
            <div className='p-5 group-hover:bg-[#f3faf2] rounded-xl space-y-4 transition-all duration-500 ease-in-out'>
              <h4 className='milik text-primary text-xl'>Apply!</h4>
              <p>After you have booked a viewing and you are satisfied with the viewing, you acknowledge having viewed the property and then proceed to submit the document required by the organzation you are applying to.</p>

              <div className=''>
                <button className="flex items-center space-x-3 w-[90%] mx-auto border-2 border-primary bg-white rounded-full p-3">
                  <img src="/svg/play.svg" alt="" />
                  <p className='text-xs'>Watch the Video to Learn More</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='group flex items-start space-x-2 cursor-pointer'>
          <div className="wwd-number">5</div>
          <div>
            <div className='p-5 group-hover:bg-[#f3faf2] rounded-xl space-y-4 transition-all duration-500 ease-in-out'>
              <h4 className='milik text-primary text-xl'>Wait For Application Processing</h4>
              <p>The partner <span className="font-bold">(Developer or Bank)</span> you applied to will process your application and the submitted documents. You will be notified if your application is accepted or not.</p>

              <div className=''>
                <button className="flex items-center space-x-3 w-[90%] mx-auto border-2 border-primary bg-white rounded-full p-3">
                  <img src="/svg/play.svg" alt="" />
                  <p className='text-xs'>Watch the Video to Learn More</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='group flex items-start space-x-2 cursor-pointer'>
          <div className="wwd-number">6</div>
          <div>
            <div className='p-5 group-hover:bg-[#f3faf2] rounded-xl space-y-4 transition-all duration-500 ease-in-out'>
              <h4 className='milik text-primary text-xl'>Accept Terms & Make Payment</h4>
              <p>If the partner accepts your application, they will submit the terms of your <span className="font-bold">application</span> and an offer letter or a term sheet for you to review. If you accept the terms, you can then proceed to make payment and create a mandate for repayment, if it is a mortgage or payment plan.</p>

              <div className=''>
                <button className="flex items-center space-x-3 w-[90%] mx-auto border-2 border-primary bg-white rounded-full p-3">
                  <img src="/svg/play.svg" alt="" />
                  <p className='text-xs'>Watch the Video to Learn More</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HowItWorks