/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const products = [
  {
    name: 'Calathea Luthea',
    image: 'plant1',
    stock: 26,
    price: 120000,
  },
  {
    name: 'Monstera Deliciosa',
    image: 'plant2',
    stock: 15,
    price: 150000,
  },
  {
    name: 'Fiddle Leaf Fig',
    image: 'plant3',
    stock: 10,
    price: 200000,
  },
  {
    name: 'Snake Plant',
    image: 'plant2',
    stock: 40,
    price: 80000,
  },
  {
    name: 'ZZ Plant',
    image: 'plant3',
    stock: 35,
    price: 95000,
  },
  {
    name: 'Pothos',
    image: 'plant1',
    stock: 50,
    price: 50000,
  },
  {
    name: 'Spider Plant',
    image: 'plant3',
    stock: 45,
    price: 60000,
  },
  {
    name: 'Peace Lily',
    image: 'plant2',
    stock: 20,
    price: 110000,
  },
  {
    name: 'Rubber Plant',
    image: 'plant3',
    stock: 25,
    price: 130000,
  },
  {
    name: 'Chinese Money Plant',
    image: 'plant1',
    stock: 30,
    price: 90000,
  },
]

export default function Products() {
  return (
    <>
      <div className="my-20">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-y-2">
            <p className="text-primary font-semibold">OUR PRODUCTS</p>
            <h1 className="text-2xl font-semibold flex flex-col">
              There are variant types of plants that will make <span>your room more comfortable</span>
            </h1>
          </div>

          {/* button Swipe */}
          <div className="flex gap-x-7">
            <a href="" id="custom-left">
              <i>
                <img src="assets/left-swipe.svg" alt="" className="hover:opacity-50" />
              </i>
            </a>
            <a href="" id="custom-right">
              <i>
                <img src="assets/right-swipe.svg" alt="" className="hover:opacity-50" />
              </i>
            </a>
          </div>
        </div>

        {/* Product */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation={{
            prevEl: '#custom-left',
            nextEl: '#custom-right',
          }}
          slidesPerView={'4'}
          spaceBetween={30}
          className="my-20"
        >
          {products.map((item, index) => (
            // Card
            <SwiperSlide key={index} className="bg-primary relative px-5 rounded-tl-[50px] rounded-br-[60px] rounded-[10px]">
              {/* Image */}
              <div className="flex items-center justify-center mb-5">
                <img src={`assets/${item.image}.png`} alt="" className="w-[185px] h-[260px] mt-5" />
              </div>

              <div className="flex flex-col justify-between">
                {/* name & Stock*/}
                <div className="my-5">
                  <h2 className="text-[#ECE7B4] text-[20px] font-semibold">{item.name}</h2>
                  <p className="text-[16px] text-slate-300">({item.stock} Stock)</p>
                </div>

                {/* Price */}
                <div>
                  <p className="font-semibold text-white text-[22px] mb-5">Rp. {item.price.toLocaleString('id-ID')}</p>
                </div>

                {/* Button Cart */}
                <div className="bg-secondary w-[80px] h-[80px] absolute bottom-0 right-0 rounded-br-[50px] rounded-tl-[30px] flex justify-center items-center cursor-pointer ">
                  <a href="/">
                    <i>
                      <img src="assets/cart.svg" alt="" />
                    </i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
