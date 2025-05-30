'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function Providers({ children }: { children: React.ReactNode }) {
	return <AntdRegistry>{children}</AntdRegistry>
}