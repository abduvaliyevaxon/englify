import React from 'react';
import logo from '../src/assets/headerLogo.png';
import teacher from '../src/assets/teacher_azam.jpg';

const students=[
  {
    "id":1,
    "name":"Ulug`bek",
     "videoId":"LCi8Esm-GEk"
  },
  {
    "id":2,
    "name":"Nabijon",
    "videoId":"LCi8Esm-GEk"
  },
  {
    "id":3,
    "name":"Shaxruza",
    "videoId":"LCi8Esm-GEk"
  },
  {
    "id":4,
    "name":"Diyorbek",
    "videoId":"LCi8Esm-GEk"
  },
]

const results=[
  {
    "id":1,
    "name":"SALOKHOV JAKHONGIR",
     "resultId":"https://d8tj7d7pfsmw2.cloudfront.net/1/X1C-g0ihBRiTNFc0-SkC3fUSFq3dN_kh.webp"
  },
  {
    "id":2,
    "name":"MIRZAEV ERALI",
     "resultId":"https://d8tj7d7pfsmw2.cloudfront.net/1/V-MSRDBc4n6e6OOXxxcjJymyRpj9Q_DU.webp"
  },
  {
    "id":3,
    "name":"KOBULOV ABU BAKR",
     "resultId":"https://d8tj7d7pfsmw2.cloudfront.net/1/U7V0ryi21mq0Kfd46ehumhd_uZDvcYd7.webp"
  },
  {
    "id":4,
    "name":"SHARIPOV AKMALJON",
     "resultId":"https://d8tj7d7pfsmw2.cloudfront.net/1/sVM5RV9ZiMQLQfYW4sy_MP70aCiSpyy5.webp"
  },

]

const izohlar=[
  {
    "id":1,
     "izohId":"https://d8tj7d7pfsmw2.cloudfront.net/1/ipipsvtI96mwBFR_Kd9C2J5BsffFyXZ1.jpg"
  },
  {
    "id":2,
     "izohId":"https://d8tj7d7pfsmw2.cloudfront.net/1/X0KcuriX9FqF7j4QQTK3ZU4YCSjd9xGX.jpg"
  },
  {
    "id":3,
     "izohId":"https://d8tj7d7pfsmw2.cloudfront.net/1/L5E7kf2B6ayz4pSjLVJJx2zh-dita2P4.jpg"
  },
  {
    "id":4,
     "izohId":"https://d8tj7d7pfsmw2.cloudfront.net/1/sza_vKM3wS1U7_agrFEcgtlTEM8_iDXk.jpg"
  },
  {
    "id":5,
     "izohId":"https://d8tj7d7pfsmw2.cloudfront.net/1/rmTMpUsD0Sxe43pOzHRQHw2zmEr5v6IJ.jpg"
  },
]

