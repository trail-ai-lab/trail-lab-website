'use client'

import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTheme } from 'next-themes'

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme()

    // Determine the correct icon based on the theme
    const getIcon = () => {
        if (theme === 'dark') {
            return <span className="icon-[tabler--moon-stars] size-5" />
        }
        return <span className="icon-[tabler--sun] size-5" />
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                    {getIcon()}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col space-y-4">
                <Typography variant="h6">Theme</Typography>
                <Tabs defaultValue={theme}>
                    <TabsList className="w-full">
                        <TabsTrigger value="light" onClick={() => setTheme('light')}>
                            <span className="icon-[tabler--sun] mr-1" />
                            Light
                        </TabsTrigger>
                        <TabsTrigger value="dark" onClick={() => setTheme('dark')}>
                            <span className="icon-[tabler--moon-stars] mr-1" />
                            Dark
                        </TabsTrigger>
                        <TabsTrigger value="system" onClick={() => setTheme('system')}>
                            <span className="icon-[tabler--adjustments-cog] mr-1" />
                            System
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </PopoverContent>
        </Popover>
    )
}
