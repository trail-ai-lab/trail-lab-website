import { ThemeProvider } from '@/components/theme-provider'
import { BASE_URL, OPEN_GRAPH_IMAGE } from '@/config'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const title = 'TRAIL Lab'
const description =
    'My research is at the intersection of machine learning and learning sciences. I study ways to promote student engagement and learning in adaptive and artificially intelligent educational systems in a fair and equitable manner.'
const url = BASE_URL

export const metadata: Metadata = {
    title: {
        template: `${title} - %s`,
        default: `${title} - TRAIL Lab Website`,
    },
    description,
    authors: [
        {
            name: title,
            url,
        },
    ],
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
        other: {
            rel: 'apple-chrome-512x512',
            url: '/android-chrome-512x512.png',
        },
    },
    metadataBase: new URL(url),
    openGraph: {
        title: {
            template: `${title} - %s`,
            default: `${title} - TRAIL Lab Website`,
        },
        description,
        url,
        siteName: title,
        images: [
            {
                url: OPEN_GRAPH_IMAGE, // or an array of images
                width: 800,
                height: 600,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: {
            template: `${title} - %s`,
            default: `${title} - TRAIL Lab Website`,
        },
        description,
        creator: '@anuragMaravi',
        images: [OPEN_GRAPH_IMAGE], // or an array of images
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
    themeColor: '#2563EB',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Update the maximumScale to allow zooming up to 5x
    userScalable: true, // Enable user scalability
}

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta charSet="utf-8" />
                <meta name="keywords" content="TRAIL Lab, Shamya Karumbaiah, University of Wisconsin-Madison" />

                {/* lazy loading images */}
                <script src="https://afarkas.github.io/lazysizes/lazysizes.min.js" async></script>
            </head>
            <body className={inter.className}>
                <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
