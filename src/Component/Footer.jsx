import React from 'react'
import logoimage from '../../public/assets/Icon.png'
import socialiconone from '../../public/assets/Social Icons.png'
import socialiconsecond from '../../public/assets/social-icon2.png'
import socialiconthird from '../../public/assets/Social Icons-3.png'
import socialiconfourh from '../../public/assets/Social Icons-4.png'

const Footer = () => {
  return (
    <>
      <div className="footer-container  p-8 text-center">
        <div className="footer-heading">
        <h1 className="text-center font-bold text-xl md:text-2xl xl:text-3xl m-4">
  <span>Pellentesque suscript</span><br />
  <span>fringilla libero wu</span>
</h1>

          <button className='bg-green-500 text-white p-2 rounded'>Get a Demo</button>
        </div>
      </div>

    
      <div className="footer-section p-12 bg-black text-white flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0">
        <div className="flex flex-col items-center text-center">
    
          <div className="flex items-center mb-4">
            <div className="logo-img">
              <img src={logoimage} alt='' className="h-10 w-10" />
            </div>
            <h1 className='text-sm md:text-2xl font-bold ml-2'>Nexcent</h1>
          </div>

          <p className="text-gray-400 mb-4">
  <span>Copyright 2020 Nexcent Ltd.</span><br />
  <span>All rights reserved.</span>
</p>

          <div className="flex space-x-3">
          <img src={socialiconone} alt=''></img>
          <img src={socialiconsecond} alt=''></img>
          <img src={socialiconthird} alt=''></img>
          <img src={socialiconfourh} alt=''></img>

          </div>
        </div>

        <div className="company-info text-white text-center md:text-left">
          <h1 className="text-lg font-bold mb-4">Company</h1>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div className="company-info text-white text-center md:text-left">
          <h1 className="text-lg font-bold mb-4">Support</h1>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Term of Service</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Status</li>
          </ul>
        </div>

      
        <div className="company-info text-white text-center md:text-left">
          <h1 className="text-lg font-bold mb-4">Stay Up to Date</h1>
          <input 
            type='text' 
            placeholder='Your email' 
            className='p-2 w-full rounded-md text-black placeholder-gray-500'
          />
        </div>
      </div>
    </>
  )
}

export default Footer
