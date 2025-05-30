import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Đăng Ký | Kết Nối Công Nghệ Việt - Nhật',
    description:
        'Đăng ký để mở rộng mạng lưới kết nối, khám phá cơ hội nghề nghiệp và chia sẻ thông tin với cộng đồng công nghệ Việt Nam và Nhật Bản.',
    keywords: [
        'Đăng ký',
        'Kết nối công nghệ Việt Nhật',
        'Việc làm Việt Nhật',
        'Cộng đồng công nghệ Việt Nhật',
        'Mạng lưới công nghệ',
    ],
    openGraph: {
        title: 'Đăng Ký | Kết Nối Công Nghệ Việt - Nhật',
        description:
            'Hãy đăng ký ngay để mở rộng mạng lưới và nắm bắt cơ hội phát triển nghề nghiệp toàn cầu.',
        url: 'https://your-splash-page-url.com/register',
        type: 'website',
        images: [
            {
                url: 'https://your-splash-page-url.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Đăng Ký | Kết Nối Công Nghệ Việt - Nhật',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Đăng Ký | Kết Nối Công Nghệ Việt - Nhật',
        description:
            'Đăng ký để mở rộng mạng lưới và nắm bắt cơ hội phát triển nghề nghiệp toàn cầu.',
        images: ['https://your-splash-page-url.com/og-image.jpg'],
    },
}

export default function RegisterLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return children
}
