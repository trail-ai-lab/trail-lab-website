'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'
import { routes } from '@/data'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export const DesktopNav = () => {
    const pathname = usePathname()

    const isActive = useMemo(
        () => (path: string) => {
            return pathname === path
        },
        [pathname],
    )

    return (
        <div className="hidden items-center space-x-4 md:flex">
            <nav className="flex space-x-6 font-medium">
                {routes.map((route) => (
                    <NextLink
                        key={route.path}
                        href={route.path}
                        className={`${isActive(route.path) && 'text-primary'}`}
                    >
                        {route.label}
                    </NextLink>
                ))}
            </nav>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center space-x-1">
                <ModeToggle />
            </div>
        </div>
    )
}
