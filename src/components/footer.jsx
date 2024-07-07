export default function Footer() {
  return (
    <>
      <footer className="bg-primary relative rounded-t-[40px] px-[15%]">
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
            {/* service */}
            <div className="flex flex-col gap-y-5">
              <h1 className="font-bold text-[#ECE7B4]">Services</h1>

              <div className="flex flex-col gap-y-1 text-slate-300">
                <a href="/">House Plant</a>
                <a href="/">Garden Plant</a>
                <a href="/">Vase</a>
                <a href="/">Fertilizer</a>
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col gap-y-5">
              <h1 className="font-bold text-[#ECE7B4]">Information</h1>

              <div className="flex flex-col gap-y-1 text-slate-300">
                <a href="/">Office Hours</a>
                <a href="/">Requirments</a>
                <a href="/">About Us</a>
              </div>
            </div>

            {/* Helpfull Link */}
            <div className="flex flex-col gap-y-5">
              <h1 className="font-bold text-[#ECE7B4]">Helpfull Link</h1>

              <div className="flex flex-col gap-y-1 text-slate-300">
                <a href="/">Service</a>
                <a href="/">Support</a>
                <a href="/">Terms & Condition</a>
                <a href="/">privacy Policy</a>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-y-5">
              <h1 className="font-bold text-[#ECE7B4]">Address</h1>

              <div className="flex flex-col gap-y-1 text-slate-300">
                <p>Jl. Pahlawan</p>
                <p>No. 27 Blok.C99</p>
                <p>Jakarta, Jawa Barat</p>
              </div>

              <a href="/" className="text-slate-300">Google Maps</a>
            </div>
          </div>
        </div>

        <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-white">Copyright 2024 All Right Reverse</p>
      </footer>
    </>
  )
}
