// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-white to-green-300">
      <div className=" py-10 w-[95%] mx-auto rounded-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left items-start text-[20px]">
          {/* Logo */}
          <div className="flex justify-center md:justify-start items-center h-full">
            <span className="font-bold ">Tickeven Logo</span>
          </div>
  
          {/* Navigation Links */}
          <div className="space-y-2 ">
            <p className="hover:underline cursor-pointer">Home</p>
            <p className="hover:underline cursor-pointer">About Us</p>
            <p className="hover:underline cursor-pointer">Upcoming Events</p>
            <p className="hover:underline cursor-pointer">Event Organizers</p>
            <p className="hover:underline cursor-pointer">Donations</p>
          </div>
  
          {/* Contact Info */}
          <div className="space-y-2">
            <p>Email: <a href="mailto:info@tickeven.co.uk" className="underline">info@tickeven.co.uk</a></p>
            <p>Phone: 020 430 5294</p>
          </div>
  
          {/* Social Icons */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-3">
              <span className="text-2xl hover:text-black cursor-pointer"><img src="/facebook.png" alt="" /></span> {/* Facebook */}
              <span className="text-2xl hover:text-black cursor-pointer"><img src="/instagram.png" alt="" /></span> {/* Instagram */}
            </div>
            <div className="flex gap-3">
              <span className="text-2xl hover:text-black cursor-pointer"><img src="/X.png" alt="" /></span> {/* Twitter/X */}
              <span className="text-2xl hover:text-black cursor-pointer"><img src="/linkedin.png" alt="" /></span> {/* LinkedIn */}
            </div>
          </div>
  
          {/* Address */}
          <div>
            <p>49 Stoneton Crescent,</p>
            <p>Balsall Common</p>
          </div>
        </div>
      </div>
      </footer>
    );
  }
  