import React from 'react';
import logo from '../src/assets/headerLogo.png';
import teacher from '../src/assets/teacher_azam.jpg';

function App() {
  return (
    <div className="bg-[#04A4FF] min-h-screen">
      {/* navbar  */}
      <nav className="sticky top-4 z-50 max-w-6xl mx-auto">
        <div className="flex items-center justify-between bg-white rounded-full px-8 py-4 shadow-lg">
          {/* logo */}
          <img src={logo} alt="logo veb" className=" h-16 object-contain" />

          <div className="flex gap-8 text-[#28004D] items-center font-bold text-xl">
            <a href="#">Maktab haqida</a>
            <a href="#">Tarfilar</a>
            <a href="#">Aloqa</a>
            <a href="#">Natijalar</a>
          </div>

          <button className="bg-[#04A4FF] text-white px-8 py-4 rounded-full text-xl font-semibold">
            Student App
          </button>
        </div>
      </nav>

      {/*hero section */}
      <div className="max-w-6xl mx-auto mt-12 flex gap-40">
        {/*chap tomono */}
        <div>
          <h1 className="text-white font-extrabold text-6xl">
            General English
          </h1>

          <p className="text-white font-bold text-2xl mt-4">
            Ingliz tilini zamonaviy metodlar yordamida <br /> tez va samarali o'rganing
          </p>



          <div className='bg-white mt-8 rounded-3xl p-6 max-w-md'>
            <div className='flex  flex-col gap-1'>
              <label className=' text-[#28004D] font-bold'>Ismingiz va Familyangiz</label>
              <input type="text" placeholder='Ismingiz va familyangiz' className='border border-gray-500 rounded-xl px-8 py-4 focus:border-[#28004D] font-bold' />
            </div>

            <div className='flex flex-col gap-1 mt-2'>
              <label className=' text-[#28004D] font-bold'>Telefon raqam kiriting</label>

              <div className='border border-gray-500 rounded-xl px-8 py-4 focus:border-[#28004D] font-bold'>
                <select>
                  <option>🇺🇿</option>
                  <option>rus</option>
                </select>

                <input type="tel" placeholder='+998' className='font-bold ' />
              </div>
              <button className='bg-[#2CF88F] rounded-xl mt-6 py-2 font-bold'>Ro'yxatdan o'tish</button>
            </div>

          </div>

        </div>

        {/*ong tomon */}
        <div>
          <img src={teacher} alt="picture" className=" h-150 object-contain" />
        </div>

      </div>
    </div>
  );
}

export default App;
