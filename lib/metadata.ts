import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://exports-portfolio.vercel.app'),
  title: {
    default: 'CM Trading & Exports - Chandra Mohan | Export Sourcing Partner Erode, India',
    template: '%s | CM Trading & Exports'
  },
  description: 'Premium export sourcing from Erode, India. Specializing in turmeric, Indian spices, and industrial plastic storage tanks. IEC: AAEPH9855R | GST: 33AAEPH9855R1ZY',
  keywords: ['export sourcing india', 'erode turmeric', 'indian spices export', 'plastic storage tanks', 'verified suppliers india', 'CM trading exports', 'chandra mohan exports'],
  authors: [{ name: 'Chandra Mohan (Chandru)' }],
  creator: 'Chandra Mohan',
  publisher: 'CM Trading & Exports',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://exports-portfolio.vercel.app/',
    title: 'CM Trading & Exports - Export Sourcing Partner from Erode, India',
    description: 'Premium turmeric, Indian spices, and industrial storage solutions. Direct from verified manufacturers in India. IEC certified.',
    siteName: 'CM Trading & Exports',
    images: [
      {
        url: '/images/turmeric.webp',
        width: 1200,
        height: 630,
        alt: 'CM Trading & Exports - Premium Turmeric',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CM Trading & Exports - Export Sourcing Partner',
    description: 'Premium turmeric, Indian spices, and industrial storage solutions from Erode, India.',
    images: ['/images/turmeric.webp'],
  },
  icons: {
    icon: '/assets/icons/favicon.svg',
    apple: '/assets/icons/favicon.svg',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://exports-portfolio.vercel.app/',
  },
};
