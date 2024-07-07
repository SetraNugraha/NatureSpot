export default function Contact() {
  return (
    <>
      <div className="my-[200px] flex justify-between items-start">
        {/* Left */}
        <div className="flex flex-col gap-y-7">
          <div className="flex flex-col">
            <h1 className="font-semibold text-primary">CONTACT</h1>
            <h3 className="font-semibold text-[30px] flex flex-col">
              Do you have any problem? <span className="mt-[-10px]">contact us immediately</span>
            </h3>
          </div>
          <img src="assets/contact.png" alt="" className="rounded-xl w-[465px]" />
        </div>

        {/* Right */}
        <div className="w-[650px] flex flex-col gap-y-3">
          {/* Full name */}
          <div>
            <input type="text" name="fullname" id="" placeholder="Full Name" className="w-full h-[40px] bg-[#1E6F5C33] opacity-80 rounded-lg border px-5 placeholder:font-semibold focus:outline-none focus:border-[2px] focus:border-primary" />
          </div>

          {/* Email Address */}
          <div>
            <input type="email" name="email" id="" placeholder="Email Address" className="w-full h-[40px] bg-[#1E6F5C33] opacity-80 border rounded-lg px-5 placeholder:font-semibold focus:outline-none focus:border-[2px] focus:border-primary" />
          </div>

          {/* Message */}
          <div>
            <textarea name="message" id="" placeholder="Your Message" className="w-full h-[300px] bg-[#1E6F5C33] opacity-80 px-5 py-3 rounded-lg placeholder:font-semibold border focus:outline-none focus:border-[2px] focus:border-primary "></textarea>
          </div>

          {/* Button Submit */}
          <div>
            <button className="w-full h-[40px] bg-yellow-300 font-semibold text-primary rounded-lg hover:bg-yellow-200 shadow-lg">Send Message</button>
          </div>
        </div>
      </div>
    </>
  )
}
