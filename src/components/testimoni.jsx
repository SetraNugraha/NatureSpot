/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const testimoni = [
  {
    name: 'John Doe',
    address: 'Jakarta',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu consectetur elementum id massa ornare donec mattis',
    date: '13-10-2024',
  },

  {
    name: 'William Smith',
    address: 'Surabaya',
    message: 'Lorem ipsum dolor sit amet, consectetur',
    date: '24-04-2024',
  },

  {
    name: 'Abdul Saputra',
    address: 'Bekasi',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu consectetur elementum id',
    date: '09-07-2024',
  },

  {
    name: 'Marline',
    address: 'Bogor',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu consectetur elementum id massa ornare donec mattis, consectetur adipiscing elit., consectetur adipiscing elit.',
    date: '11-01-2024',
  },
]

export default function Testimoni() {
  return (
    <>
      <div className="flex justify-between items-start my-[200px]">
        {/* Left */}
        <div className="flex flex-col items-start gap-y-3">
          <h3 className="text-primary font-semibold">TESTIMONI</h3>
          <h1 className="text-[30px] font-semibold">What people said about us ?</h1>
          <p className="flex flex-col text-[16px] text-slate-500">
            Most of them buy positive feedback for us which is <span>none other than the best service we provide</span>
          </p>
        </div>

        {/* Right */}
        <div className="w-[700px]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{ delay: 2000 }}
            slidesPerView={'1'}
            spaceBetween={200}
            pagination={{
              clickable: true,
              el: '.testimoni-bullet',
            }}
            className={'bg-primary p-10 rounded-tl-[50px] rounded-br-[50px] rounded-[10px]'}
          >
            {testimoni.map((item, index) => (
              <SwiperSlide key={index} className="relative flex gap-x-10 items-center">
                <div className="flex flex-col items-center gap-y-1">
                  <img src="assets/people.png" alt="" />
                  <h1 className="font-bold text-[#ECE7B4]">{item.name}</h1>
                  <p className="font-semibold text-white">{item.address}</p>
                </div>

                <div className="w-[460px] flex flex-col gap-y-3">
                  <img src="assets/kutip.svg" alt="" className="w-[40px] h-[30px]" />
                  <p className="text-white">{item.message}</p>
                </div>

                <div className="absolute top-0 right-0 font-semibold text-white">
                  <p>{item.date}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimoni-bullet flex items-center justify-center gap-x-3 mt-5"></div>
        </div>
      </div>
    </>
  )
}
