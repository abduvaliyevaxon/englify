import { useState } from 'react';
import logo from '../src/assets/headerLogo.png';
import './App.css';

function App() {
  return (
    <>
    <div className='bg-[#00A4FF] h-screen '>
      <nav className="max-w-6xl px-5 pt-6 mx-auto ">
        <div className="bg-white flex rounded-full items-center justify-between px-8 py-4">
          <img src={logo} alt="logo" className="h-15 object-contain" />

          <div className="flex items-center gap-8">
            <a href="#" className="text-[#28004D] text-xl">
              Maktab haqida
            </a>
            <a href="#" className="text-[#28004D] text-xl">
              Tariflar
            </a>
            <a href="#" className="text-[#28004D] text-xl">
              Aloqa
            </a>
            <a href="#" className="text-[#28004D] text-xl">
              Natijalar
            </a>
          </div>

          <button className="bg-[#00A4FF] text-[#FFFFFF] text-xl rounded-full px-4.5 py-2">
            Student App
          </button>
        </div>
      </nav>
    



      <div className='max-w-6xl  mx-auto px-5 mt-15 flex '>
        <div>
          <h2 className='text-white font-extrabold text-6xl'>General English</h2>
          <p className='text-white font-bold text-3xl mt-6'>Ingliz tilini zamonaviy metodlar yordamida <br/> tez va samarali o'rganing</p>
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
