import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24">
      
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-14 md:gap-20">
        
        {/* Left Section */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Let&apos;s build <br /> your storefront.
          </h1>

          <a
            href="mailto:hello@storefront.studio"
            className="inline-block mt-8 sm:mt-10 md:mt-12 text-lg sm:text-2xl md:text-3xl text-white/85 underline hover:text-white/60 transition-colors"
          >
            hello@storefront.studio
          </a>
        </div>

        {/* Studio Links */}
        <div>
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            STUDIO
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="#templates"
              className="text-white/85 text-sm sm:text-base hover:text-white/60 transition-colors"
            >
              Templates
            </Link>

            <Link
              href="#pricing"
              className="text-white/85 text-sm sm:text-base hover:text-white/60 transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="#process"
              className="text-white/85 text-sm sm:text-base hover:text-white/60 transition-colors"
            >
              Process
            </Link>

            <Link
              href="#faq"
              className="text-white/85 text-sm sm:text-base hover:text-white/60 transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Elsewhere Links */}
        <div>
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            ELSEWHERE
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="#"
              className="text-white/85 text-sm sm:text-base hover:text-white/60 transition-colors"
            >
              Twitter / X
            </Link>

            <Link
              href="#"
              className="text-white/85 text-sm sm:text-base hover:text-white/60 transition-colors"
            >
              Instagram
            </Link>

            <Link
              href="#"
              className="text-white/85 text-sm sm:text-base hover:text-white/60 transition-colors"
            >
              Dribbble
            </Link>

            <Link
              href="#"
              className="text-white/85 text-sm sm:text-base hover:text-white/60 transition-colors"
            >
              Read.cv
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}