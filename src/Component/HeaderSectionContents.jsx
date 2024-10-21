import React from 'react';
import Photo from '../../public/assets/Illustration (1).png';

const HeaderSectionContents = () => {
    return (
        <div className=" flex flex-col md:flex-row items-center justify-center gap-10 mt-4 bg-slate-100 p-20">
            <div className="left-panel flex flex-col justify-center items-start p-5">
           
                <h1 className="header-heading text-3xl sm:text-xl md:text-xl lg:text-4xl font-bold">
                    Lesson and Insight
                    <span className="block text-green-600">
                        from 8 Years
                    </span>
                </h1>

              
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-light mt-4">
                    Where to grow your business as a photographer: site or social media?
                </p>

                <button className='register-button bg-transparent border border-green-500 py-2 px-4 rounded hover:bg-green-600 hover:text-white mt-5'>
                    Register
                </button>
            </div>

            <div className="right-panel flex justify-center items-center mt-8 md:mt-0 md:h-[80%] sm:w-[50%] md:w-auto">
                <img 
                    src={Photo} 
                    alt="Photography Insight" 
                    className="w-full h-full object-cover" 
                />
            </div>
        </div>
    );
};

export default HeaderSectionContents;




























