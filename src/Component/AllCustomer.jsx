import React from 'react';
import imagesLeft from '../../public/assets/image 9.png';
import logoone from '../../public/assets/Logo (1).png';
import logosecond from '../../public/assets/Logo (2).png';
import logothree from '../../public/assets/Logo (3).png';
import logofour from '../../public/assets/Logo (4).png';
import logofive from '../../public/assets/Logo (5).png';
import logosix from '../../public/assets/Logo (6).png';
import logoseven from '../../public/assets/Logo (7).png';

const CustomerCard = () => {
  return (
    // <div className="card-container flex flex-col md:flex-row items-center justify-center text-gray-600 p-4 overflow-hidden">
    <div className='flex justify-center bg-slate-100'>
      <div className="w-[80%] grid grid-cols-3 gap-4 text-gray-600 p-4 overflow-hidden">
        <div className="col-span-1 w-full">
          <img
            className="w-full h-auto max-w-full sm:max-w-xs md:max-w-max xl:w-[326px] xl:h-[326px]"
            src={imagesLeft}
            alt="Customer"
          />



        </div>
        <div className="col-span-2 right-card md:text-left sm:text-left w-full p-4">
          <p className="font-light mb-2 text-justify w-auto">
            Aliquam egestas efficitur magna semper malesuada. Aenean fringilla tempor lorem, id suscipit quam euismod id. Suspendisse neque mauris, hendrerit ut nibh ut, vehicula pretium magna. Pellentesque vitae lectus lobortis neque egestas vulputate. Nam lacus erat, gravida at felis sed, vehicula efficitur magna. Praesent quis tellus nec tortor pulvinar iaculis sed dapibus velit. Sed feugiat sem Etiam massa nulla, laoreet eu diam sit amet, porttitor euismod lectus.
          </p>
          <p className="text-lg font-semibold text-green-700">Tim Smith</p>
          <p className="text-sm text-gray-500">
            British Dragon Boat Racing Association
          </p>

          <div className="icon-container flex flex-wrap gap-4 text-gray-600 mb-2">
            <img src={logoone} alt='' className="w-12 h-auto" />
            <img src={logosecond} alt='' className="w-12 h-auto" />
            <img src={logothree} alt='' className="w-12 h-auto" />
            <img src={logofour} alt='' className="w-12 h-auto" />
            <img src={logofive} alt='' className="w-12 h-auto" />
            <img src={logosix} alt='' className="w-12 h-auto" />
            <img src={logoseven} alt='' className="w-12 h-auto" />

            <button className="text-green-600 font-semibold flex flex-row">
              Meet all customers <span className="ml-2">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;






































