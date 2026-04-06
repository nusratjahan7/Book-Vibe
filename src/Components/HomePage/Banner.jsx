import React from 'react';
import hero from '../../assets/hero-book.png';
import { motion } from "framer-motion";

const Banner = () => {
    return (
        
    <div className="hero bg-base-200 min-h-[70vh] rounded-2xl px-8 my-8 container  mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between py-3">
    <motion.img
    initial={{opacity: 0, y:-30}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1.1}}

      src={hero}
    />
    <motion.div 
    initial={{opacity: 0, y:-30}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1.1}}
    className='space-y-8'>
      <h1 className="text-5xl font-bold font1 leading-14 "> Books to freshen up <br /> your bookshelf</h1>
      <button className="btn btn-success text-white">View The List</button>
    </motion.div>
  </div>
</div>
        
    );
};

export default Banner;