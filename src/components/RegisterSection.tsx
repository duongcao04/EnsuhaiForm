import React from 'react'
import RegisterForm from './RegisterForm'
import { ContainerTextFlip } from './ui/container-text-flip'
import { motion } from 'motion/react'

export default function RegisterSection() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            whileInView={{
                opacity: 1,
                y: [20, -5, 0],
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
            }}
            className="mt-10 sticky"
        >
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans flex items-center justify-center gap-2 xl:gap-5">
                Đăng ký
                <div className="block xl:hidden">
                    <ContainerTextFlip
                        words={['tư vấn']}
                        className="text-2xl px-2 py-1"
                    />
                </div>
                <div className="hidden xl:block">
                    <ContainerTextFlip words={['tư vấn']} />
                </div>
                việc làm
            </h1>
            <div className="h-4 xl:h-20" />
            <motion.div transition={{ delay: 1 }}>
                <RegisterForm />
            </motion.div>
        </motion.div>
    )
}
