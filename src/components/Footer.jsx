import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer (){
    return(
    <footer className="bg-zinc-950/50 text-white mt-16">
        <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="flex justify-around md:grid-cols-2">
            {/* Contact Information */}
                <div className="space-y-4">
                    <h3 className="text-xl text-center font-semibold mb-4">Contact Us</h3>
                    <p className="flex items-center gap-3 text-sky-100"><FaEnvelope />info@swimclub.com</p>
                    <p className="flex items-center gap-3 text-sky-100"><FaPhoneAlt /> +254 700 123 456</p>
                    <p className="flex items-center gap-3 text-sky-100"><FaMapMarkerAlt /> Nairobi, Kenya</p>
                </div>

            {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="space-y-4">
                        <a
                            href="https://facebook.com/yourclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-sky-300 transition-colors"
                        >
                            <FaFacebookF /> Facebook
                        </a>

                        <a
                            href="https://instagram.com/yourclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-sky-300 transition-colors"
                        > 
                            <FaInstagram />
                            <span>Instagram</span>
                        </a>

                        <a
                            href="https://x.com/yourclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 hover:text-sky-300 transition-colors"
                        >
                            <FaXTwitter className="text-xl" />
                            <span>X</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-zinc-700 pt-4 text-center text-sm text-white">
            © {new Date().getFullYear()} Wave Gliders Swimming Club. All rights reserved.
            </div>
        </div>
</footer>
    )
}