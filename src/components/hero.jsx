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
        <div className="flex flex-col items-center gap-y-7">
          <img src="assets/plant1.png" alt="" className="w-[380px] h-[530px" />
          <div className="flex gap-x-2">
            <div className="w-[12px] h-[12px] rounded-full border border-secondary bg-secondary cursor-pointer"></div>
            <div className="w-[12px] h-[12px] rounded-full border border-secondary cursor-pointer"></div>
            <div className="w-[12px] h-[12px] rounded-full border border-secondary cursor-pointer"></div>
            <div className="w-[12px] h-[12px] rounded-full border border-secondary cursor-pointer"></div>
          </div>
        </div>
      </div>
    </>
  )
}
