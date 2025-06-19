import { DesktopNav } from '@/components/layout/desktop-nav'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Typography } from '@/components/typography'
import Image from 'next/image'
import NextLink from 'next/link'

export const Header = () => {
    return (
        <header className="sticky left-0 top-0 z-10 min-h-[80px] w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container flex h-full items-center justify-between">
                <NextLink href="/" className="flex items-center gap-2" aria-label="TRAIL Lab">
                    <Image
                        src="/images/logo/trail-logo.svg"
                        alt="TRAIL Logo"
                        width={32} // Adjust as needed
                        height={32}
                        priority
                        className="invert-0 dark:invert"
                    />
                    <Typography variant="h1">TRAIL Lab</Typography>
                </NextLink>
                <DesktopNav />
                <MobileNav />
            </div>
        </header>
    )
}
