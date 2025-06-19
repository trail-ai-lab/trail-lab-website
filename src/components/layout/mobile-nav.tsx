import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { routes } from '@/data'
import NextLink from 'next/link'

export const MobileNav = () => {
    return (
        <div className="flex items-center md:hidden space-x-1">
            <ModeToggle />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <span className="icon-[tabler--align-right] size-5" />
                        <span className="sr-only">Dropdown Menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[150px]">
                    {routes.map((route) => (
                        <NextLink key={route.path} href={route.path}>
                            <DropdownMenuItem>{route.label}</DropdownMenuItem>
                        </NextLink>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
