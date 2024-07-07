export default function Benefits() {
  return (
    <>
      <div className="my-[150px] flex justify-between items-center gap-x-10">
        {/* Benefits 1 */}
        <div className="flex gap-x-5 items-center">
          {/* Image */}
          <div className="w-[110px] h-[85px] flex justify-center items-center bg-primary rounded-lg rounded-br-[30px] rounded-tl-[30px]">
            <img src="assets/quality.svg" alt="" />
          </div>

          {/* desc */}
          <div className="flex flex-col ">
            <h1 className="font-bold text-2xl text-primary font-roboto">Best Quality</h1>
            <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Benefits 2 */}
        <div className="flex gap-x-3 items-center">
          {/* Image */}
          <div className="w-[110px] h-[85px] flex justify-center items-center bg-primary rounded-lg rounded-br-[30px] rounded-tl-[30px]">
            <img src="assets/trolli.svg" alt="" />
          </div>

          {/* desc */}
          <div className="flex flex-col ">
            <h1 className="font-bold text-2xl text-primary font-roboto">Free Delivery</h1>
            <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Benefits 3 */}
        <div className="flex gap-x-3 items-center">
          {/* Image */}
          <div className="w-[110px] h-[85px] flex justify-center items-center bg-primary rounded-lg rounded-br-[30px] rounded-tl-[30px]">
            <img src="assets/payment.svg" alt="" />
          </div>

          {/* desc */}
          <div className="flex flex-col ">
            <h1 className="font-bold text-2xl text-primary font-roboto">Easy Payments</h1>
            <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </>
  )
}
