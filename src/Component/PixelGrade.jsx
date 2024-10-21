import React from 'react';
import secondleft from '../../public/assets/rafiki.png';

const PixelGrade = () => {
  return (
    <>
      <div className="container-panel flex flex-col sm:flex-row items-center justify-center gap-8 p-6">
        {/* Left Panel */}
        <div className="left-panel">
          <img src={secondleft} alt="Graphic" style={{ width: '100%', maxWidth: '550px', height: 'auto' }} />
        </div>
        
        {/* Right Panel */}
        <div className="right-data text-center sm:text-left max-w-lg">
          <h1 className='font-semibold text-4xl mb-4'>
            The unseen of spending 
            <span className='block'>three years at Pixelgrade</span>
          </h1>

          <p className='text-justify font-light leading-relaxed mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis tortor ut ipsum aliquet, lobortis blandit lacus ultrices. Cras bibendum pharetra turpis, vitae pellentesque tortor molestie quis. Quisque pellentesque arcu et cursus laoreet. Proin ac tincidunt orci, at tincidunt nunc. Fusce lorem neque, scelerisque eget tincidunt et, elementum sit amet magna. Vivamus libero mauris, viverra fringilla eleifend ac, porta eu risus.
          </p>

          <button className='btn-sign-up text-white border bg-green-600 border-green-500 py-2 px-4 rounded'>
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default PixelGrade;
