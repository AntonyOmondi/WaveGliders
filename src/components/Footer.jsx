export default function Footer (){
    return(
    <footer className="bg-zinc-950/50 text-white mt-16">
        <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="flex justify-around md:grid-cols-2">
            {/* Contact Information */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-sky-100">📧 info@swimclub.com</p>
                    <p className="text-sky-100">📞 +254 700 123 456</p>
                    <p className="text-sky-100">📍 Nairobi, Kenya</p>
                </div>

            {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-6">
                    <a
                        href="https://facebook.com/yourclub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-300 transition-colors"
                    >
                        Facebook
                    </a>

                    <a
                        href="https://instagram.com/yourclub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-300 transition-colors"
                    >
                        Instagram
                    </a>

                    <a
                        href="https://x.com/yourclub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-300 transition-colors"
                    >
                        X
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