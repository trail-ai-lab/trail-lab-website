'use client'

import { DesktopNav } from '@/components/layout/desktop-nav'
import { MobileNav } from '@/components/layout/mobile-nav'
import { Typography } from '@/components/typography'
import Image from 'next/image'
import NextLink from 'next/link'

export const Header = () => {
    return (
        <div className="sticky top-0 z-50 w-full">
            {/* UW-Madison Header */}
            <div
                className="w-full bg-primary text-white px-4 py-1 text-[0.825rem] font-semibold uppercase tracking-wide font-sans"
                role="navigation"
            >
                <div className="mx-auto flex justify-start">
                    <a href="http://www.wisc.edu" className="hover:underline" aria-label="University home page">
                        U
                        <span>
                            niversity <span className="lowercase">of</span>{' '}
                        </span>
                        W<span>isconsin</span>–Madison
                    </a>
                </div>
            </div>

            {/* TRAIL Lab Header */}
            <header className="h-[80px] w-full border-b bg-background/80 backdrop-blur-md">
                <div className="mx-auto max-w-7xl px-4 flex h-full items-center justify-between">
                    <NextLink href="/" className="flex items-center gap-2" aria-label="TRAIL Lab">
                        <Image
                            src="/images/logo/trail-logo.svg"
                            alt="TRAIL Logo"
                            width={32}
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
        </div>
    )
}
