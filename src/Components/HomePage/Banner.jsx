import React from 'react';
import hero from '../../assets/hero-book.png';

const Banner = () => {
    return (
        
    <div className="hero bg-base-200 min-h-[70vh] rounded-2xl px-8 my-8 container  mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between py-3">
    <img
      src={hero}
    />
    <div className='space-y-8'>
      <h1 className="text-5xl font-bold font1 leading-14 "> Books to freshen up <br /> your bookshelf</h1>
      <button className="btn btn-success text-white">View The List</button>
    </div>
  </div>
</div>
        
    );
};

export default Banner;