import { motion } from "framer-motion"

export default function HomePage() {
    return(
        <div className="flex justify-left mx-5 py-10  border-white mt-5 min-h-screen">
            <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.9,
                ease: "easeOut",
            }}
            className="max-w-5xl px-10 text-balance text-white text-2xl md:text-4xl lg:text-[120px] font-bold leading-[0.95]"
            >
            Wave Gliders Swim Club
            </motion.h1>
            <motion.p>

            </motion.p>
        </div>
    )
}
