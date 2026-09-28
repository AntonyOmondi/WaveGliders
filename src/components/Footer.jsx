import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const linkClass = "flex items-center gap-3 hover:text-sky-300 transition-colors";

export default function Footer() {
  return (
    <footer className="bg-zinc-950/50 text-white mt-16">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className={`${linkClass} text-sky-100`}>
              <FaEnvelope className="shrink-0" />
              <span className="min-w-0 break-words">wavegliderskenya@gmail.com</span>
            </p>
            <p className={`${linkClass} text-sky-100`}>
              <FaPhoneAlt className="shrink-0" /> +254 726 462 641
            </p>
            <p className={`${linkClass} text-sky-100`}>
              <FaMapMarkerAlt className="shrink-0" /> Nairobi, Kenya
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <a href="https://facebook.com/yourclub" target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaFacebookF className="shrink-0" /> Facebook
            </a>
            <a href="https://www.instagram.com/wavegliderskenya/" target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaInstagram className="shrink-0" /> Instagram
            </a>
            <a href="https://x.com/yourclub" target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaXTwitter className="shrink-0" /> X
            </a>
            <a href="https://www.tiktok.com/@wavegliderskenya?_r=1&_t=ZS-99yuMt1agfE" target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaTiktok className="shrink-0" /> TikTok
            </a>
            <a href="https://youtube.com/yourclub" target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaYoutube className="shrink-0" /> YouTube
            </a>
          </div>

          {/* Training Venues */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Training Venues</h3>
            <a className="block hover:text-sky-300 transition-colors" href="https://maps.app.goo.gl/PdiqrP4zagZxNSKy8" target="_blank" rel="noopener noreferrer">
              All Saints Primary School - Madaraka
            </a>
            <a className="block hover:text-sky-300 transition-colors" href="https://maps.app.goo.gl/efqqcBBDkPDj2mwf9" target="_blank" rel="noopener noreferrer">
              Public Service Club - Upper Hill
            </a>
            <a className="block hover:text-sky-300 transition-colors" href="https://maps.app.goo.gl/WCaKtkjTeEeF8KHB9" target="_blank" rel="noopener noreferrer">
              Stedmark Gardens - Karen
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-700 pt-4 text-center text-sm text-white">
          © {new Date().getFullYear()} Wave Gliders Swimming Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}