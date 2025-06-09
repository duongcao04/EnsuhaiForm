import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from './providers'

import localFont from 'next/font/local'

const lexendDeca = localFont({
    src: './fonts/LexendDeca.ttf',
})

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Kết Nối Công Nghệ Việt - Nhật',
    description:
        'Khám phá cơ hội nghề nghiệp và kết nối với cộng đồng công nghệ giữa Việt Nam và Nhật Bản. Hãy chia sẻ thông tin của bạn để mở rộng mạng lưới và nắm bắt cơ hội phát triển sự nghiệp toàn cầu.',
    keywords: [
        'Kết nối công nghệ Việt Nhật',
        'Cơ hội nghề nghiệp Việt Nam Nhật Bản',
        'Mạng lưới công nghệ Việt Nhật',
        'Việt Nam Nhật Bản công nghệ',
        'Việc làm công nghệ Nhật Bản',
        'Cộng đồng công nghệ Việt Nhật',
    ],
    openGraph: {
        title: 'Kết Nối Công Nghệ Việt - Nhật',
        description:
            'Khám phá cơ hội nghề nghiệp và kết nối với cộng đồng công nghệ giữa Việt Nam và Nhật Bản.',
        url: 'https://your-splash-page-url.com',
        type: 'website',
        images: [
            {
                url: 'https://your-splash-page-url.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Kết Nối Công Nghệ Việt - Nhật',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kết Nối Công Nghệ Việt - Nhật',
        description:
            'Khám phá cơ hội nghề nghiệp và kết nối với cộng đồng công nghệ giữa Việt Nam và Nhật Bản.',
        images: ['https://your-splash-page-url.com/og-image.jpg'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${lexendDeca.style} antialiased scroll-smooth`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
