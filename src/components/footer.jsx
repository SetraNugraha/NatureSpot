/* eslint-disable no-unused-vars */

const menu = [
  {
    header: 'Services',
    submenu: [
      {
        title: 'House Plant',
        url: '/',
      },
      {
        title: 'Garden Plant',
        url: '/',
      },
      {
        title: 'Vase',
        url: '/',
      },
      {
        title: 'Vertilizer',
        url: '/',
      },
    ],
  },
  {
    header: 'Information',
    submenu: [
      {
        title: 'Office Hours',
        url: '/',
      },
      {
        title: 'Requirments',
        url: '/',
      },
      {
        title: 'About Us',
        url: '/',
      },
    ],
  },
  {
    header: 'Helpfull Link',
    submenu: [
      {
        title: 'Service',
        url: '/',
      },
      {
        title: 'Support',
        url: '/',
      },
      {
        title: 'Terms & Condition',
        url: '/',
      },
      {
        title: 'Privacy Policy',
        url: '/',
      },
    ],
  },
]

export default function Footer() {
  return (
    <>
      <footer className="bg-primary relative rounded-t-[40px] px-[15%] pb-10">
        <div className="py-[100px] flex justify-between items-center">
          {/* profile */}
          <div className="flex flex-col gap-y-5">
            <a className="font-bold text-secondary text-xl cursor-pointer">
              Nature<span className="text-[#ECE7B4]">Spot</span>
            </a>

            <div className="flex flex-col gap-y-2">
              <p className="text-slate-300">naturespot@gmail.com</p>
              <p className="text-slate-300">+6286756325617</p>
            </div>

            {/* Social Meida */}
            <div className="flex gap-x-3 items-center mt-5">
              <a href="/">
                <img src="/src/assets/whatsapp.svg" alt="" className="w-[30px] h-[30px]" />
              </a>

              <a href="/">
                <img src="/src/assets/instagram.svg" alt="" className="w-[30px] h-[30px]" />
              </a>

              <a href="/">
                <img src="/src/assets/facebook.svg" alt="" className="w-[30px] h-[30px]" />
              </a>
            </div>
          </div>

          {/* other link */}
          <div className="grid grid-cols-4 gap-[70px]">
            {menu.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-5">
                <h1 className="font-bold text-[#ECE7B4]">{item.header}</h1>

                <div className="flex flex-col gap-y-1 text-slate-300">
                  {item.submenu.map((subItem, index) => (
                    <a key={index} href={subItem.url} className="hover:underline">
                      {subItem.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Address */}
            <div className="flex flex-col gap-y-5">
              <h1 className="font-bold text-[#ECE7B4]">Address</h1>

              <div className="flex flex-col gap-y-1 text-slate-300">
                <p>Jl. Pahlawan</p>
                <p>No. 27 Blok.C99</p>
                <p>Jakarta, Jawa Barat</p>
              </div>

              <a href="/" className="text-white underline">
                Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center my-3">
          <p className="text-slate-300">
            Design by :{' '}
            <span>
              <a href="https://www.youtube.com/watch?v=5zHNySMbbAs&list=PL-YZOfK-KK_lk-U2VrM8-f7Uflt9LrWwM" target="_blank" className=" underline">
                UI Creative Studio
              </a>
            </span>
          </p>
          <p className=" text-white">Copyright 2024 All Right Reverse</p>
        </div>
      </footer>
    </>
  )
}
