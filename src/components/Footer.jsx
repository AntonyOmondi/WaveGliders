import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube } from "react-icons/fa"
import { FaXTwitter, FaTiktok } from "react-icons/fa6"

export default function Footer (){
    return(
    <footer className="bg-zinc-950/50 text-white mt-16">
        <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="flex justify-around md:grid-cols-2">
            {/* Contact Information */}
                <div className="space-y-4">
                    <h3 className="text-xl text-center font-semibold mb-4">Contact Us</h3>
                    <p className="flex items-center gap-3 text-sky-100 hover:text-sky-300 transition-colors cursor-pointer"><FaEnvelope />info@swimclub.com</p>
                    <p className="flex items-center gap-3 text-sky-100 hover:text-sky-300 transition-colors cursor-pointer"><FaPhoneAlt /> +254 700 123 456</p>
                    <p className="flex items-center gap-3 text-sky-100 hover:text-sky-300 transition-colors cursor-pointer"><FaMapMarkerAlt /> Nairobi, Kenya</p>
                </div>

            {/* Social Media */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="space-y-4">
                        <a
                            href="https://facebook.com/yourclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-sky-300 transition-colors cursor-pointer"
                        >
                            <FaFacebookF /> Facebook
                        </a>

                        <a
                            href="https://instagram.com/yourclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-sky-300 transition-colors cursor-pointer"
                        > 
                            <FaInstagram />
                            <span>Instagram</span>
                        </a>

                        <a
                            href="https://x.com/yourclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-sky-300 transition-colors cursor-pointer"
                        >
                            <FaXTwitter className="text-xl" />
                            <span>X</span>
                        </a>
                        <a
                            href="https://x.com/yourclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-sky-300 transition-colors cursor-pointer"
                        >
                            <FaTiktok className="text-xl" />
                            <span>TikTok</span>
                        </a><a
                            href="https://x.com/yourclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-sky-300 transition-colors cursor-pointer"
                        >
                            <FaYoutube className="text-xl" />
                            <span>YouTube</span>
                        </a>
                    </div>
                </div>
                <div className="space-y-4 flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-4">Training Venues</h3>
                    <a
                        className="hover:text-sky-300 transition-colors cursor-pointer" 
                        href="https://maps.app.goo.gl/PdiqrP4zagZxNSKy8"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        All Saints Primary School - Madaraka
                    </a>
                    <a
                        className="hover:text-sky-300 transition-colors cursor-pointer"
                        href="https://maps.app.goo.gl/efqqcBBDkPDj2mwf9"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Public Service Club - UpperHill
                    </a>
                    <a
                        className="hover:text-sky-300 transition-colors cursor-pointer"
                        href="https://maps.app.goo.gl/WCaKtkjTeEeF8KHB9"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Stedmark Gardens - Karen
                    </a>
                </div>
            </div>

            <div className="mt-8 border-t border-zinc-700 pt-4 text-center text-sm text-white">
            © {new Date().getFullYear()} Wave Gliders Swimming Club. All rights reserved.
            </div>
        </div>
</footer>
    )
}