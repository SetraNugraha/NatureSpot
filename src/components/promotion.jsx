export default function Promotion() {
  return (
    <>
      <div className="my-[250px] flex justify-between items-center">
        {/* Left */}
        <div>
          <a href="#">
            <img src="/src/assets/banner1.png" alt="" />
          </a>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-y-7">
          <a href="#">
            <img src="/src/assets/banner2.png" alt="" />
          </a>

          <a href="#">
            <img src="/src/assets/banner3.png" alt="" />
          </a>
        </div>
      </div>
    </>
  )
}
