export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center mt-7">
        <a className="font-bold text-primary text-2xl cursor-pointer">
          Nature<span className="text-yellow-500">Spot</span>
        </a>
        <ul className="flex gap-x-10 items-center text-slate-500 ">
          <li className="transform duration-200 hover:font-bold hover:text-primary hover:border-b-[1px] hover:border-primary cursor-pointer">Home</li>
          <li className="transform duration-200 hover:font-bold hover:text-primary hover:border-b-[1px] hover:border-primary cursor-pointer">Service</li>
          <li className="transform duration-200 hover:font-bold hover:text-primary hover:border-b-[1px] hover:border-primary cursor-pointer">Product</li>
          <li className="transform duration-200 hover:font-bold hover:text-primary hover:border-b-[1px] hover:border-primary cursor-pointer">Testimoni</li>
          <li className="transform duration-200 hover:font-bold hover:text-primary hover:border-b-[1px] hover:border-primary cursor-pointer">Contact</li>
        </ul>
        <ul className="flex gap-x-8 items-center">
          <a href="/">
            <img src="assets/cart.svg" alt="cart" className="w-[25px] h-[27px]" />
          </a>

          <a href="/">
            <img src="assets/profile.svg" alt="cart" className="w-[25px] h-[26px]" />
          </a>
        </ul>
      </nav>
    </>
  )
}
