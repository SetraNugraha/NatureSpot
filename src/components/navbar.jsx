/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

const menu = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Service',
    url: '/',
  },
  {
    title: 'Product',
    url: '/',
  },
  {
    title: 'Testimoni',
    url: '/',
  },
  {
    title: 'Contact',
    url: '/',
  },
]

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    function handleIsScroll() {
      if (window.scrollY > 0) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', handleIsScroll)

    return () => {
      window.removeEventListener('scroll', handleIsScroll)
    }
  }, [])

  return (
    <>
      <header className={`px-[15%] ${isScroll ? 'sticky top-5 z-50' : ''}`}>
        <nav className={`flex justify-between items-center mt-7 transition-all duration-300 ${isScroll ? 'shadow-xl p-3 bg-white z-50 rounded-xl border-[0.5px] border-slate-100 w-[90%] mx-auto transition-all duration-300' : ''}`}>
          <a className="font-bold text-primary text-2xl cursor-pointer">
            Nature<span className="text-yellow-500">Spot</span>
          </a>
          <ul className="flex gap-x-10 items-center text-slate-500">
            {menu.map((item, index) => (
              <a href={item.url} key={index}>
                <li className="transform duration-300 hover:font-bold hover:text-primary hover:border-b-[1px] hover:border-primary cursor-pointer ">{item.title}</li>
              </a>
            ))}
          </ul>
          <ul className="flex gap-x-8 items-center">
            <a href="/">
              <img src="assets/cart.svg" alt="cart" className="w-[25px] h-[27px] hover:opacity-70 " />
            </a>

            <a href="/">
              <img src="assets/profile.svg" alt="cart" className="w-[25px] h-[26px] hover:opacity-70" />
            </a>
          </ul>
        </nav>
      </header>
    </>
  )
}
