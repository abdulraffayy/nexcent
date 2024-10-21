import React from 'react';
import firstimages from '../../public/assets/Logo (1).png'
import secondimages from '../../public/assets/Logo (2).png'
import threeimages from '../../public/assets/Logo (3).png'
import fourimages from '../../public/assets/Logo (4).png'
import fiveimages from '../../public/assets/Logo (5).png'
import siximages from '../../public/assets/Logo (6).png'
import sevenimages from '../../public/assets/Logo (7).png'


const Clients = () => {
  return (
    <>
      <h2 className="text-2xl text-center font-bold">Our Clients</h2>
      <p className='text-center font-light'>We have been working with some Fortune 500+ clients</p>

      <div className='flex justify-center my-4 bg-'>
      <div className="images-container flex items-center justify-around gap-20">
        <div className="images">
          <img src={firstimages} alt=''></img>
        </div>

        <div className="images">
          <img src={secondimages} alt=''></img>
        </div>

        <div className="images">
          <img src={threeimages} alt=''></img>
        </div>

        <div className="images">
          <img src={fourimages} alt=''></img>
        </div>

        <div className="images">
          <img src={fiveimages} alt=''></img>
        </div>

        <div className="images">
          <img src={siximages} alt=''></img>
        </div>

        <div className="images">
          <img src={sevenimages} alt=''></img>
        </div>
      </div>
      </div>
    </>
  );
};

export default Clients;



































