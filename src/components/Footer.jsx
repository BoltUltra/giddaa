import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t-8 font-red-hat'>
      <div className='bg-primary text-white md:px-20 px-5 py-10'>
        <Link to='https://wa.me/08139145416' className="md:max-w-sm max-w-xs bg-white mx-auto text-primary milik px-5 py-3 rounded-full flex flex-col items-center space-y-3">
          <img src="/webp/whatsapp.webp" alt="" className='md:w-32 w-20' />
          <div className="flex items-center space-x-3">
            <img src="/svg/whatsapp.svg" alt="" className='md:w-10 w-8' />
            <span className='md:text-base text-sm'>Chat with us on WhatsApp</span>
            <i class="fa-light fa-arrow-right"></i>
          </div>
        </Link>
        <div className='grid md:grid-cols-5 grid-cols-2 md:gap-0 gap-10 md:mt-20 mt-10'>
          <div className=' space-y-3'>
            <h5 className='milik md:text-lg'>Developers</h5>
            <div className='space-y-2 md:text-base text-sm'>
              <Link to='/'>Join as a Developer</Link>
            </div>
          </div>
          <div className=' space-y-3'>
            <h5 className='milik md:text-lg'>Banks</h5>
            <div className='space-y-2 md:text-base text-sm'>
              <Link to='/'>Join as a Bank</Link>
            </div>
          </div>
          <div className=' space-y-3'>
            <h5 className='milik md:text-lg'>Legal</h5>
            <div className='flex flex-col space-y-2 md:text-base text-sm'>
              <Link to='/'>Privacy Policy</Link>
              <Link to='/'>Terms & Conditions</Link>
            </div>
          </div>
          <div className=' space-y-3'>
            <h5 className='milik md:text-lg'>Contact Us</h5>
            <div className='flex flex-col space-y-2 md:text-base text-sm'>
              <Link to='/'>info@giddaa.com</Link>
              <Link to='https://wa.me/08139145416'>WhatsApp</Link>
              <p className='font-bold'>Book a Meeting</p>
              <Link to='tel:+2348097621791' className='font-bold'>+234 809 762 1791</Link>
            </div>
          </div>
          <div className=' space-y-3'>
            <h5 className='milik md:text-lg'>Site Navigation</h5>
            <div className='flex flex-col space-y-2 md:text-base text-sm'>
              <Link to='/'>Properties</Link>
              <Link to='/'>Developers</Link>
              <Link to='/'>Banks</Link>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-center space-x-4">
            <Link target='_blank' to='https://linkedin.com'><img src="/svg/linkedin.svg" alt="linkedin" /></Link>
            <Link target='_blank' to='https://twitter.com'><img src="/svg/twitter.svg" alt="twitter" /></Link>
            <Link target='_blank' to='https://instagram.com'><img src="/svg/instagram.svg" alt="instagram" /></Link>
            <Link target='_blank' to='https://tiktok.com'><img src="/svg/tiktok.svg" alt="tiktok" /></Link>
            <Link target='_blank' to='https://facebook.com'><img src="/svg/facebook.svg" alt="facebook" /></Link>
          </div>
        </div>
      </div>
      <div className='bg-[#f5f5de] py-3 text-center text-primary font-bold'>
        PROPERTY OF GIDDAA INC.
      </div>
    </footer>
  )
}

export default Footer