function App() {
  return (
    <div>
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
      <div className="max-w-6xl mx-auto mt-20 flex gap-40">
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



    {/*o'quvchilarning fikrlari start*/}
    <div className='bg-[#FFFFFF] h-170'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-[#28004D] font-bold mt-20 text-5xl px-78'>O'quvchilarning fikrlari</h2>

        <div className='flex gap-10 overflow-auto mt-20 '>
          {
            students.map((student)=>(
            <div key={student.id} >
              <iframe  src={`https://www.youtube-nocookie.com/embed/${student.resultId}`} frameborder="0" className=' w-full h-[400px] rounded-3xl relative'></iframe>

              <h2 className='absolute mt-[-50px] ml-[83px]  text-[#28004D] font-bold bg-[#FFFFFF] p-1.5 px-4 rounded-2xl'>{student.name}</h2>
            </div>
            ))
          }

        </div>

      </div>
    </div>
    {/*o'quvchilarning fikrlari end*/}



    {/*O'quvchilarimizning natijalari  start*/}
    <div className='bg-[#F5F6FA] h-180'>
      <div className='max-w-6xl mx-auto '>
        <h2 className='text-[#28004D] font-bold text-center text-5xl py-20'>O'quvchilarimizning natijalari💣</h2>

        <div className='flex gap-8 overflow-auto'>
          {
            results.map((result)=>(
              <div key={result.id}>
                <img src={result.resultId} alt="picture"  className='h-[400px] w-full rounded-3xl relative'/>

                <h2 className='absolute text-[#28004D] font-bold bg-white rounded-2xl  mt-[-58px] ml-[38px] p-1.5 px-4'>{result.name}</h2>
              </div>
            ))
          }
        </div>

      
      </div>
    </div>
    {/*O'quvchilarimizning natijalari  end*/}




    {/*O'quvchilarning izohlari🤩  start*/}
    <div className='bg-[#FFFFFF] h-170'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-[#28004D] font-bold text-center text-5xl py-20'>O'quvchilarning izohlari🤩</h2>

        <div className='flex  gap-10 overflow-auto'>
          {
            izohlar.map((izoh)=>(
              <div key={izoh.id}>
                <img src={izoh.izohId} alt="picture"  className='h-[400px] w-full rounded-3xl relative'/>

              </div>
            ))
          }
        </div>
      </div>
    </div>
    {/*O'quvchilarning izohlari🤩  end*/}




    {/*Imkoniyatlar - ajoyib!   start*/}
    <div className='bg-[#F5F6FA]  h-310'>
      <div className='max-w-6xl  mx-auto'>
        <h2  className='text-[#28004D] font-bold text-center text-5xl py-20'>Imkoniyatlar - ajoyib! <br />Kursni tugatgandan keyingi natijalaringiz ham qiziqmi?!</h2>

        <div className='bg-[#f3f3f5] min-h-screen py-5 px-2'>
            <div className='max-w-[2000px] mx-auto grid grid-cols-3 gap-8'>
              {/*chap ustun*/}
              <div className="flex flex-col gap-[32px] ">
                  <div className="rounded-[40px] border-[3px] border-[#7ED957] bg-white p-5 mt-20 font-semibold text-[#7ED957] leading-[32px]">
                    Sevimli qo'shiqlaringizning ma'nosini tushunish uchun har xil
                    saytlardan qidirishingiz, filmlarning esa subtitrlarini o'qib
                    o'tirish shart emas. Qisqa vaqt ichida Listening'ingiz
                    yaxshilanganini sezasiz.
                  </div>

                  <div className="rounded-[40px] border-[3px] border-[#FFA45B] bg-white p-6 font-semibold text-[#FFA45B] leading-[32px]">
                    So'zlarni to'g'ri talaffuz qilishni o'rganasiz. Va'da berib
                    aytamizki, "Something in your eyes" iborasini Avazbek Olimovdan
                    yaxshiroq ayta olasiz.
                  </div>
              </div>

              {/*o'rtadagi ustun*/}
              <div className="flex flex-col gap-[32px]">
                  <div className="rounded-[40px] border-[3px] border-[#B6B0E6] bg-white p-5 font-semibold text-[#746CB0] leading-[32px]">
                    Ingliz tilini o'rganish orqali nufuzli chet el
                    universitetlariga grant yutish imkoni ham paydo bo'ladi.
                  </div>

                  <div className="rounded-[40px] border-[3px] border-[#FFA45B] bg-white p-5 font-semibold text-[#FFA45B] leading-[32px]">
                      Jahon adabiyotining eng buyuk asarlarini asl nusxada o'qib
                      tushuningiz, dunyo yangiliklaridan mashhur saytlar orqali
                      xabardor bo'lib borishingiz mumkin.
                  </div>

                  <div className="rounded-[40px] border-[3px] border-[#FF6B63] bg-white p-5 font-semibold text-[#FF6B63] leading-[32px]">
                    Ingliz tilini o'rganishning mutlaqo yangi va zamonaviy
                    metodlarini sinab ko'rishingiz, o'zingiz uchun til
                    o'rganishning yangi bosqichini kashf qilasiz.
                  </div>
              </div>

              {/*o'ng taraf*/}
              <div className="flex flex-col gap-[32px] pt-[140px]">
                  <div className="rounded-[40px] border-[3px] border-[#6EA8FF] bg-white p-6  font-semibold text-[#3F73D8] leading-[32px]">
                    Qaysi osh eng yaxshi ekanligi yoki "Gentra"ning narxini
                    bilishdan ko'ra ko'proq narsaga erishmoqchi bo'lgan maqsadli,
                    kuchli va sifatli muhitga kirasiz.
                  </div>

                  <div className="rounded-[40px] border-[3px] border-[#E4B300] bg-white p-6  font-semibold text-[#D09C00] leading-[32px]">
                    Shaxsiy karyerangizda o'sish uchun yuqori maoshli ish
                    topishingiz, xorijiy tashkilotlar bilan hamkorlik qilib
                    "soqqani soqqaga urishni" boshlaysiz.
                  </div>
              </div>

            </div><br />
            <button className='bg-[#2CF88F] text-[#28004D] text-xl rounded-xl mt-6 py-4 font-bold w-full'>Ishtirok etish!</button>
        </div>

      </div>
    </div>
    {/*Imkoniyatlar - ajoyib!   end*/}



    {/*Sizni nima kutmoqda?  start*/}
    <div className='bg-[#FFFFFF] h-340'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-[#28004D] font-bold text-center text-6xl py-20'>Sizni nima kutmoqda?</h2>


          <div className='bg-[#FFFFFF] min-h-screen py-5 px-2'>
            <div className='max-w-[2000px] mx-auto grid grid-rows-2 gap-8'>
                {/**1-qator start */}
                <div  className="flex flex-row gap-[32px] mt-[-30px] ">
                  <div className="rounded-[20px] border-[3px] border-[#C9CDE3] bg-white p-6 mt-5 font-semibold text-[#28004D] leading-[25px]">
                    <h2 className='text-2xl font-bold '><span>🖥</span>Onlayn - format</h2><br />
                    <p >Dunyoning istalgan nuqtasidan 24/7 vaqtda ilovaga kirish imkoniyati bor. Akauntingizga har qanday qurilmadan kirishingiz, darslarni o'zlashtirishingiz, mavzu yuzasidan savollarga sun'iy intellektdan javob olishingiz mumkin.</p><br />

                  {/*buttonlar "joshqin" va "botalogim" start*/}
                    <button className='bg-[#1BE67D] font-bold text-white text-[15px] px-4 py-2 rounded-xl mr-3'>JO'SHQIN</button>
                    <button className='bg-[#8873FF] font-bold text-white text-[15px] px-4 py-2 rounded-xl'>BO'TALOG'IM</button>
                  {/*buttonlar "joshqin" va "botalogim" end*/}
                  </div>


                  <div className="rounded-[20px] border-[3px] border-[#C9CDE3] bg-white p-6 mt-5 font-semibold text-[#28004D] leading-[25px]">
                    <h2 className='text-2xl font-bold '><span>💼</span>Uy vazifasi bo'yicha doimiy fikr-mulohazalar</h2><br />
                    <p>Qiziqarli va foydali zoom darslari 2 ta o'qituvchi siz bilan Grammatika va Speaking ko'nikmalari bo'yicha alohida alohida shug'ullanadi. Mavzularni tushuntiradi, savollarga javob beradi va tavsiyalarini berib boradi.</p><br />

                    {/*button start */}
                    <button className='bg-[#8873FF] font-bold text-white text-[15px] px-4 py-2 rounded-xl'>BO'TALOG'IM</button>
                    {/*button end */}
                  </div>
                </div>
                {/**1-qator end */}


                {/**2-qator start */}
                <div  className="flex flex-row gap-[32px] mt-[-15px] ">
                  <div className="rounded-[20px] border-[3px] border-[#C9CDE3] bg-white p-5 mt-7 h-[250px] w-[900px] font-semibold text-[#28004D] leading-[25px]">
                    <h2 className='text-2xl font-bold '><span>🫂</span>Guruhlar</h2><br />
                    <p >O'rtacha 14-16 ta o'quvchidan iborat guruhlarda o'quvchilar jonli onlayn darslarga qatnashadi, o'zaro bellashishadi va bir birlariga yordam berishadi.</p><br />

                  {/*buttonlar "joshqin" va "botalogim" start*/}
                    <button className='bg-[#8873FF] font-bold text-white text-[15px] px-4 py-2 rounded-xl'>BO'TALOG'IM</button>
                  {/*buttonlar "joshqin" va "botalogim" end*/}
                  </div>


                  <div className="rounded-[20px] border-[3px] border-[#C9CDE3] bg-white p-6 mt-5 h-[250px] font-semibold text-[#28004D] leading-[25px]">
                    <h2 className='text-2xl font-bold '><span>🧾</span>Sertifikatlar</h2><br />
                    <p>Har bir daraja tugatilganda sertifikat olish imkoni bor. Sertifikat darajasi amaliy ingliz tili darajangiz bilan bir xil bo'ladi.</p><br />

                    {/*button start */}
                    <button className='bg-[#1BE67D] font-bold text-white text-[15px] px-4 py-2 rounded-xl mr-3'>JO'SHQIN</button>
                    <button className='bg-[#8873FF] font-bold text-white text-[15px] px-4 py-2 rounded-xl'>BO'TALOG'IM</button>
                    {/*button end */}
                  </div>

                </div>
                {/**2-qator end */}



                {/*3-qator start*/}
                <div  className="flex flex-row gap-[32px] mt-[-30px] ">
                  <div className="rounded-[20px] border-[3px]  border-[#C9CDE3] bg-white p-6  h-[310px] font-semibold text-[#28004D] leading-[25px]">
                    <h2 className='text-2xl font-bold '><span>👤</span>Interaktiv onlayn platforma va shaxsiy akkaunt</h2><br />
                    <p >Har bir o'quvchi shaxsiy login va parollari orqali akauntiga kiradi. Mobil ilovada barcha video darslar, yangi so'zlar jadvali, uy vazifalari, jang natijalari va darajaga mos zoom darslari oson va tushunarli tarzda ko'rsatilgan.</p><br />

                  {/*buttonlar "joshqin" va "botalogim" start*/}
                    <button className='bg-[#1BE67D] font-bold text-white text-[15px] px-4 py-2 rounded-xl mr-3'>JO'SHQIN</button>
                    <button className='bg-[#8873FF] font-bold text-white text-[15px] px-4 py-2 rounded-xl'>BO'TALOG'IM</button>
                  {/*buttonlar "joshqin" va "botalogim" end*/}
                  </div>


                  <div className="rounded-[20px] border-[3px] border-[#C9CDE3] bg-white p-6  h-[300px] font-semibold text-[#28004D] leading-[25px]">
                    <h2 className='text-2xl font-bold '><span>🛎</span>Haqiqiy amerikancha darslar</h2><br />
                    <p>Har bir video aynan Amerika maktablari muhitida suratga olingan. Bitta darsda 2tadan 4gagacha serial ko'rinishidagi videodarslarni ko'rish orqali mavzuni oson va qiziqarli tarzda tushunib olasiz (videolar davomiyligi 5-10 daqiqa).</p><br />

                    {/*button start */}
                    <button className='bg-[#1BE67D] font-bold text-white text-[15px] px-4 py-2 rounded-xl mr-3'>JO'SHQIN</button>
                    <button className='bg-[#8873FF] font-bold text-white text-[15px] px-4 py-2 rounded-xl'>BO'TALOG'IM</button>
                    {/*button end */}
                  </div>

                </div>
                {/*3-qator end*/}

            </div>
            <button className='bg-[#2CF88F] text-[#28004D] text-xl rounded-xl mt-6 py-4 font-bold w-full'>Ishtirok etish!</button>
          </div>
        </div>

    </div>
    {/*Sizni nima kutmoqda?  end*/}



    {/**kurslarimiz aynan start */}
    <div className='bg-[#F5F6FA] h-190'>
       <div className='max-w-6xl mx-auto'>
        <h2 className='text-[#28004D] font-bold text-5xl py-25'>Kurslarimiz aynan</h2>

        <div className='bg-[#F5F6FA] min-h-screen py-5 px-2 mt-[-55px]'>
          <div className='max-w-[2000px] mx-auto grid grid-rows-3 gap-5'>
            <div className="flex flex-row gap-[32px] ">

              <div className="rounded-[40px] border-[3px] border-[#E7B458] bg-[#FFD587] p-5 w-170 h-45  font-semibold text-[#28004D] leading-[26px]">
                <h2  className='text-[#28004D] font-bold text-2xl '>Abituriyentlar</h2>
                <p>Davlat va chet el universitetlari, litsey va boshqa o'quv muassasalari imtihonlariga ingliz tilidan tayyorlanuvchilar uchun</p>
              </div>

              <div className="rounded-[40px] border-[3px] border-[#96E66E] bg-[#B9FF97] p-5  font-semibold text-[#28004D] leading-[26px]">
                <h2 className='text-[#28004D] font-bold text-2xl '>Havaskorlar</h2>
                <p>Yangi til va madaniyatlarni o'rganishga qiziquvchi sayohatchilar, poliglotlar uchun</p>
              </div>

              <div className="rounded-[40px] border-[3px] border-[#72A3E4] bg-[#A2CAFF] p-5  font-semibold text-[#28004D] leading-[26px]">
                <h2 className='text-[#28004D] font-bold text-2xl '>Ma'lum kasb egalari</h2>
                <p>Qo'shimcha til bilish orqali o'z karyerasida o'sishni reja qilyotgan xodimlar uchun</p>
              </div>
            </div>





            <div className="flex flex-row gap-[32px] ">

              <div className="rounded-[40px] border-[3px] border-[#B3B3D9] bg-[#D3D3F1] p-5  font-semibold text-[#28004D] leading-[26px]">
                <h2 className='text-[#28004D] font-bold text-2xl '>Maktab o'quvchilari</h2>
                <p>Ingliz tilini o'rganib, darsdan bo'sh vaqtlarini samarali o'tkazishni xohlovchi o'quvchilar uchun</p>
              </div>

              <div className="rounded-[40px] border-[3px] border-[#BD90EC] bg-[#DBB7FF] p-5  font-semibold text-[#28004D] leading-[26px]">
                <h2 className='text-[#28004D] font-bold text-2xl '>Talabalar</h2>
                <p>Darslardan tashqari zamonaviy kasblarni o'rganib moliyaviy erkinlikka erishmoqchi bo'lgan yoshlar uchun</p>
              </div>

              <div className="rounded-[40px] border-[3px] border-[#E0CE46] bg-[#FFF18A] p-5  font-semibold text-[#28004D] leading-[26px]">
                <h2 className='text-[#28004D] font-bold text-2xl '>Chet eldagi yurtdoshlarimiz</h2>
                <p>Ishlash yoki o'qish maqsadida chet elga ketgan, kundalik muloqot uchun ingliz tiliga ehtiyoji bo'lgan insonlar uchun ideal tanlov hisoblanadi</p>
              </div>
            </div>
            <div className='mt-5'>
            <button className='bg-[#2CF88F]  text-[#28004D] text-xl rounded-xl py-4 font-bold w-full'>Ishtirok etish!</button>
          </div>
          </div>
          
        </div>
        

       </div>
    </div>
    {/**kurslarimiz aynan end */}



    {/**mentorlarimiz start */}
    <div className='bg-[#FFFFFF] h-190'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='text-[#28004D] font-bold text-center  text-5xl leading-[120px]'>Mentorlarimiz</h2>
        <p className='text-[#28004D] font-bold text-center  text-2xl '>Bizning maktab — bu ingliz tilini oson va qiziqarli o'rganish uchun ajoyib joy!  <br />Tajribali o'qituvchilar va zamonaviy dasturlar yordamida siz maqsadingizga tezroq erishasiz.</p>

      </div>
    </div>
    {/**mentorlarimiz end */}

     </div>
    

    
  );
}

export default App;
