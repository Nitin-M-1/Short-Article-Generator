import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-40 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
        
      </nav>

      <h1 className='head_text'>
      Unlock the Power of  <br className='max-md:hidden' />
        <span className='orange_gradient '>AI Technology </span>for Article Summaries
      </h1>
      <h2 className='desc'>
      Make reading easier with Summize, an open-source tool that turns long articles into short, easy-to-understand summaries.
      </h2>
    </header>
  );
};

export default Hero;
