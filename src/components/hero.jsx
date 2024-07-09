/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const heroImage = [
  {
    title: 'Tanaman',
    path: 'plant1',
  },
  {
    title: 'Tanaman',
    path: 'plant2',
  },
  {
    title: 'Tanaman',
    path: 'plant3',
  },
  {
    title: 'Tanaman',
    path: 'plant4',
  },
]

export default function Hero() {
  return (
    <>
      <div className="mt-[90px] py-7 bg-primary flex justify-between items-center px-20 rounded-3xl">
        {/* Left */}
        <div className="h-[370px] w-[600px] flex flex-col justify-between">
          {/* Title & Desc */}
          <div className="flex flex-col gap-y-5">
            <h1 className="text-5xl text-[#ECE7B4] font-bold">
              More Cozy, More Fresh <span>Environment</span>
            </h1>
            <p className="text-[#E2E2E2] flex flex-col">
              Make your room cooler and more comfortable with <span>a variety of ornamental plants arranged in your room</span>
            </p>
          </div>

          {/* Button */}
          <div className="flex gap-x-7">
            <button className="px-5 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-primary font-bold rounded-lg">Explore Now</button>
            <button className="px-5 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-primary font-bold rounded-lg">Learn More</button>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/3">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{ delay: 2000 }}
            slidesPerView={'1'}
            spaceBetween={100}
            pagination={{
              clickable: true,
              el: '.hero-bullet',
            }}
            centeredSlides={true}
            className="flex flex-col gap-y-10"
          >
            {heroImage.map((item, index) => (
              <SwiperSlide key={index} className='flex items-center justify-center'>
                <img src={`/assets/${item.path}.png`} alt={item.title} className="w-[300px] h-[450px]" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="hero-bullet flex items-center justify-center gap-x-3"></div>
        </div>
      </div>
    </>
  )
}
