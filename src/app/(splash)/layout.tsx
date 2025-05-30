export default function SplashLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div id="splash" className="max-h-screen overflow-hidden max-w-screen">
			<div className="w-screen h-screen grid place-items-center">{children}</div>
		</div>
	);
}
