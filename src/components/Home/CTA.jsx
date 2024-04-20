import React from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <section className='md:px-20 px-5 bg-[#f7fbf6] py-10 font-red-hat'>
      <div className="md:max-w-xl mx-auto text-center space-y-4">
        <h4 className='milik text-primary md:text-4xl text-2xl'>Get Started</h4>
        <p className="md:text-base text-sm">We are on a mission to empower income earning Nigerians to own their first homes before they turn 50 years old. Create an account and join the mission. It’s gonna be a long but fulfilling ride. <span className="text-primary font-bold">Let’s Go!</span></p>
        <button className='bg-primary text-white hover:bg-white hover:text-primary border border-primary rounded-full py-2 px-5 md:text-base text-sm transition-all duration-300 ease-linear' onClick={goToLogin}>Create an Account</button>
      </div>

    </section>
  )
}

export default CTA