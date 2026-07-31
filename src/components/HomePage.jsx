import { motion } from "framer-motion"

export default function HomePage() {
    return(
        <div className="flex h-screen flex-col justify-between overflow-hidden mx-5 py-25 px-12">
            <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                duration: 1,
                ease: "easeOut",
            }}
            className="max-w-5xl text-balance text-white text-2xl md:text-6xl lg:text-[100px] font-bold leading-[0.95]"
            >
            Wave Gliders Swim Club
            </motion.h1>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1,
                ease: "easeOut",
            }}
            className="max-w-4xl self-center p-6">
                <h2 className="text-white text-xl md:text-4xl text-center">
                    Welcome to Wave Gliders Swim Club
                </h2>
                <p className="mt-4 max-w-xl m:text-lg text-white text-center">
                    Empowering swimmers of all ages through world-class coaching, personalised training, and a passion for excellence in and beyond the water.
                </p>
                <div className="flex flex-row justify-center gap-10">
                    <button className="w-40 mt-6 text-white backdrop-blur-md rounded-lg bg-white/8 p-2 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                        Our Programmes
                    </button>
                    <button className="w-40 mt-6 text-white backdrop-blur-md rounded-lg bg-white/8 p-2 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),_0_10px_15px_-3px_rgba(0,0,0,0.1)]">
                        About Us
                    </button>
                </div>
            </motion.div>
        </div>
    )
}
