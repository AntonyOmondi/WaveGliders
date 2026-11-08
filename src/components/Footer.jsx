import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import wvgsclogo from "../assets/wvgsclogo.png";

const linkClass = "flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors";

// TODO: replace the placeholder Facebook / X / YouTube URLs with the club's real accounts.
const SOCIALS = [
  { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com/yourclub" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/wavegliderskenya/" },
  { icon: FaXTwitter, label: "X", href: "https://x.com/yourclub" },
  { icon: FaTiktok, label: "TikTok", href: "https://www.tiktok.com/@wavegliderskenya" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com/yourclub" },
];

const VENUE_LINKS = [
  { name: "All Saints Primary School - Madaraka", href: "https://maps.app.goo.gl/PdiqrP4zagZxNSKy8" },
  { name: "Public Service Club - Upper Hill", href: "https://maps.app.goo.gl/efqqcBBDkPDj2mwf9" },
  { name: "Stedmark Gardens - Karen", href: "https://maps.app.goo.gl/WCaKtkjTeEeF8KHB9" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <img src={wvgsclogo} alt="Wave Gliders logo" className="h-14 w-auto" />
            <p className="text-sm text-slate-400 font-light max-w-xs">
              Swimming lessons and competitive coaching for all ages in Nairobi, Kenya.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className={linkClass}><FaEnvelope className="shrink-0 text-cyan-400" /><span className="break-all">wavegliderskenya@gmail.com</span></p>
            <p className={linkClass}><FaPhoneAlt className="shrink-0 text-cyan-400" /> +254 726 462 641</p>
            <p className={linkClass}><FaMapMarkerAlt className="shrink-0 text-cyan-400" /> Nairobi, Kenya</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Icon className="shrink-0 text-cyan-400" /> {label}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Training Venues</h3>
            {VENUE_LINKS.map(({ name, href }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="block text-slate-300 hover:text-cyan-300 transition-colors">
                {name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Wave Gliders Swimming Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
