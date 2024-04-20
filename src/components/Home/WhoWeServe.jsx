import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const WhoWeServe = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <section className='font-red-hat space-y-10'>
      <div className='flex flex-col max-w-md text-center md:-ml-5 -ml-32 mt-10'>
        <h3 className='milik text-primary font-bold text-xl md:text-4xl'>Who We Serve</h3>
        <img src="/svg/line.svg" alt="" className='md:w-1/4 w-1/4 mx-auto' />
      </div>
      <div className='grid md:grid-cols-2 md:h-screen items-center md:gap-10 gap-5 md:px-20 px-5 md:py-0 py-10' data-aos="zoom-in" data-aos-duration="2000">
        <div className="space-y-4">
          <img src="/svg/diaspora.svg" alt="" />
          <h3 className="milik font-bold text-primary md:text-5xl text-4xl">The Diaspora</h3>
          <p>Living outside Nigeria? Thinking about buying a place <span className="font-bold">Back Home</span> for viists (No need for hotels, Airbnbs, or your parent’s house), Investment, or is it a personal goal of yours? Or maybe you see yourself spending more time back home . If any of those sounds like you, we can help you along your home purchase journey.</p>
          <div className="grid md:grid-cols-2 md:gap-y-5 gap-x-0 gap-5">
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>No Agency Fees. Giddaa is Free!</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>We Eliminate Price Discrimination</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Giddaa is Scam Proof!</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Relevant Information to Boost your Confidence</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>We are Responsive</p>
            </div>

          </div>
        </div>
        <div className="">
          <img src="/webp/dispora.webp" alt="" />
        </div>
      </div>
      <div className='grid md:grid-cols-2 md:h-screen items-center md:gap-10 gap-5 md:px-20 px-5 md:py-0 py-10 bg-[#f9fcf8]' data-aos="zoom-in" data-aos-duration="2000">
        <div className="space-y-4">
          <img src="/svg/remote-workers.svg" alt="" />
          <h3 className="milik font-bold text-primary md:text-5xl text-4xl">Naija Remote Workers</h3>
          <p>Do you work from <span className="font-bold">home?</span> Your own Home? With Giddaa, that’s possible. You don’t need to have all the money at once to buy a house to become a homeowner. Leverage your job flexibility working remotely and your current earning capacity to build equity in a home of your own.</p>
          <div className="grid md:grid-cols-2 md:gap-y-5 gap-x-0 gap-5">
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Work From “Your Own Home”</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Invest In Man’s Greatest Asset Class</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Don’t Let Rent Go Up On You, Again!!</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>No Agency Fees. Giddaa Is Free!</p>
            </div>

          </div>
        </div>
        <div className="">
          <img src="/webp/remote.webp" alt="" />
        </div>
      </div>
      <div className='grid md:grid-cols-2 md:h-screen items-center md:gap-10 gap-5 md:px-20 px-5 md:py-0 py-10' data-aos="zoom-in" data-aos-duration="2000">
        <div className="space-y-4">
          <img src="/svg/private-sector.svg" alt="" />
          <h3 className="milik font-bold text-primary md:text-5xl text-4xl">Private Sector Workers</h3>
          <p>Whether you’re a doctor, nurse, banker, tech bro or sis, or work in another industry in the private sector, Giddaa assists individuals looking to purchase property without straining their budget or breaking the bank. In the face of rising property prices, we empower middle-class individuals, like you, to achieve homeownership!</p>
          <div className="grid md:grid-cols-2 md:gap-y-5 gap-x-0 gap-5">
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Join The Homeowners Club!</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Don’t Let Rent Go Up On You, Again!!</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Build A Solid Foundation For Your Family</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>No Agency Fees. Giddaa is Free!</p>
            </div>

          </div>
        </div>
        <div className="">
          <img src="/webp/private-sector.webp" alt="" />
        </div>
      </div>
      <div className='grid md:grid-cols-2 md:h-screen items-center md:gap-10 gap-5 md:px-20 px-5 md:py-0 py-10 bg-[#f9fcf8]' data-aos="zoom-in" data-aos-duration="2000">
        <div className="space-y-4">
          <img src="/svg/public-sector.svg" alt="" />
          <h3 className="milik font-bold text-primary md:text-5xl text-4xl">Public Sector Workers</h3>
          <p>You serve the people, and now let us serve you!. Government workers can effortlessly apply for a National Housing Fund (NHF) loan through a primary mortgage bank with Giddaa—no stress or connections needed. Giddaa ensures a seamless application process for NHF loans, and government workers can seamlessly explore alternative properties and plans beyond NHF.</p>
          <div className="grid md:grid-cols-2 md:gap-y-5 gap-x-0 gap-5">
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Have A Place You Can Call Yours!</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Don’t Let Rent Go Up On You, Again!!</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Build A Solid Foundation For Your Family.</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>No Agency Fees. Giddaa is Free!</p>
            </div>


          </div>
        </div>
        <div className="">
          <img src="/webp/public-sector.webp" alt="" />
        </div>
      </div>
      <div className='grid md:grid-cols-2 md:h-screen items-center md:gap-10 gap-5 md:px-20 px-5 md:py-0 py-10' data-aos="zoom-in" data-aos-duration="2000">
        <div className="space-y-4">
          <img src="/svg/business-owners.svg" alt="" />
          <h3 className="milik font-bold text-primary md:text-5xl text-4xl">Business Owners & Investors.</h3>
          <p>Whether you’re a doctor, nurse, banker, tech bro or sis, or work in another industry in the private sector, Giddaa assists individuals looking to purchase property without straining their budget or breaking the bank. In the face of rising property prices, we empower middle-class individuals, like you, to achieve homeownership!</p>
          <div className="grid md:grid-cols-2 md:gap-y-5 gap-x-0 gap-5">
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Work From “Your Own Home”</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Don’t Let Rent Go Up On You, Again!!</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>Build a Solid Foundation for your Family</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/svg/bullet.svg" alt="" />
              <p>No Agency Fees. Giddaa is Free!</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/webp/business.webp" alt="" />
        </div>
      </div>



    </section>
  )
}

export default WhoWeServe