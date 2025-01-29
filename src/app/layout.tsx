// src/app/layout.tsx
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,
};

export const metadata: Metadata = {
	title: {
		default: "8aiku - Barcode Generator",
		template: "%s | Barcode creator",
	},
	description:
		"Create, customize, and download barcodes in multiple formats. online barcode generator supporting CODE128, EAN13, UPC, and more.",
	keywords: [
		"barcode generator",
		"barcode maker",
		"QR code",
		"CODE128",
		"EAN13",
		"UPC",
		"QR code generator",
		"free barcode generator",
	],
	authors: [{ name: "8aiku" }],
	creator: "8aiku",
	publisher: "8aiku",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://www.8aiku.com"),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.8aiku.com",
		title: "8aiku - Barcode Generator",
		description:
			"Barcode generator online.",
		siteName: "8aiku Barcode tool",
		images: [
			{
				url: "/src/assets/barcoda.avif",
				width: 1200,
				height: 630,
				alt: "8aiku - Barcode Generator",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "8aiku - Barcode Generator",
		description:
			"8aiku barcode generator.",
		images: ["/src/assets/barcoda.avif"],
		creator: "@krtclcdy",
	},
	icons: "/favicon.ico",
	// manifest: "/manifest.json",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-site-verification",
		yandex: "your-yandex-verification",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Navbar />
					<main className="grow flex items-center justify-center">
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
