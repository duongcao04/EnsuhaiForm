'use client'

import React from 'react'
import { HeroHighlight } from '@/components/ui/hero-highlight'
import HeroSection from '../components/HeroSection'
import RegisterSection from '../components/RegisterSection'

export default function RegisterPage() {
    return (
        <HeroHighlight
            containerClassName="w-screen h-screen overflow-hidden"
            className="w-screen max-w-screen max-h-screen overflow-auto"
        >
            <section className="container mt-30 xl:mt-0 xl:h-[99vh] flex items-center justify-start xl:justify-center">
                <HeroSection />
            </section>
            <section className="container mt-20">
                <RegisterSection />
            </section>
            <div className="h-30" />
        </HeroHighlight>
    )
}
