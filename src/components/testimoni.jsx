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
        <div className="flex flex-col items-center gap-y-5">
          {/* Card Testimoni */}
          <div className="relative bg-primary flex items-center gap-x-10 p-10 rounded-tl-[50px] rounded-br-[50px] rounded-[10px]">
            {/* Profile */}
            <div className="flex flex-col items-center gap-y-1">
              <img src="/src/assets/people.png" alt="" />
              <h1 className="font-bold text-[#ECE7B4]">John Doe</h1>
              <p className="font-semibold text-white">Jakarta</p>
            </div>

            {/* text */}
            <div className="w-[460px] flex flex-col gap-y-3">
              <img src="/src/assets/kutip.svg" alt="" className="w-[40px] h-[30px]" />
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu consectetur elementum id massa ornare donec mattis.</p>
            </div>

            {/* Date */}
            <div className="absolute top-0 right-0 font-semibold text-white mt-5 mr-5">
              <p>12-05-2024</p>
            </div>
          </div>
          {/* Dot Swiper */}
          <div className="flex gap-x-2">
            <div className="w-[13px] h-[13px] rounded-full bg-primary cursor-pointer"></div>
            <div className="w-[12px] h-[12px] rounded-full bg-primary opacity-60 cursor-pointer"></div>
            <div className="w-[12px] h-[12px] rounded-full bg-primary opacity-60 cursor-pointer"></div>
            <div className="w-[12px] h-[12px] rounded-full bg-primary opacity-60 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </>
  )
}
