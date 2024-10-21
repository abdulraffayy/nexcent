import React, { useState } from 'react';
import logoimage from '../../public/assets/Icon.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='flex items-center justify-around bg-slate-200 p-4'>          
                <div className="logo flex items-center gap-2">
                  <img src={logoimage} alt='logo'></img>
                    <h1 className='text-sm md:text-2xl font-bold ml-2'>Nexcent</h1>
                </div>
                <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <box-icon name='menu' size='lg' color='#21db43'></box-icon>
                </div>

             
                <div className={`navbar hidden md:flex md:gap-2`}>
                    <ul className='flex flex-row space-x-4'> 
                        <li className='hover:text-green-900 cursor-pointer whitespace-nowrap'  ><Link to="/home">Home</Link></li>
                        <li className='hover:text-green-900 cursor-pointer whitespace-nowrap'><Link to="/service">Services</Link></li>
                        <li className='hover:text-green-900 cursor-pointer whitespace-nowrap'><Link to="/feature">Features</Link></li>
                        <li className='hover:text-green-900 cursor-pointer whitespace-nowrap'><Link to="/products">Product</Link></li>
                        <li className='hover:text-green-900 cursor-pointer whitespace-nowrap'><Link to='/testimonial'>Testimonial</Link></li>
                        <li className='hover:text-green-900 cursor-pointer whitespace-nowrap'><Link to="/faq">Faq</Link></li>
                    </ul>
                </div>



         
                {/* Buttons for larger screens */}
                <div className="button-header hidden md:flex md:gap-2">
                <button className='btn-header text-green-600 py-2 px-4'>Login</button>
                <button className='btn-sign-up text-white border bg-green-600 border-green-500 py-2 px-4 rounded'>Sign Up</button>
                </div>
            </div>

            {isOpen && (
                <div className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col space-y-2 px-10 py-4">
                        {/* Close Button */}
                        <div className="flex justify-end">
                            <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
                                <box-icon name='x' size='lg' color='#21db43'></box-icon>
                            </div>
                        </div>
                        <ul className='space-y-2'>
                            <li className='hover:text-green-700 cursor-pointer whitespace-nowrap'>Home</li>
                            <li className='hover:text-green-700 cursor-pointer whitespace-nowrap'>Service</li>
                            <li className='hover:text-green-700 cursor-pointer whitespace-nowrap'>Feature</li>
                            <li className='hover:text-green-700 cursor-pointer whitespace-nowrap'>Product</li>
                            <li className='hover:text-green-700 cursor-pointer whitespace-nowrap'>Testimonial</li>
                            <li className='hover:text-green-700 cursor-pointer whitespace-nowrap'>Faq</li>
                        </ul>
                        <div className="button-header flex flex-col space-y-2">
                        <button className='btn-header text-green-600 py-2 px-4'>Login</button>
                        <button className='btn-sign-up text-white border bg-green-600 border-green-500 py-2 px-4 rounded'>Sign Up</button>
                           
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
