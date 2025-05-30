'use client'

import React from 'react'
import RegisterForm from './_components/RegisterForm'
import { ColourfulText } from '@/components/ui/colourful-text'
import { motion } from 'motion/react'
import Image from 'next/image'
import ScrollDownIcon from '@/components/icons/ScrollDownIcon'

export default function RegisterPage() {
    const scrollToForm = (e: React.MouseEvent) => {
        e.preventDefault()
        const formElement = document.getElementById('form')
        if (formElement) {
            formElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            })
        }
    }
    return (
        <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="https://assets.aceternity.com/linear-demo.webp"
                    alt="a"
                    width={10000}
                    height={10000}
                    className="h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none"
                />
            </motion.div>
            <div className="w-full h-full overflow-auto">
                <div className="mt-[40vh] pb-40">
                    <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
                        Việc Làm <ColourfulText text="Công Nghệ" /> Việt Nhật
                        <br />
                        <p
                            style={{ margin: '20px 0 0 0' }}
                            className="text-xl font-medium tracking-wide opacity-70"
                        >
                            Cơ hội nghề nghiệp trong lĩnh vực công nghệ thông
                            tin
                        </p>
                        <div className="mt-10 flex items-center justify-center">
                            <button
                                onClick={scrollToForm}
                                className="w-fit flex flex-col items-center justify-center cursor-pointer"
                            >
                                <p className="leading-none text-base opacity-70 text-[#667eea] font-normal">
                                    Đăng ký ngay
                                </p>
                                <div className="-mt-1 scale-75">
                                    <ScrollDownIcon />
                                </div>
                            </button>
                        </div>
                    </h1>
                    <div className="mt-10 sticky">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
