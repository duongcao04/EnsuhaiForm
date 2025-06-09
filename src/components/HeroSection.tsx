'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Highlight } from './ui/hero-highlight'
import Logo from '@/assets/logo.jpg'
import Banner from '@/assets/banner.jpg'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'

export default function HeroSection() {
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
            className="w-full h-fulls"
        >
            <div className="flex flex-col md:flex-row items-start justify-between gap-20">
                <div className="mt-4">
                    <motion.h1 className="text-2xl px-4 md:text-4xl lg:text-7xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left mx-auto">
                        <p className="flex flex-col xl:flex-row items-start xl:items-center gap-6 leading-none">
                            <Image
                                src={Logo}
                                alt="Logo Esuhai"
                                className="size-24 xl:size-32 object-cover rounded-tl-[30px] rounded-tr-[36px] rounded-b-[38px] ring-2 ring-offset-2 ring-border shadow-square"
                                quality={100}
                            />
                            <TypewriterEffectSmooth
                                words={[
                                    {
                                        text: 'ENSUHAI',
                                        className:
                                            'text-5xl xl:text-9xl bg-clip-text !text-transparent !bg-gradient-to-r !from-purple-200 !via-purple-400 !to-purple-200 !tracking-wide',
                                    },
                                ]}
                                cursorClassName="h-[50px] xl:!h-[130px]"
                            />
                            {/* <span
                                className="text-9xl bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 tracking-wide"
                                style={{ fontFamily: 'lexendDeca' }}
                            >
                                ESUHAI
                            </span> */}
                        </p>
                        <div className="-mt-4 xl:h-4" />
                        <Highlight className="text-black dark:text-white">
                            Sucess in Shigoto
                        </Highlight>
                    </motion.h1>
                    <div className="mt-5 xl:mt-10 ml-3 max-w-full xl:max-w-[100ch] p-3 bg-[#00000065] rounded-lg">
                        <p className="text-base tracking-wide leading-relaxed">
                            <span className="font-bold">
                                Công ty TNHH Ê Su Hai (Esuhai)
                            </span>{' '}
                            được biết đến là một trong những doanh nghiệp hànsg
                            đầu và đáng tin cậy trong lĩnh vực đào tạo nguồn
                            nhân lực, phát triển cơ hội việc làm tại Việt Nam và
                            Nhật Bản. Thành lập từ năm 2006 dưới sự dẫn dắt của
                            Tổng Giám đốc Lê Long Sơn - đại diện pháp luật của
                            công ty, Esuhai đã không ngừng khẳng định vị thế của
                            mình bằng sự minh bạch, chuyên nghiệp và cam kết
                            chất lượng. Sau hơn 18 năm hình thành và phát triển,
                            Esuhai đã xây dựng được hệ thống mạng lưới vững chắc
                            với 10 công ty thành viên, cùng các chi nhánh và
                            trung tâm liên kết đặt tại hơn 12 tỉnh thành trên cả
                            nước, mang đến sự hỗ trợ tận tâm, giải pháp nhân sự
                            tin cậy cho hàng nghìn cá nhân cũng như doanh nghiệp
                            đối tác trong và ngoài nước.
                        </p>
                    </div>
                    <div
                        id="cta"
                        className="mt-6 ml-6 flex flex-col xl:flex-row items-start xl:items-center justify-start gap-7"
                    >
                        <motion.button
                            initial={{
                                background: '#e40714',
                                y: 0,
                                boxShadow: 'none',
                            }}
                            whileHover={{
                                background: '#bd0510',
                                y: -4,
                                boxShadow:
                                    'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
                            }}
                            className="px-14 py-3 text-lg font-bold rounded-full cursor-pointer"
                            onClick={scrollToForm}
                        >
                            Đăng ký ngay
                        </motion.button>
                        <Link href={'https://esuhai.vn/'} target="_blank">
                            {/* <motion.button
                                initial={{
                                    borderColor: 'white',
                                    y: 0,
                                    gap: '12px',
                                }}
                                whileHover={{
                                    background: '#bd0510',
                                    y: -8,
                                    gap: '15px',
                                }}
                                className="px-10 py-3 text-lg font-bold rounded-full flex items-center justify-start cursor-pointer border"
                            >
                                Ensuhai.com
                                <ExternalLink size={21} />
                            </motion.button> */}
                            <HoverBorderGradient containerClassName="cursor-pointer">
                                <div className="flex items-center justify-start gap-2 px-4 py-0.5">
                                    Ensuhai.com
                                    <ExternalLink size={21} />
                                </div>
                            </HoverBorderGradient>
                        </Link>
                    </div>
                    {/* <div className="mt-14 flex items-center justify-center">
                        <button
                            onClick={scrollToForm}
                            className="w-fit flex flex-col items-center justify-center cursor-pointer"
                        >
                            <p className="leading-none text-base opacity-70 text-[#667eea] font-normal">
                                Đăng ký ngay
                            </p>
                            <div className="-mt-3 scale-60">
                                <ScrollDownIcon />
                            </div>
                        </button>
                    </div> */}
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 1,
                    }}
                    whileHover={{
                        scale: 1.15,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    className="max-w-full h-[60vh] aspect-square rounded-2xl cursor-pointer"
                >
                    <Image
                        src={Banner}
                        alt="Banner Esuhai"
                        className="size-full object-top-left rounded-2xl"
                        quality={100}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}
