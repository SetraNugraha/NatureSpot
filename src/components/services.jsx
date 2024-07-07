export default function Services() {
  return (
    <>
      <div className="my-20">
        {/* Header */}
        <div className="flex flex-col gap-y-3 items-center">
          <h1 className="font-bold text-primary">WHAT WE SERVE</h1>
          <h4 className="text-2xl font-semibold">We provide plants and maintained care</h4>
        </div>
        {/* Image */}
        <div className="flex gap-x-2 justify-between items-center mt-12">
          <div className="relative w-[320px] ">
            <img src="assets/img-services1.png" alt="" className="w-[350px]" />
            <div className="absolute inset-0 m-[7px] rounded-[10px] flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition duration-200">
              <h1 className="font-bold text-[#ECE7B4] text-2xl">Calathea Lutea</h1>
            </div>
          </div>
          
          <div className="relative w-[320px] ">
            <img src="assets/img-services2.png" alt="" className="w-[350px]" />
            <div className="absolute inset-0 m-[7px] rounded-[10px] flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition duration-200">
              <h1 className="font-bold text-[#ECE7B4] text-2xl">Calathea Lutea</h1>
            </div>
          </div>

          <div className="relative w-[320px] ">
            <img src="assets/img-services3.png" alt="" className="w-[350px]" />
            <div className="absolute inset-0 m-[7px] rounded-[10px] flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition duration-200">
              <h1 className="font-bold text-[#ECE7B4] text-2xl">Calathea Lutea</h1>
            </div>
          </div>

          <div className="relative w-[320px] ">
            <img src="assets/img-services1.png" alt="" className="w-[350px]" />
            <div className="absolute inset-0 m-[7px] rounded-[10px] flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition duration-200">
              <h1 className="font-bold text-[#ECE7B4] text-2xl">Calathea Lutea</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
