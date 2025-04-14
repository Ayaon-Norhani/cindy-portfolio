import Script from 'next/script'; 
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Norhani Ayaon',
	description:
		'Explore the portfolio of Norhani Ayaon – a dedicated software developer offering robust IT support and efficient administrative solutions. Let’s build something amazing together.',
	keywords: [
		'Software Developer',
		'Backend Developer',
		'Golang Developer',
		'IT Support',
		'Admin Support',
		'Software Developer',
		'Admin Support',
		'IT Support',
		'Backend Developer',
		'Golang Developer',
		'PostgreSQL',
		'MySQL',
		'REST APIs',
		'Redis',
		'Linux',
		'Troubleshooting',
		'Technical Support',
		'Remote Admin',
		'Tech Documentation',
		'VSCode',
		'Virtual Assistance',
		'Excel',
		'Graphic Designer',
		'Adobe Photoshop',
	],
	authors: [{ name: 'Norhani Ayaon', url: 'https://www.linkedin.com/in/norhani-ayaon/' }],
	creator: 'Norhani Ayaon',
	openGraph: {
		title: 'Norhani Ayaon - Software Developer & Admin Support',
		description:
			'Explore Norhani Ayaon’s portfolio – focused on backend development, system optimization, and international tech collaboration. Let’s build efficient systems together.',
		url: 'https://norhani.vercel.app',
		siteName: 'Norhani Ayaon - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 5200,
				height: 2900,
				alt: 'Norhani Ayaon - Software Developer & Admin Support',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Norhani Ayaon - Software Developer',
		description:
			'Norhani Ayaon is a software developer & admin support professional building robust backend systems and providing technical assistance for global teams.',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	metadataBase: new URL('https://norhani.vercel.app'),
	alternates: {
		canonical: 'https://norhani.vercel.app',
	},
	other: {
		email: 'mailto:norhaniayaon@gmail.com',
		linkedin: 'https://www.linkedin.com/in/norhani-ayaon/',
		github: 'https://github.com/Ayaon-Norhani',
	},
};

export default function RootLayout({
	children,
  }: Readonly<{
	children: React.ReactNode;
  }>) {
	return (
	  <html lang="en">
		<head>
		  {/* Google Analytics - Updated to use next/script */}
		  <Script
			strategy="afterInteractive"
			src="https://www.googletagmanager.com/gtag/js?id=G-4T6N8SLFS7"
		  />
		  <Script
			id="google-analytics"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
			  __html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-4T6N8SLFS7');
			  `,
			}}
		  />
		  <link rel="icon" href="/favicon.ico" />
		</head>
		<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
		  {children}
		</body>
	  </html>
	);
  }