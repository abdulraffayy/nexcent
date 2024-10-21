import React from 'react';
import iconone from '../../public/assets/Vector.png';
import icontwo from '../../public/assets/Icon.png';
import iconthree from '../../public/assets/Icon (1).png';

const Content = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-4">
      {/* First Card */}
      <div className="card-images bg-white rounded-md  border-white flex flex-col items-center justify-center w-1/5">
        <div className="images-container">
          <img src={iconone} className="bg-slate-100 p-4 rounded-md" alt='' />
        </div>
        <div className="image-information text-center">
          <h1 className="text-4xl font-semibold">Membership Organization</h1>
          <p className="font-light">
            Our Membership management software provides full automation of membership rewards and payments.
          </p>
        </div>
      </div>

      {/* Second Card */}
      <div className="card-images bg-white rounded-md  border-white  flex flex-col items-center justify-around w-1/5">
        <div className="images-container">
          <img src={icontwo} className="bg-slate-100 p-2 rounded-md" alt='' />
        </div>
        <div className="image-information text-center">
          <h1 className="text-4xl font-semibold">Membership Organization</h1>
          <p className="font-light">
            Our Membership management software provides full automation of membership rewards and payments.
          </p>
        </div>
      </div>

      {/* Third Card */}
      <div className="card-images bg-white rounded-md  border-white flex flex-col items-center justify-center w-1/5">
        <div className="images-container">
          <img src={iconthree} className="bg-slate-100 p-1 rounded-md" alt='' />
        </div>
        <div className="image-information text-center">
          <h1 className="text-4xl font-semibold">Membership Organization</h1>
          <p className="font-light">
            Our Membership management software provides full automation of membership rewards and payments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
