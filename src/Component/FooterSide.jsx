import React from 'react';
import imagestalent from '../../public/assets/pana.png';

const FooterSide = () => {
    return (
        <>
            <div className="container mx-auto p-2 flex flex-col md:flex-row items-center justify-center">
                {/* Left side - Image */}
                <div className="left-side md:w-1/2 flex justify-center md:justify-start mb-5 md:mb-0">
                    <img 
                        src={imagestalent} 
                        alt="left-side-picture" 
                        style={{ width: '100%', maxWidth: '550px', height: 'auto' }}
                    />
                </div>

                {/* Right side - Content */}
                <div className="right-side md:w-1/2 text-center md:text-left space-y-4 sm:text-left max-w-lg">
                    {/* Heading */}
                    <h1 className="text-xl md:text-2xl xl:text-4xl font-bold mb-4 leading-tight">
                        How to design your site <br /> footer like we did
                    </h1>

                    {/* Paragraph */}
                    <p className="text-sm md:text-base  font-light text-justify md:text-left leading-relaxed">
                        Donec vulputate, nisi vitae sodales porttitor, risus magna rutrum enim, non non elementum mi elit eget tellus. Morbi eget bibendum lacus. Vestibulum rhoncus at lectus non pulvinar. Vestibulum vestibulum, odio eget consequat dapibus, ex lacus viverra ligula, at blandit risus elit posuere eros consequat .
                    </p>

                    {/* Button */}
                    <div className="flex justify-center md:justify-start">
                        <button className="register-button bg-green-500 text-white py-2 px-4 rounded-sm mt-5">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterSide;
