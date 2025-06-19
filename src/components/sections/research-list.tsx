'use client'

import { Typography } from '@/components/typography'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { researchAreas } from '@/data/research'
import Image from 'next/image'
import Link from 'next/link'

type ResearchListProps = {
    filterByIds?: string[]
}

export const ResearchList = ({ filterByIds }: ResearchListProps) => {
    const filteredAreas = filterByIds ? researchAreas.filter((r) => filterByIds.includes(r.id)) : researchAreas

    return (
        <section className="flex flex-col space-y-8">
            <Typography variant="h1" underline>
                Research Areas
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAreas.map((area) => (
                    <Card key={area.id} className="flex flex-col overflow-hidden">
                        <CardHeader className="p-0">
                            <AspectRatio ratio={16 / 9} className="w-full">
                                <Image
                                    src={area.image} // string path to image in research object
                                    alt={area.title}
                                    fill
                                    className="object-contain invert-0 dark:invert"
                                />
                            </AspectRatio>
                        </CardHeader>

                        <CardContent className="space-y-4 p-6">
                            <CardTitle className="text-xl">{area.title}</CardTitle>

                            {area.funders?.length > 0 && (
                                <div className="flex flex-wrap gap-2 items-center">
                                    {area.funders.map((funder) => (
                                        <Image
                                            key={funder.name}
                                            src={funder.logo}
                                            alt={funder.name}
                                            width={40}
                                            height={40}
                                            className="h-10 object-contain"
                                        />
                                    ))}
                                </div>
                            )}

                            <Link
                                href={`/research/${area.id}`}
                                className="inline-block text-primary hover:underline font-medium"
                            >
                                Explore Research →
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
