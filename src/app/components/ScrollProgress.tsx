'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <>
            {/* Top progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform-gpu z-50"
                style={{ scaleX, transformOrigin: "0%" }}
            />

            {/* Side progress indicator */}
            <motion.div
                className="fixed right-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-white/10 rounded-full z-40 hidden lg:block"
            >
                <motion.div
                    className="w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                    style={{ scaleY: scrollYProgress, transformOrigin: "0%" }}
                />
            </motion.div>
        </>
    )
}