import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50">
      
      <div className="flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16 py-5">
        
        {/* Logo */}
        <div className="text-white text-lg sm:text-xl font-semibold">
          StartOn
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <Link
            href="#templates"
            className="text-white text-xs sm:text-sm md:text-[15px] hover:opacity-70 transition-opacity"
          >
            Templates
          </Link>

          <Link
            href="#pricing"
            className="text-white text-xs sm:text-sm md:text-[15px] hover:opacity-70 transition-opacity"
          >
            Pricing
          </Link>

          <Link
            href="#process"
            className="text-white text-xs sm:text-sm md:text-[15px] hover:opacity-70 transition-opacity"
          >
            Process
          </Link>

          <Link
            href="#faq"
            className="text-white text-xs sm:text-sm md:text-[15px] hover:opacity-70 transition-opacity"
          >
            FAQ
          </Link>
        </div>

        {/* Button */}
        <div>
          <button className="px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white rounded-full text-xs sm:text-sm md:text-[15px] font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}