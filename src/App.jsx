import { useState } from 'react';
import logo from '../src/assets/headerLogo.png';
import logo1 from '../src/assets/teacher_azam.jpg'
import './App.css';
{/**Englify web sayt */}

function App() {
  return (
    <>
    <div className='bg-[#00A4FF] h-screen '>
      <nav className="max-w-6xl px-5 pt-6 mx-auto ">
        <div className="bg-white flex rounded-full items-center justify-between px-8 py-4 shadow-lg">
          <img src={logo} alt="logo web" className="h-15 object-contain" />

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
    



      <div className='max-w-6xl  mx-auto px-6 mt-10 '>
        <div>
          <h2 className='text-white font-extrabold text-7xl'>General English</h2>
          <p className='text-white font-bold text-3xl mt-6'>Ingliz tilini zamonaviy metodlar yordamida <br/> tez va samarali o'rganing</p>
        </div><br /><br />



    <div className='flex justify-between items-center'>
        <div className="bg-[#f5f5f5] rounded-[30px] p-9 w-[600] ">
          {/*chap tomon*/}
             <div>
                  {/*Ism familya*/ }
                  <label className="block text-[18px] font-semibold text-[#1B1464] mb-2">
                    Ismingiz va Familiyangiz
                  </label>

                  <input  type="text" placeholder="Ismingiz va Familiyangiz" className="w-full h-[80] px-6 rounded-2xl bg-white text-lg   "/>
             </div><br />

             {/* Telefon */}
             <div className="mb-6">
                <label className="block text-[18px] font-semibold text-[#1B1464] mb-2">
                  Telefon raqamingiz
                </label>

                <div className="flex h-[80]  rounded-2xl bg-white">
                <div className="flex items-center gap-2 px-5 ">
                <span className="text-[18px] font-medium">UZ</span>
              </div>

              <div className="flex items-center px-5 text-[#1B1464] text-[20px] font-bold">
                +998
              </div>

              <input type="tel" className="flex-1 px-4"/><br />

              
            </div><br />

            <button className="w-full h-12 rounded-2xl bg-[#2CF88F]  text-[#28004D] text-xl font-bold">
                Ro'yhatdan o'tish
            </button>

            <p className="mt-5 text-center text-[16px] font-medium text-black">
                Tugmani bosish orqali siz 
            <a href="#" className="text-[#1195ff] underline">
                ommaviy ofertamizga
            </a>
              rozilik bildirasiz!
            </p>
        </div>
      </div>


    <div>
      {/*ong tomon*/}
      <img src={logo1} alt="rasm" className="h-100" />
    </div>
  </div>


      </div>
    </div>

    </>
  );
}

export default App;
