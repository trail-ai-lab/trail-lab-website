'use client'

import { Typography } from '@/components/typography'
import { Card, CardContent } from '@/components/ui/card'
import { researchAreas } from '@/data/research'
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

            <div className="flex flex-col space-y-6">
                {filteredAreas.map((area) => (
                    <div key={area.id} className="space-y-6 pb-6">
                        <Card className="w-full pt-6">
                            <CardContent className="space-y-6">
                                <Typography variant="h2">{area.title}</Typography>
                                <p className="leading-7 [&:not(:first-child)]:mt-6">{area.summary}</p>
                                <Link
                                    href={`/research/${area.id}`}
                                    className="inline-block text-primary hover:underline font-medium"
                                >
                                    Explore Research →
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    )
}
